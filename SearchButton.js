import React from "react"
import { Text, View, StyleSheet, TouchableHighlight } from "react-native"

/**
 * 
 * @param {Object} navigation object which is used to navigate to other screen
 * @param {String} musician name of musician or band
 * @returns {JSX.Element} a button which navigates to the MusicianScreen
 */
const SearchButton = ({ navigation, musician }) => {

    // Used to handle onPress event of SearchButton which navigates then to the MusicianScreen
    const searchButtonPressed = () => {
        navigation.navigate('Musician', {
            musician: musician
        });
    };

    return (
        // SearchButton view to navigate to MusicianScreen
        <View>
            <TouchableHighlight style={styles.SearchButton} onPress={searchButtonPressed}>
                    <Text style={styles.SearchButtonText}>Search</Text>
            </TouchableHighlight>
        </View>
    );
};

export default SearchButton;

// Style for SearchButton
const styles = StyleSheet.create ({
    SearchButton: {
        marginTop: 20,
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 12
    },
        SearchButtonText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#ffffff'
    }
});
