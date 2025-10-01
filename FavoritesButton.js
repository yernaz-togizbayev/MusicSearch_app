import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

/**
 * FavoritesButton is used to render a button to navigate to the FavoritesScreen
 * @param {object} navigation - object which is used to navigate to other screen
 * @returns {JSX.Element} a button which navigates to the FavoritesScreen
 */
const FavoritesButton = ({ navigation }) => {

    // Used to handle onPress event of FavoritesButton which navigates then to the FavoritesScreen
    const FavoritesButtonPressed = () => {
        navigation.navigate('Favorites');
    };

    return (
        // FavoritesButton view to navigate to FavoritesScreen
        <View style={styles.FavoritesButtonView}>
            <Icon name="star" size={20} color='#007AFF' marginTop={20} />
            <TouchableOpacity style={styles.favoritesButton} onPress={FavoritesButtonPressed}>
                <Text style={styles.favoritesButtonText}>My Favorite Musicians</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FavoritesButton;

// Style for FavoritesButton
const styles = StyleSheet.create({
    FavoritesButtonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    favoritesButton: {
        marginTop: 20,
        marginLeft: 8

    },
    favoritesButtonText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#007AFF'
    }
});
