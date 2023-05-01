import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MusicSearch from './MusicSearch';
import { SearchBar } from 'react-native-screens';
import SearchButton from './SearchButton';


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
      <Text style={styles.AppTitle}>Music Search</Text>

      {/* Search for Musician and Band */}
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
    fontSize: 12,
    color: '#808080'
  },
  myMatrNum: {
    textAlign: 'right',
    fontSize: 12,
    color: '#808080'
  },
  AppTitle: {
    textAlign: 'center',
    marginTop: 200,
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20
  }  
});
