import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import BasicList from '../../components/BasicList';
import { RootContext } from '../../navigations/Root';
import VehicleForm from '../VehicleForm';
import styles from './styles';

export default function Settings() {
  const { currentUser } = useContext(RootContext);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionText}>ব্যবহারকারীর তথ্য</Text>
      <BasicList items={[
        ['ইমেল', currentUser.email],
        ['নাম', currentUser.firstName + " " + currentUser.lastName],
        ['টেলিফোন', currentUser.telephone],
        ['ব্যবহারকারীর নাম', currentUser.username],
      ]} />
      <VehicleForm />
    </View>
  )
}
