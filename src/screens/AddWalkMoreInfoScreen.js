import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker'; // Импорт выбора изображений
import BackSvg from '../assets/svg/BackSvg';
import AccentSvg from '../assets/svg/AccentSvg';
import EmptyPhotoSvg from '../assets/svg/EmptyPhotoSvg';
import {useSelector} from 'react-redux';

const AddWalkMoreInfoScreen = ({ navigation, route }) => {
    const { date, durationHours, durationMinutes, place } = route.params;
    const isDark = useSelector((state) => state.theme.isDark);
    const [photos, setPhotos] = useState([]); // Хранение загруженных фото
    const [notes, setNotes] = useState(''); // Поле описания

    const pickImage = () => {
        const options = {
            mediaType: 'photo',
            selectionLimit: 5, // Ограничение на количество фото
        };

        launchImageLibrary(options, (response) => {
            if (!response.didCancel && !response.error && response.assets) {
                setPhotos([...photos, ...response.assets.map(asset => asset.uri)]);
            }
        });
    };

    // Проверка: все ли поля заполнены
    const isFormComplete = photos.length > 0 && notes.trim() !== '';

    return (
        <View style={{ backgroundColor: isDark ? '#0A0A0A' : '#00DDCD', flex: 1, paddingHorizontal: 16,alignItems: 'center', }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', left: 20, top: 70 }}>
                <BackSvg />
            </TouchableOpacity>

            <TouchableOpacity onPress={pickImage} style={{ backgroundColor: '#002F1C', padding: 20, borderRadius: 12, alignItems: 'center', width: '100%', height: 120, marginTop: 180, }}>
                <EmptyPhotoSvg/>
            </TouchableOpacity>

            {/* Выбранные фото */}
            <ScrollView horizontal style={{ marginVertical: 10 , width: '100%' }}>
                {photos.map((uri, index) => (
                    <Image key={index} source={{ uri }} style={{ width: 100, height: 100, marginRight: 10, borderRadius: 10 }} />
                ))}
            </ScrollView>

            <TextInput
                placeholder="Notes"
                placeholderTextColor="#aaa"
                value={notes}
                onChangeText={setNotes}
                multiline
                style={{
                    width: '100%',
                    backgroundColor: '#002F1C',
                    color: 'white',
                    padding: 10,
                    borderRadius: 10,
                    fontSize: 16,
                    height: 100,
                    marginBottom: '80%',
                    marginVertical: 10,
                }}
            />

            <TouchableOpacity
                style={{
                    position: 'absolute',
                    bottom: 70,
                    opacity: isFormComplete ? 1 : 0.5,
                }}
                disabled={!isFormComplete}
                onPress={() => {
                    navigation.navigate('LastAdd', { date, durationHours, durationMinutes, place, photos, notes});
                }}
            >
                <AccentSvg />
            </TouchableOpacity>
        </View>
    );
};

export default AddWalkMoreInfoScreen;
