import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { IVehicleType } from '../../../types';
import { getVehicleImage } from '../../utils';
import styles from './styles';

interface Props {
  vehicleType: IVehicleType
  onClick: any
  isSelected: boolean
}

const VehicleInfo = (props: Props) => {
  return (
    <Pressable onPress={props.onClick} style={[styles.container, { backgroundColor: props.isSelected ? '#ccc' : 'white' }]}>
      {<Image source={getVehicleImage(props.vehicleType.type, false)} style={styles.image} />}
      <View style={styles.infoContainer}>
        <Text style={styles.infoContainerVehicleName}>{props.vehicleType.type}</Text>
      </View>
    </Pressable>
  );
};

export default VehicleInfo;
