import {Image, ScrollView, Text, TouchableOpacity, Vibration, View, TextInput, Switch} from 'react-native';
import React, { useState, useEffect } from 'react';
import RightYellowSvg from '../assets/svg/RightYellowSvg';
import WhitePlusSvg from '../assets/svg/WhitePlusSvg';
import ChevronRight from '../assets/svg/ChevronRight';


const SettingsScreen = ({ navigation }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);


    return (
        <View style={{backgroundColor: '#000', flex: 1, paddingHorizontal: 16 }}>
                <View style={{}}>
                    <Image source={require('../assets/img/img.png')} style={{alignSelf: 'center'}}/>


                </View>
            <View>
                <TouchableOpacity style={{backgroundColor: '#002F1C', flexDirection: 'row', justifyContent: 'space-between', padding: 16, width: '100%', borderRadius: 16, alignItems: 'center', marginBottom: 8}}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                        Dark theme
                    </Text>
                    <Switch
                        value={isDarkTheme}
                        onValueChange={setIsDarkTheme}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: '#002F1C', flexDirection: 'row', justifyContent: 'space-between', padding: 16, width: '100%', borderRadius: 16, alignItems: 'center', marginBottom: 8}}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                        Notifications
                    </Text>
                    <Switch
                        value={isNotificationsEnabled}
                        onValueChange={setIsNotificationsEnabled}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor: '#002F1C',flexDirection: 'row', justifyContent: 'space-between', padding: 16, width: '100%', borderRadius: 16, alignItems: 'center', marginBottom: 8,}}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                        Privacy Policy
                    </Text>
                    <ChevronRight/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor: '#002F1C',flexDirection: 'row', justifyContent: 'space-between', padding: 16, width: '100%', borderRadius: 16, alignItems: 'center', marginBottom: 8,}}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                        Terms of use
                    </Text>
                    <ChevronRight/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor: '#002F1C',flexDirection: 'row', justifyContent: 'space-between', padding: 16, width: '100%', borderRadius: 16, alignItems: 'center', marginBottom: 8,}}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                        About developer
                    </Text>
                    <ChevronRight/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SettingsScreen;
