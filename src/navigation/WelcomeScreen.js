import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import H from '../assets/svg/H';
import W from '../assets/svg/W';
import SmallLogo from '../assets/svg/SmallLogo';
import ShopSvg from '../assets/svg/ShopSvg';
import RightArrow from '../assets/svg/RightArrow';


const WelcomeScreen = ({ navigation }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        {
            title: "Discover Holland!",
            description: "Explore castles, villages, and hidden gems. Plan your journey with ease!",
            icon: "📌"
        },
        {
            title: "Mysteries & Legends",
            description: "Unravel ancient myths, solve mysteries, and shape the story!",
            icon: "📖"
        },
        {
            title: "History in One Word",
            description: "Pick a word and uncover a fascinating piece of Dutch history!",
            icon: "🕰"
        },
    ];

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            navigation.navigate('MainTab');
        }
    };

    return (
      <View style={styles.container}>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <H/>
              <Text style={{fontSize: 50,marginLeft: 3, fontWeight: 'bold', color: 'white'}}>
                  olland
              </Text>
              <SmallLogo/>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: -20, }}>
              <W/>
              <Text style={{fontSize: 50,marginLeft: 0, fontWeight: 'bold', color: 'white'}}>
                  onders
              </Text>
          </View>

          <View style={{backgroundColor: '#FFCB03', alignItems: 'center', padding: 20, borderRadius: 39, marginTop: 50}}>

              <View style={{flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between'}}>
                  <TouchableOpacity onPress={()=>{navigation.navigate('Shop')}} style={{ backgroundColor: '#fff', padding: 16, borderRadius: 39, alignSelf: 'flex-start' }}>
                      <Text>
                          {steps[currentStep].icon}
                      </Text>
                  </TouchableOpacity>
                  <Text style={{fontWeight: 'bold', fontSize: 20, marginRight: 50}}>
                      {steps[currentStep].title}
                  </Text>
              </View>

              <View style={{flexDirection: 'row',marginTop: 20, alignItems: 'center', width: '90%', justifyContent: 'space-between'}}>
                  <Text style={{width:'70%'}}>
                      {steps[currentStep].description}
                  </Text>
                  <TouchableOpacity onPress={()=>{handleNext()}} style={{ backgroundColor: '#000', padding: 16, borderRadius: 39, alignSelf: 'flex-start' }}>
                      <RightArrow/>
                  </TouchableOpacity>
              </View>

          </View>

      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
    },
});

export default WelcomeScreen;
