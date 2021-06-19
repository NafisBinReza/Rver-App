import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text } from 'react-native';

export default function OrderCancel() {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Home")} style={{ height: '100%', width: '100%', justifyContent: 'center', padding: 20 }}>
      <Text style={{ borderRadius: 5, backgroundColor: '#f53333', color: 'white', padding: 5, textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>আপনার অর্ডার বাতিল করা হয়েছে :/ </Text>
    </Pressable>
  )
}
