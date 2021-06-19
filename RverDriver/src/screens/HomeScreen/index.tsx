import { useNavigation } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Entypo from 'react-native-vector-icons/Entypo';
import DriveStatus from '../../components/DriveStatus';
import OrderPopup from '../../components/OrderPopup';
import { updateFare, updateOrder } from '../../graphql/mutations';
import { useOrders } from '../../hooks/useOrders';
import { useVehicleDetails } from '../../hooks/useVehicleDetails';
import { RootContext } from '../../navigations/Root';
import { IDistanceInfo, IOrder, LocPoint } from '../../types';
import { didLocationChangeSignificantly, isWithinRadius } from '../../utils';
import { calculateDestinationLocation } from '../../utils/calculateDestinationLocation';
import { calculateFinalFare } from '../../utils/calculateFinalFare';
import { convertToBengali } from '../../utils/convertToBengali';
import { getDistanceInfo } from '../../utils/getDistanceInfo';
import VehicleForm from '../VehicleForm';
import styles from './styles';
import { onOrderCreated, onOrderUpdated } from './subscription';

export default function HomeScreen() {
  const { currentUser, currentLocation, setCurrentLocation } = useContext(RootContext);
  // Store the distance info between the origin and destination
  const [distanceInfo, setDistanceInfo] = useState<IDistanceInfo | null>(null);

  const navigation = useNavigation();
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  const { updateVehicleData } = useVehicleDetails();
  const { order, resetState, setOrder, fetchOrders, declineCurrentOrder, setAcceptedOrder, setAcceptedOrderToStatus } = useOrders();

  const vehicleDetails = currentUser?.vehicle;
  const driver_location: LocPoint = {
    latitude: vehicleDetails?.latitude!,
    longitude: vehicleDetails?.longitude!,
  };
  const destination_location = { ...driver_location };

  useEffect(() => {
    // Fetch latest idle orders from the database
    fetchOrders();
    // Create a subscription that will be triggered every time an order is created
    const subscribe = (API.graphql(graphqlOperation(onOrderCreated)) as any).subscribe({
      next: (data: any) => {
        // If the newly created order's vehicleType is the same as the current vehicle and if its within 500m radius only then show it to the driver
        const new_order = data.value.data.onOrderCreated as IOrder;
        if (new_order.vehicleType === vehicleDetails.type && isWithinRadius({
          latitude: data.value.data.originLatitude,
          longitude: data.value.data.originLongitude,
        }, currentLocation, .5))
          setOrder({
            accepted: null,
            current: [new_order]
          })
      },
      error: (error: any) => console.log("OnOrderCreated", error)
    });
    return () => subscribe.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function subscribeToAcceptedOrder() {
      if (order.accepted) {
        // Subscribe to the accepted order update operation
        const subscribe = (API.graphql(graphqlOperation(onOrderUpdated, {
          id: order.accepted.id
        })) as any).subscribe({
          next: (data: any) => {
            setOrder({
              accepted: data.value.data.onOrderUpdated,
              current: []
            })
          },
          error: (error: any) => console.log(error)
        });
        return () => subscribe.unsubscribe();
      }
    }

    // If the accepted order has been cancelled, then reset the state and navigate to the OrderCancel screen 
    if (order.accepted?.status === 'cancelled') {
      setTime({ minutes: 0, seconds: 0 });
      resetState();
      navigation.navigate("OrderCancel");
    }

    return subscribeToAcceptedOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order.accepted]);

  calculateDestinationLocation(destination_location, order);

  const memoizedMapsViewDirection = useMemo(() => {
    return (order.current.length !== 0 || order.accepted !== null) ? <MapViewDirections
      onReady={(e) => {
        setDistanceInfo(e)
      }}
      origin={currentLocation}
      destination={destination_location}
      apikey={'GOOGLE_MAPS_SDK_API_KEY'}
      strokeWidth={3}
      strokeColor={'black'}
    /> : null
  }, [time.minutes, order]);

  function renderBottomContainer() {
    // If there is not current orders and no order has been accepted, show the offline/online toggle button
    if (order.current.length === 0 && !order.accepted)
      return <Text style={styles.bottomContainerText}>তুমি {vehicleDetails.isActive ? 'অনলাইন' : 'অফলাইন'}</Text>;
    // if order has been accepted and there is a distance info obtained from google's api, render the following component
    else if (distanceInfo && order.accepted)
      return <View style={{ width: '100%' }}>
        <DriveStatus distanceInfo={distanceInfo} acceptedOrder={order.accepted} />
        <View style={{ flexDirection: 'row', justifyContent: order.accepted.status === 'dropping_off' ? 'center' : 'space-between', width: '100%' }}>
          {order.accepted.status !== 'dropping_off' ? <Pressable onPress={async () => {
            // If the order is not is dropping off status, then the order can be cancelled by the driver,
            // Then set the vehicleId of the cancelled order to 1 and change its status to idle
            if (order.accepted) {
              await API.graphql(
                graphqlOperation(updateOrder, {
                  input: {
                    id: order.accepted.id,
                    status: 'idle',
                    vehicleId: '1'
                  }
                })
              );
            }
            // Also reset the state and navigate back to Home Screen
            setTime({ minutes: 0, seconds: 0 });
            resetState();
            navigation.navigate("Home");
          }}>
            <Text style={{ padding: 5, marginVertical: 10, borderRadius: 5, backgroundColor: '#f32222', color: 'white', textAlign: 'center', fontSize: 16, fontWeight: 'bold', elevation: 5 }}>বাতিল</Text>
          </Pressable> : <Pressable onPress={async () => {
            // If the order has been accepted, store the order status and new fare to the db, and reset the state, when end ride button is pressed
            if (order.accepted) {
              await API.graphql(
                graphqlOperation(updateFare, {
                  input: order.accepted.fare,
                })
              );
              await API.graphql(
                graphqlOperation(updateOrder, {
                  input: {
                    id: order.accepted.id,
                    status: 'payment_due'
                  }
                })
              );
              setTime({ minutes: 0, seconds: 0 });
              resetState();
              // Navigate to the FarePayment screen
              navigation.navigate("FarePayment", {
                fare: order.accepted.fare,
                order: order.accepted
              });
            }
          }}>
            <Text style={{ padding: 5, marginVertical: 10, borderRadius: 5, backgroundColor: '#f32222', color: 'white', textAlign: 'center', fontSize: 16, fontWeight: 'bold', elevation: 5 }}>শেষ করুন</Text>
          </Pressable>}
          {order.accepted.status !== 'dropping_off' && <Pressable onPress={async () => {
            setTime({ minutes: 0, seconds: 0 });
            await setAcceptedOrderToStatus('dropping_off');
          }}>
            <Text style={{ padding: 5, marginVertical: 10, borderRadius: 5, backgroundColor: '#16d446', color: 'white', textAlign: 'center', fontSize: 16, fontWeight: 'bold', elevation: 5 }}>শুরু করুন</Text>
          </Pressable>}
        </View>
      </View>
    return null;
  }

  return vehicleDetails ? <View style={{ height: '100%' }}>
    <MapView
      onUserLocationChange={async e => {
        const { coordinate } = e.nativeEvent;
        const newMinutes = parseInt((time.seconds / 5).toString(), 10)
        console.log(order.accepted?.status, newMinutes, time.minutes, time.seconds)
        if (order.accepted?.status === 'dropping_off') {
          if (Math.abs(time.minutes - newMinutes) === 1) {
            let f_t = order.accepted.fare.f_t + 1;
            // Checking if the vehicle crossed a specified threshold of distance(100m) within a specific time interval(60s)
            if (time.minutes <= 40) {
              const { distance } = await getDistanceInfo(coordinate, vehicleDetails);
              if (distance < 100)
                f_t -= 0.5;
            }

            if (time.minutes >= 60 && time.minutes <= 100)
              f_t += 0.37
            else if (time.minutes >= 110 && time.minutes <= 150)
              f_t += .3
            else if (time.minutes >= 160 && time.minutes <= 200)
              f_t += .25

            if (order.accepted)
              setOrder({
                current: [],
                accepted: {
                  ...order.accepted,
                  fare: {
                    ...order.accepted.fare,
                    f_t
                  }
                }
              })

            if (order.accepted) {
              await updateVehicleData({
                latitude: coordinate.latitude,
                longitude: coordinate.longitude,
                heading: coordinate.heading
              });
            }
          }
          setTime({
            seconds: time.seconds + 1,
            minutes: newMinutes
          })
        }
        // If an order has been accepted and if the driver position has changed significantly from the previous location
        // update current driver location in the db after a specific time interval
        if (order.accepted && didLocationChangeSignificantly(coordinate, currentLocation)) {
          setCurrentLocation({
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
          });
        }
      }}
      // @ts-ignore
      userLocationUpdateInterval={1000}
      style={{
        flex: 1
      }}
      showsUserLocation
      initialRegion={{
        ...currentLocation,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {memoizedMapsViewDirection}
    </MapView>

    {order.accepted && order.accepted?.status !== 'idle' && <View style={styles.balanceContainer}>
      <Text style={[styles.balanceContainerText, { color: '#0fbb26' }]}>৳</Text>
      <Text style={[styles.balanceContainerText, { color: '#fff' }]}>{order?.accepted && order?.accepted.status !== 'picking_up' ? convertToBengali(calculateFinalFare(order.accepted.fare)) : "০.০০"}</Text>
    </View>}

    <Pressable onPress={() => (navigation as any).openDrawer()} style={[styles.roundButton, { top: 10, left: 10 }]}>
      <Entypo name="list" size={30} />
    </Pressable>
    {order.accepted === null && <Pressable onPress={() => fetchOrders()} style={[styles.roundButton, { top: 75, left: 10 }]}>
      <Entypo name="magnifying-glass" size={30} />
    </Pressable>}
    {!order.accepted && <Pressable onPress={async () => {
      updateVehicleData({ isActive: !vehicleDetails.isActive });
    }} style={styles.centerButton}>
      <Text style={styles.centerButtonText}>{vehicleDetails.isActive ? 'বন্ধ' : 'যাও'}</Text>
    </Pressable>}
    {order.current.length > 0 && distanceInfo ? <OrderPopup distanceInfo={distanceInfo} orders={order.current} onAccept={() => setAcceptedOrder(vehicleDetails.id)} onDecline={declineCurrentOrder} /> : <View style={styles.bottomContainer}>{
      renderBottomContainer()
    }</View>}
  </View > : !currentUser ? null : <VehicleForm />;
}
