import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MusicianSearchBar from './MusicianSearchBar';
import SearchButton from './SearchButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import FavoritesButton from './FavoritesButton';

/**
 * Displays main screen of the Music Search App
 * @returns {JSX.Element} React element which contains my name and matriculation number,
 * app name, short description, search bar and two buttons
 */
export default function HomeScreen() {
  const [musician, setMusicianName] = useState('')
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Displays my name/surname and matriculation number at the top of the screen */}
      <View style={styles.NameAndMatrNumView}>
        <Text style={styles.myName}>Togizbayev Yernaz</Text>
        <Text style={styles.myMatrNum}>01429473</Text>
      </View>
      
      {/* Displays Titel of App with Note-Logo */}
      <View style={styles.MusicSearchTitleView}>
        <Text style={styles.AppTitle}>Music Search</Text>
        <Icon name="music-note" size={40} color="#000" style={{marginLeft: 8}} />
      </View>

      {/* Displays a short description of app */}
      <Text style={styles.AppInformation}>
        This is my Music Search App. In the Search-Section below
        you can enter a name of Musician or name of the Band. 
      </Text>

      {/* Input field for searching musician or band */}
      <MusicianSearchBar updateState={setMusicianName} />
      
      {/* Button to navigate to FavoritesScreen */}
      <FavoritesButton navigation={navigation}/>

      {/* Button to navigate to MusicianScreen after entering input in the search bar */}
      <SearchButton  navigation={navigation} musician={musician} />
    </View>
  );
}

// Style for HomeScreen
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