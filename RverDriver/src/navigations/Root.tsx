import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { API, Auth, graphqlOperation } from "aws-amplify";
import * as React from 'react';
import { useState } from "react";
import { Alert, Dimensions, Image } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { getUser, listOrders } from "../graphql/queries";
import PreviousOrders from '../screens/PreviousOrders';
import Settings from '../screens/Settings';
import { IUser, LocPoint } from "../types";
import CustomDrawer from "./CustomDrawer";
import HomeNavigator from "./Home";

const Drawer = createDrawerNavigator();

interface IContext {
  currentUser: IUser
  setCurrentUser: React.Dispatch<React.SetStateAction<IUser | null>>
  currentLocation: LocPoint
  setCurrentLocation: React.Dispatch<React.SetStateAction<LocPoint | null>>
}

export const RootContext = React.createContext<IContext>({} as any);

export default function RootNavigator() {
  // State to store driver db information locally
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  // State to store driver location information locally
  const [currentLocation, setCurrentLocation] = useState<LocPoint | null>(null);
  React.useEffect(() => {
    // Fetch the current authenticated driver from the db along with all of the orders associated with the driver
    async function fetchUser() {
      const currentAuthUser = await Auth.currentAuthenticatedUser();
      const userResponse = await API.graphql(graphqlOperation(getUser, { id: currentAuthUser.attributes.sub })) as any;
      const orderResponse = await API.graphql(graphqlOperation(listOrders, { filter: { vehicleId: { eq: currentAuthUser.attributes.sub } } })) as any;
      setCurrentUser({
        ...userResponse.data.getUser,
        orders: orderResponse.data.listOrders.items,
      })
    }
    fetchUser();
    // Get the current position of the user and store it in the state
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(currentLocation);
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      },
      (error) => {
        Alert.alert(`Code ${error.code}`, error.message);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 25000,
        maximumAge: 10000,
        distanceFilter: 0,
      },
    );
  }, []);

  return (
    currentLocation && currentUser ? <RootContext.Provider value={{ setCurrentLocation, currentLocation, currentUser, setCurrentUser }}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen name="বাড়ি" component={HomeNavigator} />
          <Drawer.Screen name="সেটিংস">
            {() => <Settings />}
          </Drawer.Screen>
          <Drawer.Screen name="অতীত ভ্রমণ">
            {() => <PreviousOrders />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </RootContext.Provider> : <Image source={require("../assets/images/logo.png")} style={{
      width: 100, height: 100, resizeMode: 'contain', position: 'absolute', left: Dimensions.get('window').width / 2 - 50, top: Dimensions.get('window').height / 2 - 50
    }} />
  );
}