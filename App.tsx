import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import DifficultyLevelScreen from "./src/screens/DifficultyLevelScreen";
import QuizProccessScreen from "./src/screens/QuizProccessScreen";
import ResultScreen from "./src/screens/ResultScreen";
import AddWalkScreen from "./src/screens/AddWalkScreen";
import AddWalkMoreInfoScreen from "./src/screens/AddWalkMoreInfoScreen";
import LastAddScreen from "./src/screens/LastAddScreen";
import TripDetailsScreen from "./src/screens/TripDetailsScreen";
import SplashScreen from "./src/screens/Splash";
// import BackgroundMusic from "./src/components/BackgroundMusic";

const Stack = createStackNavigator();

const leftCu = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {navigation.goBack()}} style={{marginLeft: 16, transform: [{scaleX: -1}]}}>

        </TouchableOpacity>
        )
    }

export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    {/*<BackgroundMusic />*/}
                    <Stack.Navigator screenOptions={{
                        headerStyle: { backgroundColor: '#000000', },
                        headerLeft: leftCu,
                        headerTitle: () => (
                            <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', width: '100%'}}>
                            {/*<Text>*/}
                            {/*    Wonders of Holland*/}
                            {/*</Text>*/}
                            </View>
                        ),
                        headerShadowVisible: false,
                    }}>

                        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
                        {/*<Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />*/}
                        <Stack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false }} />

                        <Stack.Screen name="DifficultyLevel" component={DifficultyLevelScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="QuizProccess" component={QuizProccessScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Result" component={ResultScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="AddWalk" component={AddWalkScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="AddWalkMoreInfo" component={AddWalkMoreInfoScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="LastAdd" component={LastAddScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="TripDetails" component={TripDetailsScreen} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
