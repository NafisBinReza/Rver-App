import { useNavigation, useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { IOrder } from '../../../types';
import FareDetails from '../../components/FareDetails';
import { RootContext } from '../../navigations/Root';
import { onOrderUpdated } from '../OrderScreen/subscriptions';
import styles from "./styles";

export default function FarePayment() {
  const route = useRoute() as any,
    navigation = useNavigation();
  const { setCurrentUser } = useContext(RootContext);
  const order = route.params.order as IOrder;

  // Subscribe to updates for the vehicle connected to the order
  useEffect(() => {
    const subscribe = (API.graphql(graphqlOperation(onOrderUpdated, {
      id: order.id
    })) as any).subscribe({
      next: (data: any) => {
        // If the current order status have been completed, store the order in the currentUser order state
        if (data.value.data.onOrderUpdated.status === 'completed') {
          setCurrentUser((currentUser) => ({ ...currentUser!, orders: [...currentUser!.orders, data.value.data.onOrderUpdated] }))
          // Also navigate to the home screen
          navigation.navigate("Home")
        }
      },
      error: (error: any) => console.log(error)
    });

    return () => {
      console.log("unsubscribe FarePayment onOrderUpdated");
      subscribe.unsubscribe()
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.fareBreakdownContainer}>
        <Text style={styles.fareBreakdownText}>Fare Breakdown</Text>
      </View>
      <FareDetails fare={route.params.fare} />
    </View>
  )
}
