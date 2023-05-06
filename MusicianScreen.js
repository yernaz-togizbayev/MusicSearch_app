import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const MusicianScreen = ({ route }) => {
    const { musician } = route.params;
    const [artistMetaData, setArtistMetaData] = useState(null);
    const [releaseGroupsMetaData, setReleaseGroupsMetaData] = useState([]);

    const artistInfoText = styles.artistInfoText;
    
    useEffect(() => {
        const fetchMusician = async () => {
            try {
                const url = 'https://musicbrainz.org/ws/2/artist/?query=' + musician.trim().replace(/\s/g, '%20') + '&fmt=json';

                const urlResponse = await fetch(url, {
                    headers: {
                        'User-Agent': 'MyA2App_MusicSearch',
                    },
                });

                const metaData = await urlResponse.json();

                // Process the data and extract the relevant information
                const artists = metaData?.artists ?? [];
                const artist = artists.find((artist) => artist.name.toLowerCase() === musician.trim().toLowerCase());
                setArtistMetaData(artist);

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

    const extractYear = (dateString) => {
        const date = new Date(dateString);
        return date.getFullYear();
    };


    return (

        <ScrollView>
            {artistMetaData ? (
                <View style={styles.artistInfoView}>
                    {releaseGroupsMetaData.map((releaseGroup) => (
                        <View key={releaseGroup.id}>
                            <Text style={styles.albumTitel}>{releaseGroup.title}</Text>
                            <View style={styles.AlbumCoverView}>
                                
                                <Image source={{ uri: 'https://coverartarchive.org/release-group/' + releaseGroup.id + '/front' }}
                                    style={styles.AlbumCoverImage} />
                            </View>
                            <Text style={artistInfoText}>Name: {artistMetaData.name}</Text>
                            <Text style={artistInfoText}>Type: {artistMetaData.type === "Person" ? "Singer" : "Group"}</Text>
                            <Text style={artistInfoText}>Album Type: {releaseGroup['primary-type']}</Text>
                            <Text style={artistInfoText}>Country: {artistMetaData['area']?.name}</Text>
                            <Text style={artistInfoText}>Release Year: {extractYear(releaseGroup['first-release-date'])}</Text>
                            <View style={styles.horizontalLine} />
                        </View>
                    ))}
                    
                </View>
            ) : (
                <View style={styles.wrongMusicianInputMessage}>
                    <Text style={{fontSize: 18, textAlign: 'center'}}> No artist with name
                        <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}> {musician.trim()}.{'\n'}</Text>
                        Check if there is no typo in name and try again!
                    </Text>
                </View>
            )}
        </ScrollView>
    );
};

export default MusicianScreen;

const styles = StyleSheet.create({
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
        alignItems: 'center',
        marginTop: 30
    }

});