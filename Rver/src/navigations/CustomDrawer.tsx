

import { DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Auth } from 'aws-amplify';
import * as React from 'react';
import { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import { RootContext } from './Root';

interface Props extends DrawerContentComponentProps<DrawerContentOptions> { }

export default function CustomDrawer(props: Props) {
  const { currentUser } = useContext(RootContext);

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flexDirection: 'row', margin: 0, backgroundColor: 'black', height: 75, alignItems: 'center' }}>
        <View style={{ width: 50, height: 50, borderRadius: 50, marginHorizontal: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
          <Entypo name="user" size={30} />
        </View>
        <View>
          <View>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : 'Fetching User'}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 14, color: 'white' }}>{currentUser ? currentUser.username : 'Fetching User'}</Text>
          </View>
        </View>
      </View>
      <DrawerItemList {...props} activeBackgroundColor={'#eee'} activeTintColor={'black'} />
      <Pressable style={{ paddingLeft: 20, marginVertical: 10 }} onPress={() => Auth.signOut()}>
        <Text style={{ fontWeight: 'bold' }}>Logout</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
}