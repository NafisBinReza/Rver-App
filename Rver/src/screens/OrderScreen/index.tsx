import { useNavigation, useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';
import { IOrder, IVehicle } from '../../../types';
import BasicList from '../../components/BasicList';
import OrderMap from '../../components/OrderMap';
import { updateOrder } from '../../graphql/mutations';
import { getFare, getVehicle } from './queries';
import styles from './styles';
import { onOrderUpdated, onVehicleUpdated } from './subscriptions';

const OrderScreen = () => {
  const route = useRoute() as any;
  const [vehicle, setVehicle] = useState<IVehicle | null>(null);
  const [order, setOrder] = useState<IOrder>(route.params.order);

  const navigation = useNavigation();
  console.log(order.id);

  // Subscribe to order updates
  useEffect(() => {
    const subscribe = (API.graphql(graphqlOperation(onOrderUpdated, {
      id: order.id
    })) as any).subscribe({
      next: (data: any) => {
        // Anytime there is an update to the order, store it in the state
        setOrder(data.value.data.onOrderUpdated)
      },
      error: (error: any) => console.log(error)
    });

    return () => {
      console.log("unsubscribe OrderScreen onOrderUpdated")
      subscribe.unsubscribe()
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Subscribe to vehicle updates
  useEffect(() => {
    const subscribe = (API.graphql(graphqlOperation(onVehicleUpdated, {
      id: order.vehicleId
    })) as any).subscribe({
      next: (data: any) => {
        // Anytime there is an update to the vehicle, store it in the state
        setVehicle(data.value.data.onVehicleUpdated)
      },
      error: (error: any) => console.log(error)
    });
    return () => {
      console.log("unsubscribe OrderScreen onVehicleUpdated")
      subscribe.unsubscribe()
    };
  }, [order]);

  // Run every time the order changes
  useEffect(() => {
    if (!order || order?.vehicleId === '1' || order?.status === 'idle') {
      setVehicle(null);
      return;
    }

    // fetch the vehicle when ever the order changes
    const fetchVehicle = async () => {
      const vehicleData = await API.graphql(graphqlOperation(getVehicle, {
        id: order.vehicleId
      })) as any;
      setVehicle(vehicleData.data.getVehicle);
    }

    // If the order's status is payment_due, fetch the updated fare of the order and navigate to the FarePayment screen
    if (order.status === 'payment_due') {
      async function fetchUpdatedFare() {
        const response = await API.graphql(graphqlOperation(getFare, { id: order.fare.id })) as any
        navigation.navigate("FarePayment", { fare: response.data.getFare, order });
      };
      fetchUpdatedFare();
    } else if (order.status === 'completed') {
      navigation.navigate("Home");
    }

    fetchVehicle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  return (
    // If the order is completed, return null
    // else if order exists, render the Order map, map that shows the current location and info regarding the vehicle and driver connected to the order
    order.status === 'completed' ? null : order ? <View style={{ display: 'flex', justifyContent: 'space-between' }}>
      <View style={{ height: Dimensions.get('window').height - 300 }}>
        <OrderMap vehicle={vehicle} order={order} />
      </View>
      {/* As long as the order is not is dropping off and payment due state, the user will see a cancel order button that will cancel the current order */}
      {order.status !== 'dropping_off' && order.status !== 'payment_due' &&
        <Pressable style={styles.cancelOrderButton} onPress={async () => {
          // Set the status of the order as cancelled, that way no other driver will be aware of this order
          await API.graphql(graphqlOperation(updateOrder, {
            input: {
              id: order.id,
              status: 'cancelled'
            }
          }));
          // Navigate to the home screen
          navigation.navigate("Home");
        }}>
          <Text style={styles.cancelOrderButtonText}>Cancel Request</Text>
        </Pressable>
      }
      {/* If the status of the order is not payment_due, show the status of the order */}
      {order.status !== 'payment_due' && <View style={styles.orderItemContainer}>
        <Text style={styles.orderItemText}>
          Order status: {(order?.status ?? 'idle').split("_").map(c => c.charAt(0).toUpperCase() + c.substring(1)).join(" ")}
        </Text>
      </View>}
      {/* If the status of the order is not payment_due and a driver has accepted the order, show the status of the information of the driver */}
      {vehicle && order.status !== 'payment_due' && <BasicList items={[['License Plate', vehicle.licensePlate], ['Driver Name', vehicle.user.firstName + " " + vehicle.user.lastName], ['Driver Telephone Number', vehicle.user.telephone]]} />}
    </View> : null
  );
};

export default OrderScreen;
