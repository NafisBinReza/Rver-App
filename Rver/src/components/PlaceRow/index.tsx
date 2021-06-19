import React from 'react';
import { Text, View } from 'react-native';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

interface Props {
  data: GooglePlaceData
}

export default function PlaceRow(props: Props) {
  return <View style={styles.rowContainer}>
    <View style={styles.iconContainer}>
      {props.data.description === 'Home' ? <Entypo name='home' size={16} color={'white'} /> : props.data.description === 'Work' ? <Entypo name='suitcase' size={12} color={'white'} /> : <Entypo name='location-pin' size={16} color={'white'} />}
    </View>
    <Text style={styles.rowText}>{props.data.description || (props.data as any).vicinity}</Text>
  </View>
}