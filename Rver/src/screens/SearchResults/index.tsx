import { useNavigation, useRoute } from '@react-navigation/native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import uuid from "react-native-uuid";
import { IDistanceInfo, IFareDetails, IOrder, IVehicle, IVehicleType, IWeatherInfo, RouteParams } from '../../../types';
import styles from '../../components/PlaceRow/styles';
import RoutesMap from '../../components/RoutesMap';
import VehicleTypes from '../../components/VehicleTypes';
import { createFare, createOrder } from '../../graphql/mutations';
import { listOrders, listVehicles } from '../../graphql/queries';
import { RootContext } from '../../navigations/Root';
import { isWithinRadius } from '../../utils';
import { calculateFinalFare } from '../../utils/calculateFinalFare';
import { getReverseGeocodedAddress } from '../../utils/getReverseGeocodedAddress';
import { createLog } from './mutations';

const SearchResults = () => {
  const { currentUser } = useContext(RootContext);
  // A state to store the selected vehicle details
  const selectedVehicle = useState<IVehicleType | null>(null);
  // A state to store the distance and duration details
  const [distanceInfo, setDistanceInfo] = useState<IDistanceInfo | null>(null);
  // A state to store the weather details
  const [weatherInfo, setWeatherInfo] = useState<IWeatherInfo | null>(null);
  // A state to store the fare details
  const [fareDetails, setFareDetails] = useState<IFareDetails | null>(null);
  // A state to hold the vehicle ids within 200m and 500m radius during order creation
  const [vehicleIds, setVehicleIds] = useState<{
    200: string[],
    500: string[]
  }>({ 200: [], 500: [] });

  const route = useRoute();
  const navigation = useNavigation();

  const params = route.params as RouteParams;

  const originLocation = {
    latitude: params.originPlace.details.geometry.location.lat,
    longitude: params.originPlace.details.geometry.location.lng,
  }, destinationLocation = {
    latitude: params.destinationPlace.details.geometry.location.lat,
    longitude: params.destinationPlace.details.geometry.location.lng,
  };

  useEffect(() => {
    // Fetch the distance and duration between the origin and destination coordinate
    fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${originLocation.latitude},${originLocation.longitude}&destinations=${destinationLocation.latitude},${destinationLocation.longitude}&key=GOOGLE_DISTANCEMATRIX_API_KEY`)
      .then((data) => data.json())
      .then((distance_info: any) => {
        // Fetch the current weather and temperature related information
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${originLocation.latitude}&lon=${originLocation.longitude}&appid=6cd353d4b2d52958eb730f5ce30a2a93`)
          .then(response => response.json())
          .then(async (weather_data: any) => {
            // get the active vehicles and idle orders from the db 
            const list_vehicles_response = await API.graphql(graphqlOperation(listVehicles, {
              filter: {
                isActive: {
                  eq: true
                }
              }
            })) as any,
              list_orders_response = await API.graphql(graphqlOperation(listOrders, {
                filter: {
                  status: { eq: 'idle', type: selectedVehicle[0]?.type }
                }
              })) as any,
              vehicles = list_vehicles_response.data.listVehicles.items as IVehicle[],
              orders = list_orders_response.data.listOrders.items as IOrder[];

            // Store the temperature, weather, distance and duration from the nested response data
            const temperature = weather_data.main.temp as number,
              weather = weather_data.weather[0].main as string,
              distance = distance_info.rows[0].elements[0].distance.value as number,
              duration = distance_info.rows[0].elements[0].duration.value / 0.5 as number;

            // Filter the vehicles that are within 200m, 500m radius and orders that have originated within 200m radius
            const vehicle_ids_within_200m_radius = vehicles.filter(vehicle => isWithinRadius(vehicle, originLocation, .2)).map(vehicle => vehicle.id),
              vehicle_ids_within_500m_radius = vehicles.filter(vehicle => !vehicle_ids_within_200m_radius.includes(vehicle.id) && isWithinRadius(vehicle, originLocation, .5)).map(vehicle => vehicle.id),
              order_ids_within_500m_radius = orders.filter(order => isWithinRadius({ latitude: order.originLatitude, longitude: order.originLongitude }, originLocation, 0.5)).map(order => order.id),
              s_500 = vehicle_ids_within_500m_radius.length, s_200 = vehicle_ids_within_200m_radius.length, d_500 = order_ids_within_500m_radius.length + 1,
              supply_amount = (s_500 * 1.25) + (s_200 * 0.75),
              m_s = d_500 / (supply_amount === 0 ? 1 : supply_amount),
              f_d = (distance / 1000) * 5,
              m_w = weather === "rainy" ? 1.20 : (temperature < 18 || temperature > 32) ? 1.10 : 1,
              f_t = duration / 60,
              base = 5;

            // Set the approximate fare in the state
            setFareDetails({
              m_s,
              f_d,
              m_w,
              f_t,
              base
            });

            // Set the distance info in the state
            setDistanceInfo({
              distance,
              duration,
            });

            // Set the weather info in the state
            setWeatherInfo({
              temperature,
              weather
            });

            // Set the vehicleIds within 200m and 500m radius in the state
            setVehicleIds({ 200: vehicle_ids_within_200m_radius, 500: vehicle_ids_within_500m_radius })
          })
          .catch(err => {
            console.error(err);
          });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = async () => {
    if (!selectedVehicle[0])
      console.warn("Select a vehicle to confirm ride");
    else {
      try {
        // Get the address of the origin and destination coordinate 
        const originAddress = await getReverseGeocodedAddress(originLocation.latitude, originLocation.longitude),
          destinationAddress = await getReverseGeocodedAddress(destinationLocation.latitude, destinationLocation.longitude);

        const userInfo = await Auth.currentAuthenticatedUser();
        if (distanceInfo && fareDetails) {
          // Create an order with the gathered information
          const order_id = uuid.v4(), fare_id = uuid.v4();
          const response = await API.graphql(graphqlOperation(createOrder, {
            input: {
              id: order_id,
              fareId: fare_id,
              vehicleType: selectedVehicle[0].type,
              originLatitude: originLocation.latitude,
              originLongitude: originLocation.longitude,
              destinationLatitude: destinationLocation.latitude,
              destinationLongitude: destinationLocation.longitude,
              originAddress,
              destinationAddress,
              userId: userInfo.attributes.sub,
              vehicleId: "1",
              createdAt: (new Date()).toISOString(),
              status: 'idle'
            }
          })) as any;

          // Create a fare that is related to the order
          await API.graphql(graphqlOperation(createFare, {
            input: {
              id: fare_id,
              orderId: order_id,
              ...fareDetails
            }
          }));

          // Create a log that stores the vehicles within 200m and 500m of the order origin coordinate
          await API.graphql(graphqlOperation(createLog, {
            input: {
              userId: currentUser.id,
              vehicle200mIds: vehicleIds[200],
              vehicle500mIds: vehicleIds[500],
              orderId: order_id
            }
          }))

          // navigate to the order screen
          navigation.navigate("Order", {
            order: response.data.createOrder
          })
        }
      } catch (err) {
        console.log("Error", err);
      }
    }
  };

  return (
    <View style={{ display: 'flex' }}>
      <View style={{ height: Dimensions.get('window').height - 350 }}>
        <RoutesMap origin={originLocation} destination={destinationLocation} />
      </View>
      <View style={styles.estimateFareContainer}><Text style={styles.estimateFareText}>Estimate Fare: Tk. {fareDetails && calculateFinalFare(fareDetails)}</Text></View>
      <View style={{ flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-evenly', padding: 5 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ padding: 5, fontWeight: 'bold', fontSize: 16 }}>{distanceInfo && (distanceInfo.duration / 60).toFixed(2)} mins</Text>
          <Text style={{ padding: 5, fontWeight: 'bold', fontSize: 16 }}>{distanceInfo && (distanceInfo.distance / 1000).toFixed(2)} km</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ padding: 5, fontWeight: 'bold', fontSize: 16 }}>{weatherInfo && weatherInfo.temperature}° C</Text>
          <Text style={{ padding: 5, fontWeight: 'bold', fontSize: 16 }}>{weatherInfo && weatherInfo.weather}</Text>
        </View>
      </View>
      {weatherInfo && distanceInfo && fareDetails !== null && <View style={{ height: 300 }}>
        <VehicleTypes onSubmit={onSubmit} selectedVehicle={selectedVehicle} />
      </View>}
    </View>
  );
};

export default SearchResults;
