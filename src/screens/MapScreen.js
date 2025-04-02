import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ navigation }) => {
    const [region, setRegion] = useState({
        latitude: 40.6782,
        longitude: -73.9442,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
    });

    const [searchText, setSearchText] = useState('');
    const [markers, setMarkers] = useState([
        { id: 1, latitude: 40.688, longitude: -73.985 },
        { id: 2, latitude: 40.692, longitude: -73.933 },
        { id: 3, latitude: 40.674, longitude: -73.952 },
    ]);

    const handleSearch = () => {
        const coords = searchText.split(',').map(coord => parseFloat(coord.trim()));

        if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
            setRegion({
                latitude: coords[0],
                longitude: coords[1],
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            });

            setMarkers([...markers, { id: Date.now(), latitude: coords[0], longitude: coords[1] }]);
        } else {
            Alert.alert('Invalid coordinates', 'Please enter valid latitude and longitude.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Catalog of Observations</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonYellow}>
                    <Text style={styles.buttonText}>I want to visit</Text>
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.searchBar}
                placeholder="🔍 Enter coordinates (lat, lon)"
                placeholderTextColor="#888"
                value={searchText}
                onChangeText={setSearchText}
            />
            <MapView style={styles.map} provider={MapView.PROVIDER_GOOGLE} region={region}>
                {markers.map(marker => (
                    <Marker key={marker.id} coordinate={{ latitude: marker.latitude, longitude: marker.longitude }} />
                ))}
            </MapView>
            <TouchableOpacity style={styles.markButton} onPress={handleSearch}>
                <Text style={styles.markButtonText}>Search</Text>
            </TouchableOpacity>
            <View style={{marginBottom:100}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000', padding: 16 },
    header: { fontSize: 22, fontWeight: 'bold', color: '#FFD700', textAlign: 'center', marginVertical: 10 },
    buttonContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 10 },
    buttonYellow: { backgroundColor: '#FFD700', padding: 10, borderRadius: 8, alignItems: 'center', width: '100%' },
    buttonText: { color: '#000', fontWeight: 'bold' },
    searchBar: { backgroundColor: '#113311', color: '#FFF', padding: 10, borderRadius: 8, marginBottom: 10 },
    map: { flex: 1, borderRadius: 10 },
    markButton: { backgroundColor: '#FFD700', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
    markButtonText: { fontWeight: 'bold', fontSize: 16 },
});

export default MapScreen;
