import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const FavoritesButton = ({ navigation }) => {
    const FavoritesButtonPressed = () => {
        navigation.navigate('FavoritesScreen');
    };

    return (
        <View style={styles.FavoritesButtonView}>
            {/* Button to navigate to FavoritesScreen */}
            <Icon name="star" size={20} color='#007AFF' marginTop={20} />
            <TouchableOpacity style={styles.favoritesButton} onPress={FavoritesButtonPressed}>
                <Text style={styles.favoritesButtonText}>My Favorite Musicians</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FavoritesButton;

const styles = StyleSheet.create ({
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
