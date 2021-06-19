import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { LocPoint } from '../../../types';

interface Props {
  origin: LocPoint,
  destination: LocPoint,
};

const RoutesMap = (props: Props) => {
  return (
    <MapView
      style={{
        height: '100%',
        width: '100%'
      }}
      showsUserLocation
      initialRegion={{
        latitude: props.origin.latitude,
        longitude: props.origin.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <MapViewDirections
        origin={props.origin}
        destination={props.destination}
        apikey={'GOOGLE_MAPS_SDK_API_KEY'}
        strokeWidth={3}
        strokeColor={'black'}
      />
      <Marker coordinate={props.origin} title={"Origin"} style={{
        backgroundColor: 'black'
      }} />
      <Marker coordinate={props.destination} title={"Destination"} />
    </MapView>
  );
};

export default RoutesMap;
