import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Pressable, SafeAreaView, useWindowDimensions, View } from 'react-native';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete
} from 'react-native-google-places-autocomplete';
import Entypo from 'react-native-vector-icons/Entypo';
import PlaceRow from '../../components/PlaceRow';
import { RootContext } from '../../navigations/Root';
import styles from './styles';

export type IPlaceState = {
  data: GooglePlaceData;
  details: GooglePlaceDetail | null;
} | null;

const DestinationSearch = () => {
  // Store the origin place in the state
  const [originPlace, setOriginPlace] = useState<IPlaceState>(null);
  // Store the destination place in the state
  const [destinationPlace, setDestinationPlace] = useState<IPlaceState>(null);
  const navigation = useNavigation();
  const ref_1: any = useRef(), ref_2: any = useRef();
  const { currentLocation, currentUser } = useContext(RootContext);

  useEffect(() => {
    // Navigate to Search Results Screen right when both the origin and destination places have been selected
    if (originPlace && destinationPlace) {
      navigation.navigate('Search Results', {
        originPlace,
        destinationPlace
      });
    }
  }, [originPlace, navigation, destinationPlace]);
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Render the first google places autocomplete component*/}
        <GooglePlacesAutocomplete
          ref={ref_1}
          debounce={500}
          minLength={3}
          fetchDetails
          placeholder={'Current Location'}
          onPress={(data, details = null) => {
            setOriginPlace({ data, details });
          }}
          textInputProps={{
            placeholderTextColor: '#666'
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              position: 'absolute',
              top: 10,
              left: 10,
              right: 40,
            },
            listView: {
              position: 'absolute',
              top: 90
            },
            separator: {
              backgroundColor: '#eee',
              height: 1
            }
          }}
          query={{
            key: 'GOOGLE_PLACES_API_KEY',
            language: 'en',
            components: 'country:bd'
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          predefinedPlaces={[{
            description: "Current Location",
            geometry: { location: { lat: currentLocation.latitude, lng: currentLocation.longitude } },
          }, ...currentUser.bookmarks.map(param => ({
            description: param.name,
            geometry: { location: { lat: param.latitude, lng: param.longitude } },
          }))]}
          renderDescription={data => data.description || (data as any).vicinity}
          isRowScrollable
        />
        {/*Clear input button for the first autocomplete component*/}
        <Pressable onPress={() => {
          ref_1.current.clear()
          setOriginPlace(null)
        }} style={{
          position: 'absolute',
          left: width - 35,
          top: 22.5
        }}>
          <Entypo name="squared-cross" size={20} />
        </Pressable>
        {/* Render the second google places autocomplete component*/}
        <GooglePlacesAutocomplete
          ref={ref_2}
          textInputProps={{
            placeholderTextColor: '#666'
          }}
          minLength={3}
          debounce={500}
          fetchDetails
          suppressDefaultStyles
          placeholder={'Where to?'}
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
          }}
          enablePoweredByContainer={false}
          styles={{
            textInput: styles.textInput,
            container: {
              position: 'absolute',
              top: 55,
              left: 10,
              right: 40,
            },
            separator: {
              backgroundColor: '#eee',
              height: 1
            }
          }}
          query={{
            key: 'GOOGLE_PLACES_API_KEY',
            language: 'en',
            components: 'country:bd'
          }}
          predefinedPlaces={currentUser.bookmarks.map(param => ({
            description: param.name,
            geometry: { location: { lat: param.latitude, lng: param.longitude } },
          }))}
          renderRow={(data) => <PlaceRow data={data} />}
          isRowScrollable
        />
        {/*Clear input button for the second autocomplete component*/}
        <Pressable onPress={() => {
          ref_2?.current.clear();
          setDestinationPlace(null)
        }} style={{
          position: 'absolute',
          left: width - 35,
          top: 67.5
        }}>
          <Entypo name="squared-cross" size={20} />
        </Pressable>
      </View>
      <View style={styles.line} />
      <View style={styles.circle} />
      <View style={styles.square} />
    </SafeAreaView>
  );
};

export default DestinationSearch;
