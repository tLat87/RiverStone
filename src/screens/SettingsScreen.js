import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    Vibration,
    View,
    TextInput,
    Switch,
    Alert,
    Linking,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import RightYellowSvg from '../assets/svg/RightYellowSvg';
import WhitePlusSvg from '../assets/svg/WhitePlusSvg';
import ChevronRight from '../assets/svg/ChevronRight';
import {toggleTheme} from '../redux/slices/themeSlice';
import {useDispatch, useSelector} from 'react-redux';


const SettingsScreen = ({ navigation }) => {
    const isDarkTheme = useSelector((state) => state.theme.isDark);    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
    const dispatch = useDispatch();
    const isDark = useSelector((state) => state.theme.isDark);

    return (
        <View style={{backgroundColor: isDark ? '#0A0A0A' : '#00DDCD', flex: 1, paddingHorizontal: 16 }}>
                <View style={{}}>
                    <Image source={require('../assets/img/img.png')} style={{alignSelf: 'center'}}/>


                </View>
            <View>
                <View
                    style={{
                        backgroundColor: '#002F1C',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 16,
                        width: '100%',
                        borderRadius: 16,
                        alignItems: 'center',
                        marginBottom: 8,
                    }}
                    // onPress={() => Alert.alert('Still in development')}
                    // activeOpacity={0.8}
                >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                        Dark theme
                    </Text>
                    <Switch
                        value={isDarkTheme}
                        onValueChange={() => dispatch(toggleTheme())}
                    />
                </View>

                {/*<TouchableOpacity*/}
                {/*    style={{*/}
                {/*        backgroundColor: '#002F1C',*/}
                {/*        flexDirection: 'row',*/}
                {/*        justifyContent: 'space-between',*/}
                {/*        padding: 16,*/}
                {/*        width: '100%',*/}
                {/*        borderRadius: 16,*/}
                {/*        alignItems: 'center',*/}
                {/*        marginBottom: 8,*/}
                {/*    }}*/}
                {/*    onPress={() => Alert.alert('Still in development')}*/}
                {/*    activeOpacity={0.8}*/}
                {/*>*/}
                {/*    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>*/}
                {/*        Notifications*/}
                {/*    </Text>*/}
                {/*    /!*<Switch*!/*/}
                {/*    /!*    value={isNotificationsEnabled}*!/*/}
                {/*    /!*    onValueChange={setIsNotificationsEnabled}*!/*/}
                {/*    /!*    onStartShouldSetResponder={() => true}*!/*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.termsfeed.com/live/648aaa2f-ffa2-4a84-bc98-211fb04043ce')}
                    style={{
                        backgroundColor: '#002F1C',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 16,
                        width: '100%',
                        borderRadius: 16,
                        alignItems: 'center',
                        marginBottom: 8,
                    }}
                >                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                        Privacy Policy
                    </Text>
                    <ChevronRight/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.termsfeed.com/live/648aaa2f-ffa2-4a84-bc98-211fb04043ce')}
                                                      style={{backgroundColor: '#002F1C',flexDirection: 'row', justifyContent: 'space-between', padding: 16, width: '100%', borderRadius: 16, alignItems: 'center', marginBottom: 8,}}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                        Terms of use
                    </Text>
                    <ChevronRight/>
                </TouchableOpacity>
                {/*<TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor: '#002F1C',flexDirection: 'row', justifyContent: 'space-between', padding: 16, width: '100%', borderRadius: 16, alignItems: 'center', marginBottom: 8,}}>*/}
                {/*    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>*/}
                {/*        About developer*/}
                {/*    </Text>*/}
                {/*    <ChevronRight/>*/}
                {/*</TouchableOpacity>*/}
            </View>
        </View>
    );
};

export default SettingsScreen;
