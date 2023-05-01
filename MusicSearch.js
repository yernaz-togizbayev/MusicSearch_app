import Reach from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const MusicSearch = (search) => {
    const placeholderText = "Enter a name of " + search.Title;
    return (
        <View>
            <Text style={styles.SearchTitle}>{search.Title}</Text>

            {/* View for Search with icon and TextInput */}
            <View style={styles.Search}>
                <Icon name="search" size={15} style={{marginRight: 10}} />
                <TextInput
                    placeholder={placeholderText}
                    onChangeText={i => search.updateState(i)} />
            </View>
        </View>
    );
}

export default MusicSearch

const styles = StyleSheet.create({
    SearchTitle: {
        marginTop: 20,
        marginLeft: 5,
        fontSize: 16
    },
    Search: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#111',
        borderRadius: 12,
        height: 40,
        padding: 10,
        marginTop: 5
      }
})