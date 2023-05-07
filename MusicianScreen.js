import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, ToastAndroid } from 'react-native';

/**
 * Displays albums or single songs of musician or band with album title,
 * cover image, name, type of musician, type of album, country and release year
 * @param {object} route An object which contains a musician parameter
 * @returns {JSX.Element}  A scrollable View element which represents a musician screen with metadata
 */
const MusicianScreen = ({ route }) => {
    const { musician } = route.params;
    const {favorites, setFavorites} = route.params;
    const [addSucceed, setAddSucceed] = useState(false);

    // variables to hold metadata of artist and release group
    const [artistMetaData, setArtistMetaData] = useState(null);
    const [releaseGroupsMetaData, setReleaseGroupsMetaData] = useState([]);

    const artistInfoText = styles.artistInfoText; // style variable for artist information text
    
    // Fetches metadata of artist and release group from MusicBrainz API and update variables state
    useEffect(() => {
        const fetchMusician = async () => {
            try {
                // URL for artist search API
                const url = 'https://musicbrainz.org/ws/2/artist/?query=' + musician.trim().replace(/\s/g, '%20') + '&fmt=json';

                // Fetches artist's metadata
                const urlResponse = await fetch(url, {
                    headers: {
                        'User-Agent': 'MyA2App_MusicSearch',
                    },
                });

                const metaData = await urlResponse.json();

                // Compares parsed musician name from MusicianSearchBar with MusicBrainz API and updates artistMetaData
                const artists = metaData?.artists ?? [];
                const artist = artists.find((artist) => artist.name.toLowerCase() === musician.trim().toLowerCase());
                setArtistMetaData(artist);

                // Fetches release group's metadata and updates releaseGroupsMetaData
                if (artist) {
                    const releaseGroupUrl = 'https://musicbrainz.org/ws/2/artist/' + artist.id + '?inc=release-groups&fmt=json';
                    const releaseGroupUrlResponse = await fetch(releaseGroupUrl, {
                        headers: {
                            'User-Agent': 'MyA2App_MusicSearch',
                        },
                    });

                    const releaseGroupMetaData = await releaseGroupUrlResponse.json();
                    const releaseGroups = releaseGroupMetaData?.['release-groups'] ?? [];
                    setReleaseGroupsMetaData(releaseGroups);
                }
            } catch (error) {
                console.error('Error fetching musician data:', error);
            }
        };

        fetchMusician();

    }, [musician]);

    // Extracts a year from the 'first-release-date' which is in format 'yyyy-mm-dd'
    const extractYear = (dateString) => {
        const date = new Date(dateString);
        return date.getFullYear();
    };

    // Adds musician to the list of favorites
    // Displays a message if artist already in the favorites list
    const addToFavorites = () => {
        if (!favorites.find((artist) => artist.id === artistMetaData.id)) {
            setFavorites([...favorites, artistMetaData]);
            setAddSucceed(true);
        } else {
            ToastAndroid.showWithGravityAndOffset (
                'Artist is already in favorites.',
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
                25,
                75
            )
        }
      };

    // Displays a content of metadata to the screen
    return (
        <ScrollView style={styles.container}>
            {artistMetaData ? (
                <View style={styles.artistInfoView}>

                    <Button
                        title={addSucceed ? 'Added to Favorites' : 'Add to Favorites'}
                        onPress={addToFavorites} />

                    {releaseGroupsMetaData.map((releaseGroup) => (
                        <View key={releaseGroup.id}>

                            {/* Titel and cover image */}
                            <Text style={styles.albumTitel}>{releaseGroup.title}</Text>
                            <View style={styles.AlbumCoverView}>
                                <Image source={{ uri: 'https://coverartarchive.org/release-group/' + releaseGroup.id + '/front' }}
                                        style={styles.AlbumCoverImage}
                                />
                            </View>

                            {/* Format output of metadata */}
                            <Text style={artistInfoText}><Text style={{fontWeight: 'bold'}}>Name:</Text> {artistMetaData.name}</Text>
                            <Text style={artistInfoText}><Text style={{fontWeight: 'bold'}}>Type of musician:</Text> {artistMetaData.type === "Person" ? "Singer" : "Group"}</Text>
                            <Text style={artistInfoText}><Text style={{fontWeight: 'bold'}}>Album Type:</Text> {releaseGroup['primary-type']}</Text>
                            <Text style={artistInfoText}><Text style={{fontWeight: 'bold'}}>Country:</Text> {artistMetaData['area']?.name}</Text>
                            <Text style={artistInfoText}><Text style={{fontWeight: 'bold'}}>Release Year:</Text> {extractYear(releaseGroup['first-release-date'])}</Text>
                            <View style={styles.horizontalLine} />

                        </View>
                    ))}
                    
                </View>
            ) : (
                <View style={{marginTop: 330}}>
                    <Text style={{fontSize: 20, textAlign: 'center'}}>Loading...</Text>
                </View>
                // <View style={styles.wrongMusicianInputMessage}>
                //     <Text style={{fontSize: 18, textAlign: 'center'}}> No artist with name
                //         <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}> {musician.trim()}.{'\n'}</Text>
                //         Check if there is no typo in name and try again!
                //     </Text>
                // </View>
            )}
        </ScrollView>
    );
};

export default MusicianScreen;

// Style for MusicianScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
      },
    AlbumCoverView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    AlbumCoverImage: {
        width: 300,
        height: 300,
        marginTop: 10
    },
    artistInfoText: {
        marginLeft: 10,
        fontSize: 20,
        marginTop: 10
    },
    horizontalLine: {
        borderColor: '#000',
        borderWidth: 1,
        marginVertical: 10
    },
    albumTitel: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    wrongMusicianInputMessage: {
        flex: 1,
        marginTop: 50
    }
});