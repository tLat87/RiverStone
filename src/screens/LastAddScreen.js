// src/screens/LastAddScreen.js

import { Image, TouchableOpacity, Text, View } from 'react-native';
import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AccentSvg from '../assets/svg/AccentSvg';
import {addTrip} from '../redux/slices/tripSlice';

const LastAddScreen = ({ navigation, route }) => {
    const { date, durationHours, durationMinutes, place, photos, notes } = route.params;
    const [selectedOption, setSelectedOption] = useState(null);
    const dispatch = useDispatch(); // Диспетчер для отправки экшенов

    const handleOptionPress = (option) => {
        setSelectedOption(option); // обновление выбранной опции
    };

    const handleNavigate = () => {
        if (selectedOption) {
            // Создаем объект для сохранения в Redux
            const tripData = {
                id: Date.now(),
                date,
                durationHours,
                durationMinutes,
                place,
                photos,
                notes,
                selectedOption,
            };

            // Отправляем экшн в Redux для добавления нового трипа
            dispatch(addTrip(tripData));

            // Переходим на экран с добавленным трипом (можно передать tripData, если нужно)
            navigation.pop(3);
        }
    };
    const isDark = useSelector((state) => state.theme.isDark);

    return (
        <View style={{ backgroundColor: isDark ? '#0A0A0A' : '#00DDCD', flex: 1, paddingHorizontal: 16 }}>
            <Image source={require('../assets/img/img.png')} style={{ alignSelf: 'center', marginTop: 100 }} />
            <View>
                <TouchableOpacity
                    onPress={() => handleOptionPress('Forest')}
                    style={{
                        backgroundColor: selectedOption === 'Forest' ? '#006400' : '#002F1C',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 16,
                        width: '100%',
                        borderRadius: 16,
                        alignItems: 'center',
                        marginBottom: 8,
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>🌲Forest</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleOptionPress('River')}
                    style={{
                        backgroundColor: selectedOption === 'River' ? '#006400' : '#002F1C',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 16,
                        width: '100%',
                        borderRadius: 16,
                        alignItems: 'center',
                        marginBottom: 8,
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>🌊River</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleOptionPress('Field')}
                    style={{
                        backgroundColor: selectedOption === 'Field' ? '#006400' : '#002F1C',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 16,
                        width: '100%',
                        borderRadius: 16,
                        alignItems: 'center',
                        marginBottom: 8,
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>🌾Field</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleOptionPress('Mountain')}
                    style={{
                        backgroundColor: selectedOption === 'Mountain' ? '#006400' : '#002F1C',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 16,
                        width: '100%',
                        borderRadius: 16,
                        alignItems: 'center',
                        marginBottom: 8,
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>⛰️Mountain</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleOptionPress('Coastline')}
                    style={{
                        backgroundColor: selectedOption === 'Coastline' ? '#006400' : '#002F1C',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 16,
                        width: '100%',
                        borderRadius: 16,
                        alignItems: 'center',
                        marginBottom: 8,
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>🏖️Coastline</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    bottom: 70,
                }}
                onPress={handleNavigate}
                disabled={!selectedOption}
            >
                <AccentSvg />
            </TouchableOpacity>
        </View>
    );
};

export default LastAddScreen;
