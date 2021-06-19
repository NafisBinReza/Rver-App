import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from 'react';
import DestinationSearch from '../screens/DestinationSearch';
import FarePayment from '../screens/FarePayment';
import HomeScreen from '../screens/HomeScreen';
import OrderCancel from "../screens/OrderCancel";
import OrderScreen from "../screens/OrderScreen";
import SearchResults from '../screens/SearchResults';
import { RootContext } from "./Root";

const StackNavigator = createStackNavigator();

export default function HomeNavigator() {
  const navigation = useNavigation()
  const { currentUser } = React.useContext(RootContext)
  React.useEffect(() => {
    const [currentOrder] = currentUser.orders.filter(order => order.status !== 'idle');
    if (currentOrder) {
      navigation.navigate("Order", {
        order: currentOrder
      })
    }
  }, [])
  return (
    <StackNavigator.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName={"Home"}>
      <StackNavigator.Screen name={"Home"} component={HomeScreen} />
      <StackNavigator.Screen name={"Destination Search"} component={DestinationSearch} />
      <StackNavigator.Screen name={"Search Results"} component={SearchResults} />
      <StackNavigator.Screen name={"Order"} component={OrderScreen} />
      <StackNavigator.Screen name={"FarePayment"} component={FarePayment} />
      <StackNavigator.Screen name={"OrderCancel"} component={OrderCancel} />
    </StackNavigator.Navigator>
  );
}