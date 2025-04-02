import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackSvg from '../assets/svg/BackSvg';
import DeleteTrash from '../assets/svg/DeleteTrash';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {removeTrip} from '../redux/slices/tripSlice';

const TripDetailsScreen = ({ route }) => {
    const { tripId } = route.params;
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const tripData = useSelector(state => state.trip.trips.find(trip => trip.id === tripId));
    const formattedDate = moment(tripData.date).format('DD.MM.YYYY');
    const formattedTime = moment(tripData.date).format('HH:mm');

    const handleDeleteTrip = () => {
        dispatch(removeTrip(tripId));
        navigation.goBack();
    };


    return (
        <View style={styles.container}>
            <Image source={{ uri: tripData.photos[0] }} style={styles.image} />
            <View style={styles.overlayIcons}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ }}>
                    <BackSvg />
                </TouchableOpacity>
                <View style={styles.iconGroup}>

                    <TouchableOpacity style={styles.iconButton} onPress={handleDeleteTrip}>
                        <DeleteTrash/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{tripData.place}</Text>
                <ScrollView horizontal style={{ marginVertical: 10 , width: '100%' }}>
                    {tripData.photos.map((uri, index) => (
                        <Image key={index} source={{ uri }} style={{ width: 100, height: 100, marginRight: 10, borderRadius: 10 }} />
                    ))}
                </ScrollView>
                <Text style={styles.label}>Date:</Text>
                <Text style={styles.value}>{formattedDate}</Text>
                <Text style={styles.label}>Time:</Text>
                <Text style={styles.value}>{formattedTime}</Text>
                <Text style={styles.label}>Duration:</Text>
                <Text style={styles.value}>{tripData.durationHours}h {tripData.durationMinutes}m</Text>
                <Text style={styles.label}>Notes:</Text>
                <Text style={styles.value}>{tripData.notes}</Text>
                <Text style={styles.label}>Category:</Text>
                <Text style={styles.value}>{tripData.selectedOption}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    image: {
        width: '100%',
        height: 250,
    },
    overlayIcons: {
        position: 'absolute',
        top: 50,
        left: 10,
        right: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconButton: {
    },
    iconGroup: {
        flexDirection: 'row',
        gap: 10,
    },
    detailsContainer: {
        padding: 16,
        backgroundColor: '#000',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFD700',
        marginBottom: 10,
    },
    label: {
        fontSize: 14,
        color: '#AAA',
        marginTop: 8,
    },
    value: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    },
});

export default TripDetailsScreen;
