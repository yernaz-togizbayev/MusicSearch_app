import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const MusicSearch = (search) => {
    return (
        <View>
            <View style={styles.Musician}>
                {/* View for Search with icon and TextInput */}
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

export default MusicSearch

const styles = StyleSheet.create({
    Musician: {
        flexDirection: 'row'
    },
    SearchSection: {
        flexDirection: 'row',
        flex: 1,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 12,
        height: 40,
        padding: 10,
        marginTop: 40
      },
      SearchSectionTextInput: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 15,
    },
})