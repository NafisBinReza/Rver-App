import React, { useContext, useMemo, useState } from 'react';
import { Image, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { IOrder, IVehicle } from '../../../types';
import { RootContext } from '../../navigations/Root';
import { getVehicleImage } from '../../utils';
import { didLocationChangeSignificantly } from '../../utils/didLocationChangeSignificantly';

interface Props {
  vehicle: IVehicle | null
  order: IOrder | null
}

const OrderMap = (props: Props) => {
  const { vehicle, order } = props;
  const [time, setTime] = useState({ minutes: 0, seconds: 0 })
  const { setCurrentLocation, currentLocation } = useContext(RootContext);
  const memoizedMapsViewDirection = useMemo(() => {
    return order && vehicle && order.status !== 'idle' ? <MapViewDirections
      origin={{
        // If the order status is picking up, the origin will the vehicle's location, else its gonna be the order's origin 
        latitude: order.status === 'picking_up' ? vehicle.latitude : currentLocation.latitude,
        longitude: order.status === 'picking_up' ? vehicle.longitude : currentLocation.longitude,
      }}
      destination={{
        // If the order status is picking up, the destination will the orders origin, else its gonna be the order's destination 
        latitude: order.status === 'picking_up' ? order.originLatitude : order.destinationLatitude,
        longitude: order.status === 'picking_up' ? order.originLongitude : order.destinationLongitude,
      }}
      apikey={'GOOGLE_MAPS_SDK_API_KEY'}
      strokeWidth={3}
      strokeColor={'black'}
    /> : null
  }, [time.minutes, order]);

  return (
    <View>
      <MapView
        style={{
          height: '100%',
          width: '100%',
        }}
        showsUserLocation
        initialRegion={{
          ...currentLocation,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onUserLocationChange={async e => {
          const { coordinate } = e.nativeEvent;
          if (order && order.status === 'dropping_off' && didLocationChangeSignificantly(coordinate, currentLocation)) {
            setCurrentLocation({
              latitude: coordinate.latitude,
              longitude: coordinate.longitude,
            });
          }
          setTime({
            seconds: time.seconds + 1,
            minutes: parseInt((time.seconds / 60).toString(), 10)
          })

        }}
        // @ts-ignore
        userLocationUpdateInterval={1000}
      >
        {/* If the order has an associated vehicle, show it */}
        {vehicle && <Marker key={vehicle.id}
          coordinate={{ latitude: vehicle.latitude, longitude: vehicle.longitude }}
        >
          <Image source={(getVehicleImage(vehicle.type, true))} style={{
            width: 40, height: 40, resizeMode: 'contain', transform: [{
              rotate: `${vehicle.heading}deg`
            }]
          }} />
        </Marker>}
        {/* If the vehicle exists and order has not been completed, show the direction between the origin and destination */}
        {order?.status !== 'completed' && memoizedMapsViewDirection}
      </MapView>
    </View>
  );
};

export default OrderMap;
