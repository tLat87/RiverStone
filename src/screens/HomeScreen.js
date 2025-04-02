// src/screens/HomeScreen.js

import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux'; // Импортируем useSelector для получения данных из Redux

const HomeScreen = ({ navigation }) => {
    const trips = useSelector(state => state.trip.trips); // Получаем список трипов из Redux
    console.log(trips)
    return (
        <View style={{ backgroundColor: '#000', flex: 1, paddingHorizontal: 16 }}>
            <ScrollView style={{ backgroundColor: '#000', flex: 1, paddingHorizontal: 16 }}>
                <View style={{ marginTop: '40%' }}>
                    <Image source={require('../assets/img/img.png')} style={{ alignSelf: 'center' }} />

                    {trips.length === 0 ? (
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 900, textAlign: 'center' }}>
                            You don't have any walks added yet
                        </Text>
                    ) : (
                        <View>
                            {trips.map((trip) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('TripDetails', {tripId: trip.id });
                                    }}
                                    key={trip.id}
                                    style={{
                                        backgroundColor: '#002F1C',
                                        padding: 16,
                                        borderRadius: 16,
                                        marginBottom: 12,
                                    }}
                                >
                                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                                            {trip.place}
                                        </Text>
                                        <View style={{backgroundColor: '#068C55', padding: 6, borderRadius: 10}}>
                                            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>
                                                {trip.selectedOption}
                                            </Text>
                                        </View>
                                    </View>
                                    <Text style={{ color: 'white', fontSize: 16 }}>
                                        {trip.durationHours}h {trip.durationMinutes}m
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                </View>
            </ScrollView>

            <TouchableOpacity
                onPress={() => navigation.navigate('AddWalk')} // Переход на экран добавления трипа
                style={{
                    backgroundColor: '#FDD72E',
                    padding: 16,
                    width: '100%',
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 8,
                }}
            >
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                    Add a walk
                </Text>
            </TouchableOpacity>
            <View style={{marginBottom:100}}/>
        </View>
    );
};

export default HomeScreen;
