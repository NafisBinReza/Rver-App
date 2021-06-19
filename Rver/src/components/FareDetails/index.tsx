import React from 'react';
import { Text, View } from 'react-native';
import { IFareDetails } from '../../../types';
import { calculateFinalFare } from '../../utils/calculateFinalFare';
import BasicList from '../BasicList';
import styles from './styles';

interface Props {
  fare: IFareDetails
}

export default function FareDetails(props: Props) {
  const { fare } = props;
  return (<View style={{ width: '100%' }}>
    <BasicList items={[
      ['Weather multiplier', `Tk. ${fare.m_w.toFixed(2)}`],
      ['Base Fare', `Tk. ${fare.base.toFixed(2)}`],
      ['Fare per mileage', `Tk. ${fare.f_d.toFixed(2)}`],
      ['Time surge', `Tk. ${fare.f_t.toFixed(2)}`],
      ['Demand/Supply', `Tk. ${fare.m_s.toFixed(2)}`]
    ]} />
    <View style={styles.rowItem}>
      <Text style={[styles.rowItemText, { fontSize: 20 }]}>
        Total Fare
      </Text>
      <Text style={[styles.rowItemText, { color: '#2ce74b', fontSize: 20 }]}>
        Tk. {calculateFinalFare(fare)}
      </Text>
    </View>
  </View>
  )
}
