import { Image, ScrollView, Text, TouchableOpacity, Vibration, View, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import ChevronRight from '../assets/svg/ChevronRight';
import RightYellowSvg from '../assets/svg/RightYellowSvg';


const QuizScreen = ({ navigation }) => {

    return (
        <View style={{backgroundColor: '#000', flex: 1, paddingHorizontal: 16, justifyContent: 'space-around', alignItems: 'center'}}>
                    <Image source={require('../assets/img/img.png')} style={{alignSelf: 'center'}}/>

            <TouchableOpacity onPress={() => navigation.navigate('DifficultyLevel')}>
                <RightYellowSvg/>
            </TouchableOpacity>
            <View style={{marginBottom:100}}/>
        </View>
    );
};

export default QuizScreen;
