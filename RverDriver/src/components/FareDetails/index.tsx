import React from 'react';
import { Text, View } from 'react-native';
import { IFareDetails } from '../../types';
import { calculateFinalFare } from '../../utils/calculateFinalFare';
import { convertToBengali } from '../../utils/convertToBengali';
import BasicList from '../BasicList';
import styles from './styles';

interface Props {
  fare: IFareDetails
}

export default function FareDetails(props: Props) {
  const { fare } = props;
  return (<View style={{ width: '100%' }}>
    <BasicList items={[
      ['প্রাথমিক ভাড়া', `৳ ${convertToBengali(fare.base.toFixed(2))}`],
      ['আবহাওয়া', `৳ ${convertToBengali(fare.m_w.toFixed(2))}`],
      ['পথ', `৳ ${convertToBengali(fare.f_d.toFixed(2))}`],
      ['সময়', `৳ ${convertToBengali(fare.f_t.toFixed(2))}`],
      ['চাহিদা', `৳ ${convertToBengali(fare.m_s.toFixed(2))}`]
    ]} />
    <View style={styles.rowItem}>
      <Text style={[styles.rowItemText, { fontSize: 20 }]}>
        মোট ভাড়া
      </Text>
      <Text style={[styles.rowItemText, { color: '#2ce74b', fontSize: 20 }]}>
        ৳ {convertToBengali(calculateFinalFare(fare))}
      </Text>
    </View>
  </View>
  )
}
