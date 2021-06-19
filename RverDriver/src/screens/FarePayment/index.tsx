import { useNavigation, useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';
import FareDetails from '../../components/FareDetails';
import { updateOrder } from '../../graphql/mutations';
import { RootContext } from '../../navigations/Root';
import styles from "./styles";

export default function FarePayment() {
  const route = useRoute() as any,
    navigation = useNavigation();

  const { currentUser, setCurrentUser } = useContext(RootContext);

  const { fare, order } = route.params;

  // Set the current order as completed
  const setOrderAsCompleted = async () => {
    if (currentUser) {
      // Set the completedAt and status of the order to completed
      await API.graphql(graphqlOperation(updateOrder, {
        input: {
          id: order.id,
          status: 'completed',
          completedAt: (new Date()).toISOString()
        }
      })) as any;

      // navigate to the Home screen
      navigation.navigate("Home");

      // Store the new order in the local state
      setCurrentUser({
        ...currentUser,
        orders: [...currentUser.orders, order]
      })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.fareBreakdownContainer}>
        <Text style={styles.fareBreakdownText}>ভাড়া</Text>
      </View>
      <FareDetails fare={fare} />
      <Pressable style={styles.payButton} onPress={setOrderAsCompleted}>
        <Text style={styles.payButtonText}>ভাড়া গ্রহণ করুন</Text>
      </Pressable>
    </View>
  )
}
