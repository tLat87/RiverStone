import { Image, ScrollView, Text, TouchableOpacity, Vibration, View, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import ChevronRight from '../assets/svg/ChevronRight';
import RightYellowSvg from '../assets/svg/RightYellowSvg';
import BackSvg from '../assets/svg/BackSvg';

const expert = [
    {
        question: 'Which phenomenon explains how some ferns can grow in complete darkness under dense canopies?',
        answers: [
            'Photomorphogenesis',
            'Skotomorphogenesis',
            'Heterophylly',
            'Cryptochrome activation'
        ],
        rightAnswer: 'Skotomorphogenesis'
    },
    {
        question: 'The "Humboldt squid" demonstrates which rare behavioral adaptation?',
        answers: [
            'Bioluminescent communication',
            'Cooperative hunting with dolphins',
            'Geographic dialect variation in skin patterns',
            'Precise color matching to depth gradients'
        ],
        rightAnswer: 'Geographic dialect variation'
    },
    {
        question: 'What makes the soil in tropical rainforests surprisingly nutrient-poor?',
        answers: [
            'Laterization process',
            'Excessive mycorrhizal activity',
            'Rapid biogeochemical cycling',
            'All of the above'
        ],
        rightAnswer: 'All of the above'
    },
    {
        question: 'The "Greenland shark" achieves its extreme longevity (400+ years) through:',
        answers: [
            'Telomerase reactivation',
            'Metabolic depression at depth',
            'Urea-stabilized proteins',
            'Symbiotic anti-aging bacteria'
        ],
        rightAnswer: 'Urea-stabilized proteins'
    },
    {
        question: 'Which plant uses "allelopathy" most effectively to dominate its ecosystem?',
        answers: [
            'Kudzu',
            'Eucalyptus',
            'Black walnut',
            'Japanese knotweed'
        ],
        rightAnswer: 'Black walnut'
    },
]

const medium = [
    {
        question: 'Which of these animals has the strongest bite force relative to its size?',
        answers: [
            'Jaguar',
            'Hyena',
            'Tasmanian devil',
            'Gorilla'
        ],
        rightAnswer: 'Tasmanian devil'
    },
    {
        question: 'What unique adaptation helps camels survive in deserts?',
        answers: [
            'Storing water in their humps',
            'Sweating through their feet',
            'Closing their nostrils during sandstorms',
            'All of the above'
        ],
        rightAnswer: 'All of the above'
    },
    {
        question: 'The "rain shadow" effect occurs when:',
        answers: [
            'Mountains block rainfall from reaching certain areas',
            'Trees create their own microclimate',
            'Ocean currents change weather patterns',
            'Animals dig water channels'
        ],
        rightAnswer: 'Mountains block rainfall from reaching certain areas'
    },
    {
        question: 'Which tree species can live for over 5,000 years?',
        answers: [
            'Redwood',
            'Bristlecone pine',
            'Baobab',
            'Oak'
        ],
        rightAnswer: 'Bristlecone pine'
    },
    {
        question: 'What causes bioluminescence in fireflies?',
        answers: [
            'Luciferin enzyme reaction',
            'Phosphorus in their bodies',
            'Reflected moonlight',
            'Electrical impulses'
        ],
        rightAnswer: 'Luciferin enzyme reaction'
    },
]

const easy = [
    {
        question: 'Which animal is the largest on land?',
        answers: [
            'Elephant',
            'Polar bear',
            'Giraffe',
            'Rhinoceros'
        ],
        rightAnswer: 'Polar bear'
    },
    {
        question: 'What is the driest natural zone on Earth?',
        answers: [
            'Tundra',
            'Desert',
            'Steppe',
            'Savanna'
        ],
        rightAnswer: 'Desert'
    },
    {
        question: 'Which tree is called the "queen of the taiga?',
        answers: [
            'Pine',
            'Birch',
            'Spruce',
            'Oak'
        ],
        rightAnswer: 'Spruce'
    },
    {
        question: 'What do bees collect from flowers to make honey?',
        answers: [
            'Pollen',
            'Nectar',
            'Seeds',
            'Leaves'
        ],
        rightAnswer: 'Nectar'
    },
    {
        question: 'Which bird is known for its ability to fly backward?',
        answers: [
            'Eagle',
            'Hummingbird',
            'Parrot',
            'Owl'
        ],
        rightAnswer: 'Hummingbird'
    },
    {
        question: 'What plant stores water in its stem to survive in deserts?',
        answers: [
            'Cactus',
            'Fern',
            'Moss',
            'Bamboo'
        ],
        rightAnswer: 'Cactus'
    },
    {
        question: 'Which natural phenomenon causes water to "bloom" in lakes?',
        answers: [
            'Algae',
            'Volcanic activity',
            'Frost',
            'Underwater currents'
        ],
        rightAnswer: 'Algae'
    }
]

const DifficultyLevelScreen = ({ navigation }) => {
    const [difficulty, setDifficulty] = useState(null);

    const handleNext = () => {
        if (difficulty) {
            let questions;
            switch (difficulty) {
                case 'Easy':
                    questions = easy;
                    break;
                case 'Medium':
                    questions = medium;
                    break;
                case 'Expert':
                    questions = expert;
                    break;
                default:
                    questions = [];
            }
            navigation.navigate('QuizProccess', { questions });
        }
    };


    return (
        <View style={{ backgroundColor: '#000', flex: 1, paddingHorizontal: 16, justifyContent: 'space-around', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', left: 20, top: 70 }}>
                <BackSvg />
            </TouchableOpacity>

            <Image source={require('../assets/img/img.png')} style={{ marginTop: 50 }} />

            <View style={{ width: '100%' }}>
                <Text style={{ color: '#FDD72E', fontWeight: '900', fontSize: 35, alignSelf: 'center', marginBottom: 12 }}>
                    Difficulty level
                </Text>
                {['Easy', 'Medium', 'Expert'].map((level, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => setDifficulty(level)}
                        style={{
                            backgroundColor: difficulty === level ? '#007F3D' : '#002F1C',
                            justifyContent: 'center',
                            width: '100%',
                            padding: 16,
                            borderRadius: 16,
                            alignItems: 'center',
                            marginBottom: 8,
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                            {level === 'Easy' ? '🌍' : level === 'Medium' ? '🌿' : '🌎'} {level} Level Nature Quiz {level === 'Medium' ? '🌿' : level === 'Expert' ? '🌎' : ''}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity onPress={handleNext} disabled={!difficulty}>
                <RightYellowSvg style={{ opacity: difficulty ? 1 : 0.5 }} />
            </TouchableOpacity>
        </View>
    );
};

export default DifficultyLevelScreen;
