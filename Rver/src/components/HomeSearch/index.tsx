import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootContext } from '../../navigations/Root';
import styles from './styles';

const HomeSearch = () => {
  const navigation = useNavigation();
  const goToSearch = () => {
    navigation.navigate("Destination Search")
  };

  const { currentUser, deleteSavedDestination } = useContext(RootContext)

  return (
    <>
      <Pressable onPress={() => goToSearch()} style={styles.inputContainer}>
        <Text style={styles.inputText}>Where To?</Text>
      </Pressable>

      <ScrollView>
        {/* Show the bookmarked locations of the current user */}
        {currentUser.bookmarks.map(savedDestination =>
          <Pressable onPress={goToSearch} key={savedDestination.id} style={styles.row}>
            <View style={styles.rowIcon}>
              <AntDesign name={'clockcircle'} size={16} color={'#aaa'} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowText}>{savedDestination.name}</Text>
              <Text style={[styles.rowText, { fontWeight: '500', fontSize: 12 }]}>{savedDestination.address}</Text>
            </View>
            {/* Delete the currently saved bookmarked location */}
            <Pressable style={styles.rowIconCancel} onPress={() => deleteSavedDestination(savedDestination.id)}>
              <MaterialCommunityIcons name={'delete'} size={16} color={'#eb2929'} />
            </Pressable>
          </Pressable>
        )}
      </ScrollView>
    </>
  );
};

export default HomeSearch;
