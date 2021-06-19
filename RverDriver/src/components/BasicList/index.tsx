import React from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import styles from './styles';

interface Props {
  items: string[][],
  style?: Partial<{
    container: StyleProp<ViewStyle>,
    rowItem: StyleProp<ViewStyle>,
    rowItemText: StyleProp<TextStyle>
  }>
}

export default function BasicList(props: Props) {
  return (
    <View style={[styles.rowContainer, props.style?.container ?? {}]}>
      {props.items.map(item =>
        <View key={item[0]} style={[styles.rowItem, props.style?.rowItem ?? {}]}>
          <Text style={[styles.rowItemText, props.style?.rowItemText]}>
            {item[0]}
          </Text>
          <Text style={[styles.rowItemText, props.style?.rowItemText]}>
            {item[1]}
          </Text>
        </View>
      )
      }
    </View >
  )
}
