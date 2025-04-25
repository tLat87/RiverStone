import { Image, ScrollView, Text, TouchableOpacity, Vibration, View, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import ChevronRight from '../assets/svg/ChevronRight';
import RightYellowSvg from '../assets/svg/RightYellowSvg';
import {useSelector} from 'react-redux';


const QuizScreen = ({ navigation }) => {
    const isDark = useSelector((state) => state.theme.isDark);

    return (
        <View style={{backgroundColor: isDark ? '#0A0A0A' : '#00DDCD', flex: 1, paddingHorizontal: 16, justifyContent: 'space-around', alignItems: 'center'}}>
                    <Image source={require('../assets/img/img.png')} style={{alignSelf: 'center'}}/>

            <TouchableOpacity onPress={() => navigation.navigate('DifficultyLevel')}>
                <RightYellowSvg/>
            </TouchableOpacity>
            <View style={{marginBottom:100}}/>
        </View>
    );
};

export default QuizScreen;
