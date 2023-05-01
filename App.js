import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.NameAndMatrNum}>
        <Text style={styles.myName}>Togizbayev Yernaz</Text>
        <Text style={styles.myMatrNum}>01429473</Text>
      </View>
      
      <Text style={styles.Title}>Music Search</Text>
      <StatusBar style="auto" />
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
    flex: 1,
    fontSize: 12,
    color: '#808080'
  },
  myMatrNum: {
    flex: 1,
    textAlign: 'right',
    fontSize: 12,
    color: '#808080'
  },
  Title: {
    flex: 1,
    textAlign: 'center',
    marginTop: 70,
    fontWeight: 'bold',
    fontSize: 20
  }


});
