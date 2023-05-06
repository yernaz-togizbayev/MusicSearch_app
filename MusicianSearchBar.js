import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

/**
 * Displays an input field for searching by name of musician or band
 * @param {Object} search An object which holds a function for updating the search state
 * @returns {JSX.Element} An input field with Icon and TextInput
 */
const MusicianSearchBar = (search) => {
    return (
        // View for search bar with Icon and TextInput
        <View>
            <View style={styles.SearchSectionContainer}>
                <View style={styles.SearchSection}>
                    <Icon name="search" size={15} style={{marginRight: 10}} />
                    <TextInput
                        placeholder={"Enter a name of Musician or Band"}
                        onChangeText={i => search.updateState(i)}
                        style={styles.SearchSectionTextInput} />
                </View>
            </View>
        </View>
    );
}

export default MusicianSearchBar;

// Style for MusicSearch
const styles = StyleSheet.create({
    SearchSectionContainer: {
        flexDirection: 'row'
    },
    SearchSection: {
        flexDirection: 'row',
        flex: 1,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 12,
        height: 40,
        padding: 9,
        marginTop: 40
    },
    SearchSectionTextInput: {
        flex: 1,
        marginLeft: 5,
        fontSize: 16,
}
})