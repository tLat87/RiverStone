import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import BackSvg from '../assets/svg/BackSvg';
import AccentSvg from '../assets/svg/AccentSvg';
import {useSelector} from 'react-redux';

const AddWalkScreen = ({ navigation }) => {
    const [place, setPlace] = useState('');
    const [date, setDate] = useState(new Date());
    const [durationHours, setDurationHours] = useState(1);
    const [durationMinutes, setDurationMinutes] = useState(0);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showDurationPicker, setShowDurationPicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) setDate(selectedDate);
    };

    const handleDurationChange = (event, selectedDate) => {
        setShowDurationPicker(false);
        if (selectedDate) {
            setDurationHours(selectedDate.getHours());
            setDurationMinutes(selectedDate.getMinutes());
        }
    };

    const isFormComplete = place.trim() !== '' && durationHours !== null && date !== null;
    const isDark = useSelector((state) => state.theme.isDark);

    return (
        <View style={{ backgroundColor: isDark ? '#0A0A0A' : '#00DDCD', flex: 1, paddingHorizontal: 16, justifyContent: 'center', alignItems: 'center' }}>
            {/* Кнопка Назад */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', left: 20, top: 70 }}>
                <BackSvg />
            </TouchableOpacity>

            {/* Инпут для места */}
            <TextInput
                value={place}
                onChangeText={setPlace}
                placeholder="Place"
                placeholderTextColor="#fff"
                style={{
                    width: '100%',
                    backgroundColor: '#002F1C',
                    padding: 18,
                    borderRadius: 8,
                    fontSize: 18,
                    color: '#FFF',
                    marginBottom: 20
                }}
            />

            {/* Выбор даты */}
            <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 8 }}>Date</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={pickerStyle}>
                <Text style={{ color: '#FFF', fontSize: 18 }}>{date.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker value={date} mode="date" display="spinner" onChange={handleDateChange} style={{ width: '100%', }}  themeVariant="dark"/>
            )}

            {/* Выбор продолжительности */}
            <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 8 }}>Duration</Text>
            <TouchableOpacity onPress={() => setShowDurationPicker(true)} style={pickerStyle}>
                <Text style={{ color: '#FFF', fontSize: 18 }}>{`${durationHours} H ${durationMinutes} MIN`}</Text>
            </TouchableOpacity>
            {showDurationPicker && (
                <DateTimePicker value={new Date(0, 0, 0, durationHours, durationMinutes)} mode="time" display="spinner" onChange={handleDurationChange}  themeVariant="dark"/>
            )}

            {/* Кнопка подтверждения */}
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    bottom: 70,
                    opacity: isFormComplete ? 1 : 0.5
                }}
                disabled={!isFormComplete}
                onPress={()=>{navigation.navigate('AddWalkMoreInfo', {date, durationHours, durationMinutes, place});}}
            >
                <AccentSvg />
            </TouchableOpacity>
        </View>
    );
};

const pickerStyle = {
    width: '100%',
    backgroundColor: '#1A1A1A',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20
};

export default AddWalkScreen;
