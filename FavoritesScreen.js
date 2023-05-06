import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Here appears all favorite musicians which has been added from MusicianScreen
 * @returns {JSX.Element} List of favorite musicians
 */
const FavoritesScreen = () => {
  return (
    <View style={styles.FavoritesScreen}>
      <Text style={styles.FavoritesTitle}>My Favorites</Text>
    </View>
  );
};

export default FavoritesScreen;

// Style for FavoritesScreen
const styles = StyleSheet.create({
    FavoritesScreen: {
        flex: 1,
        marginTop: 15
    },
    FavoritesTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center'
    }
});
