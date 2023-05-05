import Reach from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const MusicSearch = (search) => {
    const placeholderText = "Enter a name of " + search.Title;
    return (
        <View>
            <View style={styles.Musician}>
                <Text style={styles.SearchTitle}>{search.Title}</Text>

                {/* View for Search with icon and TextInput */}
                <View style={styles.Search}>
                    <Icon name="search" size={15} style={{marginRight: 10}} />
                    <TextInput
                        placeholder={placeholderText}
                        onChangeText={i => search.updateState(i)}
                        style={styles.TextInput} />
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
    SearchTitle: {
        marginTop: 32,
        marginLeft: 5,
        marginRight: 10,
        fontSize: 17
    },
    Search: {
        flexDirection: 'row',
        flex: 1,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 12,
        height: 40,
        padding: 10,
        marginTop: 25
      },
      TextInput: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 15,
    },
})