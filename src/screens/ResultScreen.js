import {Image, Text, TouchableOpacity, View} from 'react-native';
import BackSvg from '../assets/svg/BackSvg';
import React from 'react';
import ExitSvg from '../assets/svg/ExitSvg';
import {useSelector} from 'react-redux';

const ResultScreen = ({ navigation, route }) => {
    const {score} = route.params;
    const isDark = useSelector((state) => state.theme.isDark);
    return(
        <View style={{ backgroundColor: isDark ? '#0A0A0A' : '#00DDCD', flex: 1, paddingHorizontal: 16, justifyContent: 'space-around', alignItems: 'center' }}>


            <Image source={require('../assets/img/img.png')} style={{ marginTop: 50 }} />

            <View style={{alignItems: 'center'}}>
                <Text style={{ color: 'white', fontSize: 45 , fontWeight: '900' }}>
                    Your result
                </Text>
                <Text style={{ color: '#FDD72E', fontSize: 45 , fontWeight: '900' }}>
                    {score} / 10
                </Text>
            </View>

            <TouchableOpacity onPress={() => navigation.pop(2)} style={{  }}>
                <ExitSvg/>
            </TouchableOpacity>
        </View>
    )
}

export default ResultScreen;
