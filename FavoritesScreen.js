import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

/**
 * Here appears all favorite musicians which has been added from MusicianScreen
 * @returns {JSX.Element} List of favorite musicians
 */
const FavoritesScreen = ({ route }) => {
    const { favorites } = route.params;
    let countMusicians = 1;

    return (
        <ScrollView style={styles.FavoritesScreen}>
            <Text style={styles.FavoritesTitle}>My Favorites</Text>
            {favorites && favorites.map((artist) => (
                <View key={artist.id}>
                    <Text style={{ fontSize: 20, marginBottom: 12 }}>{countMusicians++}. {artist.name}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

export default FavoritesScreen;

// Style for FavoritesScreen
const styles = StyleSheet.create({
    FavoritesScreen: {
        flex: 1,
        padding: 15,
        marginBottom: 30
    },
    FavoritesTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center'
    }
});
