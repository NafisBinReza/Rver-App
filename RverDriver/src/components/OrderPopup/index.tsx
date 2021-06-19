import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { IOrder } from '../../types';
import { calculateFinalFare } from '../../utils/calculateFinalFare';
import { convertToBengali } from '../../utils/convertToBengali';
import BasicList from '../BasicList';
import styles from "./styles";

interface Props {
  orders: IOrder[],
  distanceInfo: {
    duration: number
    distance: number
  },
  onAccept: () => void
  onDecline: () => void
};

export default function OrderPopup(props: Props) {
  // Local state to store the distance and duration information obtained from google's api using origin and destination coordinates
  const [destinationInfo, setDestinationInfo] = useState<{
    duration: number
    distance: number
  } | null>(null);

  useEffect(() => {
    // set the distance and duration info using the origin and destination coordinate of the first of the current orders
    if (props.orders.length !== 0)
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${props.orders[0].originLatitude},${props.orders[0].originLongitude}&destinations=${props.orders[0].destinationLatitude},${props.orders[0].destinationLongitude}&key=GOOGLE_DISTANCEMATRIX_API_KEY`)
        .then((data) => data.json())
        .then((distance_info: any) => {
          const distance = distance_info.rows[0]?.elements[0]?.distance?.value as number;
          const duration = distance_info.rows[0]?.elements[0]?.duration?.value / 0.5 as number;
          setDestinationInfo({
            distance,
            duration
          })
        })
  }, [props.orders]);

  return (
    destinationInfo ? <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
        <View style={styles.orderAmountContainer}><Text style={styles.orderAmountText}>১/{convertToBengali(props.orders.length)}</Text></View>
        <Pressable style={styles.declineButton} onPress={props.onDecline}>
          <Text style={styles.declineText}>বাতিল</Text>
        </Pressable>
      </View>
      <Pressable style={styles.popupContainer} onPress={props.onAccept}>
        <BasicList style={{
          rowItem: {
            backgroundColor: 'black'
          },
          rowItemText: {
            color: 'white'
          }
        }} items={[
          ['আনুমানিক ভাড়া', `৳ ${convertToBengali(calculateFinalFare(props.orders[0].fare))}`],
          ['উত্স', props.orders[0].originAddress.split(",")[0]],
          ['গন্তব্য', props.orders[0].destinationAddress.split(",")[0]],
          ['দূরত্ব (ব্যবহারকারী)', `${convertToBengali(props.distanceInfo.duration.toFixed(2))} কি.মি.`],
          ['সময় (ব্যবহারকারী)', `${convertToBengali(props.distanceInfo.distance.toFixed(2))} মিনিট`],
          ['দূরত্ব (গন্তব্য)', `${convertToBengali((destinationInfo.distance / 1000).toFixed(2))} কি.মি.`],
          ['সময় (গন্তব্য)', `${convertToBengali((destinationInfo.duration / 60).toFixed(2))} মিনিট`],]} />
      </Pressable>
    </View> : null
  )
}
