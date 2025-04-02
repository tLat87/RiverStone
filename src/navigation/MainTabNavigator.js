import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, Settings, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {useNavigation} from '@react-navigation/native';
import SearchScreen from '../screens/SearchScreen';
import MapScreen from '../screens/MapScreen';
import QuizScreen from '../screens/QuizScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HomeSvg from '../assets/svg/HomeSvg';
import MapSvg from '../assets/svg/MapSvg';
import QuizSvg from '../assets/svg/QuizSvg';
import SettingsSvg from '../assets/svg/SettingsSvg';
import SearchSvg from '../assets/svg/SearchSvg';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: '#000000' },
                headerTitle: () => (
                    <Text style={{color:'#FDD72E', fontWeight: '900', fontSize: 24}}>
                        Walking diary
                    </Text>
                ),
                headerShadowVisible: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    paddingTop: 10,
                    backgroundColor: '#113311',
                    borderRadius: 20,
                    height: 60,
                    width: '90%',
                    marginLeft: '5%',
                    borderTopWidth: 0,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                    elevation: 5,
                },
                tabBarIcon: ({ focused }) => {
                    let IconComponent;

                    if (route.name === 'Home') {
                        IconComponent = HomeSvg
                    }if (route.name === 'Search') {
                        IconComponent = SearchSvg
                    }if (route.name === 'Map') {
                        IconComponent = MapSvg
                    }if (route.name === 'Quiz') {
                        IconComponent = QuizSvg
                    }if (route.name === 'Settings') {
                        IconComponent = SettingsSvg
                    }

                    return <IconComponent color={focused ? '#fff' : '#727272'} />;
                },
            })}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                }}
            />
            {/*<Tab.Screen*/}
            {/*    name="Search"*/}
            {/*    component={SearchScreen}*/}
            {/*    options={{*/}
            {/*        tabBarLabel: '',*/}
            {/*    }}*/}
            {/*/>*/}
            <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="Quiz"
                component={QuizScreen}
                options={{
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: '',
                }}
            />

        </Tab.Navigator>
    );
};

export default MainTabNavigator;
