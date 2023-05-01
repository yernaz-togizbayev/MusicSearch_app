import React from "react"
import { Text, View, StyleSheet, TouchableHighlight } from "react-native"

const SearchButton = () => {
    // const buttonPressed = () => {
        
    // };

    return (
        <View>
            {/* Search Button */}
            {/* onPress={buttonPressed} */}
            <TouchableHighlight style={styles.Button} >
                    <Text style={styles.SearchButtonText}>Search</Text>
            </TouchableHighlight>
        </View>
    );

};

export default SearchButton

const styles = StyleSheet.create ({
    Button: {
        marginTop: 25,
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
