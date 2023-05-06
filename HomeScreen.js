import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MusicSearch from './MusicSearch';
import SearchButton from './SearchButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import FavoritesButton from './FavoritesButton';


export default function HomeScreen() {
  const [musician, setMusicianName] = useState('')
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Views for Name/Surname and Matrikelnummer at the top of application */}
      <View style={styles.NameAndMatrNumView}>
        <Text style={styles.myName}>Togizbayev Yernaz</Text>
        <Text style={styles.myMatrNum}>01429473</Text>
      </View>
      
      {/* Titel of App */}
      <View style={styles.MusicSearchTitleView}>
        <Text style={styles.AppTitle}>Music Search</Text>
        <Icon name="music-note" size={40} color="#000" style={{marginLeft: 8}} />
      </View>

      <Text style={styles.AppInformation}>
        This is my Music Search App. In the Search-Section below
        you can enter a name of Musician or name of the Band. 
      </Text>

      {/* Search for Musician */}
      <MusicSearch updateState={setMusicianName} />

      <FavoritesButton navigation={{navigation}}/>

      <SearchButton  navigation={navigation} musician={musician} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40
  },
  NameAndMatrNumView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  myName: {
    fontSize: 14,
    color: '#808080'
  },
  myMatrNum: {
    textAlign: 'right',
    fontSize: 14,
    color: '#808080'
  },
  MusicSearchTitleView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 20
  },
  AppTitle: {
    fontWeight: 'bold',
    fontSize: 32
  },
  AppInformation: {
    fontSize: 17,
    textAlign: 'center'
  }
});