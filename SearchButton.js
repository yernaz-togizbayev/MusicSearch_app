import React from "react"
import { Text, View, StyleSheet, TouchableHighlight } from "react-native"

const SearchButton = ({ navigation, musician }) => {
    const searchButtonPressed = () => {
        navigation.navigate('Musician', {
            musician: musician
        });
    };

    return (
        <View>
            {/* Search Button */}
            <TouchableHighlight style={styles.SearchButton} onPress={searchButtonPressed}>
                    <Text style={styles.SearchButtonText}>Search</Text>
            </TouchableHighlight>
        </View>
    );
};

export default SearchButton;

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
