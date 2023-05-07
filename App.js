import React from 'react';
import { useState } from 'react';
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
  const [favorites, setFavorites] = useState([]);

  return(
    <NavigationContainer>
      <Next.Navigator>
        {/* Navigates to the HomeScreen */}
        <Next.Screen name="Home" component={HomeScreen} />

        {/* Parse favorites and setFavorites as route and navigates to the MusicianScreen */}
        <Next.Screen
          name="Musician"
          component={MusicianScreen}
          initialParams={{ favorites, setFavorites }}
        />

        {/* Parse favorites as route and navigates to the FavoritesScreen */}
        <Next.Screen
          name="Favorites"
          component={FavoritesScreen}
          initialParams={{ favorites }}
        />
      </Next.Navigator>
    </NavigationContainer>
  );
}