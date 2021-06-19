import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { API, Auth, graphqlOperation } from "aws-amplify";
import * as React from 'react';
import { useEffect, useState } from "react";
import { Alert, Dimensions, Image, Pressable, Text } from "react-native";
import Geolocation from 'react-native-geolocation-service';
import { ISavedDestinationInput, IUser, LocPoint } from "../../types";
import { createDestination, deleteDestination } from "../graphql/mutations";
import PreviousOrders from "../screens/PreviousOrders";
import { getReverseGeocodedAddress } from "../utils/getReverseGeocodedAddress";
import CustomDrawer from "./CustomDrawer";
import HomeNavigator from "./Home";
import { getUser } from "./queries";

const DrawerNavigator = createDrawerNavigator();

interface Props {
  name: string
}

const DummyScreen = (props: Props) => {
  return <Pressable style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{props.name}</Text>
  </Pressable>
};

export interface IContext {
  setCurrentUser: React.Dispatch<React.SetStateAction<IUser | null>>
  currentUser: IUser
  currentLocation: LocPoint
  setCurrentLocation: React.Dispatch<React.SetStateAction<LocPoint | null>>
  createNewDestination: ({ name, latitude, longitude }: ISavedDestinationInput) => Promise<void>
  deleteSavedDestination: (id: string) => Promise<void>
};

export const RootContext = React.createContext({} as IContext)

export default function RootNavigator() {
  // Store the current user in state
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  // Store the current user location in state
  const [currentLocation, setCurrentLocation] = useState<LocPoint | null>(null);

  // Create new destination when long pressing on the home map
  async function createNewDestination({ name, latitude, longitude }: ISavedDestinationInput) {
    if (currentUser) {
      // getting the google address of the selected location
      const address = await getReverseGeocodedAddress(latitude, longitude);
      const auth_user = await Auth.currentAuthenticatedUser();
      // Creating the destination
      const response = (await API.graphql(
        graphqlOperation(createDestination, {
          input: {
            latitude,
            longitude,
            name,
            userId: auth_user.attributes.sub,
            address
          }
        })
      )) as any;
      // Setting the current user bookmarks using the newly created destination 
      setCurrentUser({ ...currentUser, bookmarks: [...currentUser.bookmarks, response.data.createDestination] });
    }
  }

  // Delete a specific saved destination and mutate the state accordingly
  async function deleteSavedDestination(id: string) {
    if (currentUser) {
      // Deleting the destination from the db
      await API.graphql(
        graphqlOperation(deleteDestination, {
          input: {
            id
          }
        })
      );
      // Setting the bookmark of the current user by removing the deleted one
      setCurrentUser({ ...currentUser, bookmarks: currentUser.bookmarks.filter((savedDestination) => savedDestination.id !== id) });
    }
  }

  // Runs the code every time the component loads for the first time
  useEffect(() => {
    // fetch the current authenticated user from the database
    async function fetchUser() {
      const currentAuthUser = await Auth.currentAuthenticatedUser();
      const userResponse = await API.graphql(graphqlOperation(getUser, { id: currentAuthUser.attributes.sub })) as any;
      // store the fetched user data in the state
      setCurrentUser({
        ...userResponse.data.getUser,
        // Store the orders and bookmarks data from the nested response
        orders: userResponse.data.getUser.orders.items,
        bookmarks: userResponse.data.getUser.bookmarks.items,
      })

    }
    fetchUser();

    // Get the current position of the user and store it in the state
    Geolocation.getCurrentPosition(
      (position) => {
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
    // IF we have the currentUser data and current user location only then render the rest of the components otherwise show the Rver logo and text
    currentLocation && currentUser ? <RootContext.Provider value={{ setCurrentLocation, createNewDestination, deleteSavedDestination, currentUser, setCurrentUser, currentLocation }}>
      <NavigationContainer>
        <DrawerNavigator.Navigator drawerContent={props => <CustomDrawer {...props} />}>
          <DrawerNavigator.Screen name="Home" component={HomeNavigator} />
          <DrawerNavigator.Screen name="Your Trips">
            {() => <PreviousOrders />}
          </DrawerNavigator.Screen>
          <DrawerNavigator.Screen name="Settings">
            {() => <DummyScreen name={'Settings'} />}
          </DrawerNavigator.Screen>
        </DrawerNavigator.Navigator>
      </NavigationContainer>
    </RootContext.Provider> : <Image source={require("../assets/images/logo.png")} style={{
      width: 100, height: 100, resizeMode: 'contain', position: 'absolute', left: Dimensions.get('window').width / 2 - 50, top: Dimensions.get('window').height / 2 - 50
    }} />
  );
}