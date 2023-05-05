import React from "react"
import { Text, View, StyleSheet, TouchableHighlight } from "react-native"

const SearchButton = ({ navigation, musician }) => {
    const buttonPressed = () => {
        navigation.navigate('Musician', {
            musician: musician
        });
    };

    return (
        <View>
            {/* Search Button */}
            <TouchableHighlight style={styles.Button} onPress={buttonPressed}>
                    <Text style={styles.SearchButtonText}>Search</Text>
            </TouchableHighlight>
        </View>
    );
};

export default SearchButton;

const styles = StyleSheet.create ({
    Button: {
        marginTop: 50,
        backgroundColor: '#2196F0',
        padding: 10,
        borderRadius: 12
      },
      SearchButtonText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#ffffff'
      }
});
