import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { IVehicleType } from '../../../types';
import vehicleTypes from "../../data/vehicleTypes";
import VehicleInfo from '../VehicleInfo';
import styles from './styles';
interface Props {
  selectedVehicle: [IVehicleType | null, React.Dispatch<React.SetStateAction<IVehicleType | null>>]
  onSubmit: any
}

const VehicleTypes = (props: Props) => {
  const [selectedVehicle, setSelectedVehicle] = props.selectedVehicle;

  return (
    <View style={styles.container}>
      <View style={styles.vehicleInfoContainer}>
        {vehicleTypes.map(vehicleType =>
          vehicleType && <VehicleInfo key={vehicleType.type} onClick={() => setSelectedVehicle(vehicleType)} isSelected={vehicleType.id === selectedVehicle?.id} vehicleType={vehicleType} />
        )}
      </View>
      <Pressable onPress={props.onSubmit} style={styles.buttonContainer}>
        <Text style={styles.buttonContainerText}>Confirm Ride</Text>
      </Pressable>
    </View>
  );
};

export default VehicleTypes;
