import React from 'react';
import { Dimensions, View } from 'react-native';
import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = () => {
  return (
    <View style={{ display: 'flex', justifyContent: 'space-between' }}>
      <View style={{ height: Dimensions.get('window').height - 250 }}>
        <HomeMap />
      </View>
      <View style={{ height: 250 }}>
        <HomeSearch />
      </View>
    </View>
  );
};

export default HomeScreen;
