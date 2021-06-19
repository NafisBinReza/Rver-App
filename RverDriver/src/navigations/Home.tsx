import { createStackNavigator } from "@react-navigation/stack";
import * as React from 'react';
import FarePayment from '../screens/FarePayment';
import HomeScreen from '../screens/HomeScreen';
import OrderCancel from '../screens/OrderCancel';
import VehicleForm from '../screens/VehicleForm';

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName={"Home"}>
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"VehicleForm"} component={VehicleForm} />
      <Stack.Screen name={"FarePayment"} component={FarePayment} />
      <Stack.Screen name={"OrderCancel"} component={OrderCancel} />
    </Stack.Navigator>
  );
}