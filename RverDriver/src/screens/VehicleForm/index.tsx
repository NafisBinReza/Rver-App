import { useNavigation } from '@react-navigation/native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import React, { useContext, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { createVehicle, updateVehicle } from '../../graphql/mutations';
import { RootContext } from '../../navigations/Root';
import styles from './styles';

// Component rendered when the driver has no registered vehicle 
export default function VehicleForm() {
  const { currentUser, setCurrentUser, currentLocation } = useContext(RootContext);
  const vehicleDetails = currentUser?.vehicle;
  // State to store the licensePlate and type of the vehicle information
  const [vehicleData, setVehicleData] = useState({ licensePlate: vehicleDetails?.licensePlate ?? '', type: vehicleDetails?.type ?? '' });
  const navigation = useNavigation();
  const for_update = Boolean(vehicleDetails);

  // Store the vehicle in the database with the required information obtained from local state and current location
  async function storeVehicle() {
    try {
      if (currentUser) {
        const currentAuthUser = await Auth.currentAuthenticatedUser();
        const input: any = {
          id: currentAuthUser.attributes.sub,
          licensePlate: vehicleData.licensePlate,
          type: vehicleData.type
        };
        if (!for_update) {
          input.latitude = currentLocation.latitude;
          input.longitude = currentLocation.longitude;
          input.heading = 90;
          input.isActive = false;
          input.userId = currentAuthUser.attributes.sub
        }
        const response = await API.graphql(graphqlOperation(for_update ? updateVehicle : createVehicle, {
          input
        })) as any;
        // Update the local state of the current user by attaching the vehicle created to it
        setCurrentUser({ ...currentUser, vehicle: response.data[for_update ? 'updateVehicle' : 'createVehicle'] });
        !for_update && navigation.navigate("Home");
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <View style={[styles.formContainer, { justifyContent: for_update ? 'flex-start' : 'center', alignItems: 'center', margin: for_update ? 0 : 10, }]}>
      <Text style={styles.formHeadingText}>{vehicleDetails ? 'আপনার যানবাহন আপডেট করুন' : 'আপনার যানবাহন নিবন্ধন করুন'}</Text>
      <TextInput style={styles.formInput} placeholder={'লাইসেন্স সংখ্যা'} value={vehicleData.licensePlate} onChangeText={licensePlate => setVehicleData((data) => ({ ...data, licensePlate }))} />
      <TextInput style={styles.formInput} placeholder={'গাড়ির ধরন'} value={vehicleData.type} onChangeText={type => setVehicleData((data) => ({ ...data, type }))} />
      <Pressable style={styles.registerButton} onPress={storeVehicle}><Text style={styles.registerButtonText}>সংরক্ষণ</Text></Pressable>
    </View>
  )
}
