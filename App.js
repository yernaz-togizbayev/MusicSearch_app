import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import MusicianScreen from './MusicianScreen';
import FavoritesScreen from './FavoritesScreen';

const Next = createNativeStackNavigator();

/**
 * It's a main component of Music Search App which allows to switch between different screens
 * @returns {JSX.Element} NavigationContainer which navigates between HomeScreen, MusicianScreen and FavoritesScreen
 */
export default function App() {
  return(
    <NavigationContainer>
      <Next.Navigator>
        <Next.Screen name="Home" component={HomeScreen} />
        <Next.Screen name="Musician" component={MusicianScreen} />
        <Next.Screen name="Favorites" component={FavoritesScreen} />
      </Next.Navigator>
    </NavigationContainer>
  );
}