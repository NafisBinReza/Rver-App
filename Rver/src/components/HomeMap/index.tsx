import { useNavigation } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useContext, useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { IVehicle, LocPoint } from '../../../types';
import { listVehicles } from '../../graphql/queries';
import { RootContext } from '../../navigations/Root';
import { getVehicleImage } from '../../utils';
import SaveDestinationPopup from '../SaveDestinationPopup';
import styles from './styles';

const HomeMap = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [popupInfo, setPopupInfo] = useState<LocPoint | null>(null);
  const { currentLocation } = useContext(RootContext);
  const { currentUser, createNewDestination } = useContext(RootContext)
  const navigation = useNavigation();

  // fetches all the vehicles and store them in state
  const fetchVehicles = async () => {
    try {
      const response = await API.graphql(graphqlOperation(listVehicles)) as any;
      setVehicles(response.data.listVehicles.items)
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <View>
      <MapView
        style={{
          height: '100%',
          width: '100%',
        }}
        // On long press open up the popup menu to save a location from the map
        onLongPress={(e) => {
          setPopupInfo({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude
          });
        }}
        // @ts-ignore
        userLocationUpdateInterval={60000}
        showsUserLocation
        initialRegion={{
          ...currentLocation,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {popupInfo && <Marker coordinate={popupInfo} />}
        {/* Show markers for all the locations saved by the user */}
        {currentUser.bookmarks.map(savedDestination =>
          <Marker key={savedDestination.id} coordinate={{ latitude: savedDestination.latitude, longitude: savedDestination.longitude }}>
            <Image style={{ left: 10 }} source={require("../../assets/images/marker.png")} />
            <Text style={{ fontSize: 12, fontWeight: 'bold', backgroundColor: 'black', color: 'white', paddingHorizontal: 5, borderRadius: 3 }}>{savedDestination.name}</Text>
          </Marker>
        )}
        {/* Show the vehicles fetched from the db in the map */}
        {vehicles.map(vehicle => <Marker key={vehicle.id}
          coordinate={{ latitude: vehicle.latitude, longitude: vehicle.longitude }}
        >
          <Image source={(getVehicleImage(vehicle.type, true))} style={{
            width: 25, height: 25, resizeMode: 'contain', transform: [{
              rotate: `${vehicle.heading}deg`
            }]
          }} />
        </Marker>)}
      </MapView>
      {/* A button to fetch updated vehicles data */}
      <Pressable onPress={fetchVehicles} style={{ position: 'absolute', top: 0, elevation: 10, padding: 5, margin: 5, borderRadius: 5, backgroundColor: 'black' }}><FontAwesome name="refresh" color={"white"} size={20} /></Pressable>
      <Pressable onPress={() => (navigation as any).openDrawer()} style={[styles.roundButton, { top: 40, left: 0 }]}>
        <Entypo name="list" size={20} />
      </Pressable>
      {popupInfo && <SaveDestinationPopup onAccept={async (text) => {
        await createNewDestination({ ...popupInfo, name: text })
        setPopupInfo(null)
      }} onReject={() => setPopupInfo(null)} />}
    </View>
  );
};

export default HomeMap;
