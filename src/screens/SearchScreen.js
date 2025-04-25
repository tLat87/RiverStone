import { Image, ScrollView, Text, TouchableOpacity, Vibration, View, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';


const SearchScreen = ({ navigation }) => {
    const isDark = useSelector((state) => state.theme.isDark);

    return (
        <View style={{backgroundColor: isDark ? '#0A0A0A' : '#00DDCD', flex: 1, paddingHorizontal: 16 }}>
            <ScrollView style={{ backgroundColor: '#000', flex: 1, paddingHorizontal: 16 }}>
                <View style={{marginTop: '40%'}}>
                    <Image source={require('../assets/img/img.png')} style={{alignSelf: 'center'}}/>

                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 900, textAlign: 'center' }}>
                        You do not have any observations added yet
                    </Text>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor: '#FDD72E', padding: 16, width: '100%', borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginBottom: 8,}}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                    Add a walk
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default SearchScreen;
