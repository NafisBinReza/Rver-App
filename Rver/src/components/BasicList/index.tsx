import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import styles from './styles';

interface Props {
  items: string[][],
  style?: StyleProp<ViewStyle>
}

export default function BasicList(props: Props) {
  return (
    <View style={[styles.rowContainer, props.style ?? {}]}>
      {props.items.map(item =>
        <View key={item[0]} style={styles.rowItem}>
          <Text style={styles.rowItemText}>
            {item[0]}
          </Text>
          <Text style={styles.rowItemText}>
            {item[1]}
          </Text>
        </View>
      )}
    </View>
  )
}
