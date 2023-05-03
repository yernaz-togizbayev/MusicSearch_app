import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MusicSearch from './MusicSearch';
import { SearchBar } from 'react-native-screens';
import SearchButton from './SearchButton';
import {useFonts} from 'expo-font'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function HomeScreen() {
  const [musician, setMusicianName] = useState('')
  const [band, setBandName] = useState('')

  return (
    <View style={styles.container}>
      {/* Views for Name/Surname and Matrikelnummer at the top of application */}
      <View style={styles.NameAndMatrNum}>
        <Text style={styles.myName}>Togizbayev Yernaz</Text>
        <Text style={styles.myMatrNum}>01429473</Text>
      </View>
      
      {/* Titel of App */}
      <View style={styles.MusicSearchTitle}>
        <Text style={styles.AppTitle}>Music Search</Text>
        <Icon name="music-note" size={40} color="#000" style={{marginLeft: 8}} />
      </View>

      {/* Search for Musician and Band */}
      <View style={styles.Musician}>

      </View>
      <MusicSearch Title="Musician" updateState={setMusicianName} />
      <MusicSearch Title="Band" updateState={setBandName} />

      <SearchButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40
  },
  NameAndMatrNum: {
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
  AppTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20
  },
  MusicSearchTitle: {
    flexDirection: 'row',
    marginTop: 180,
    marginLeft: 60
  }
});
