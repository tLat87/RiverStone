import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import BackSvg from '../assets/svg/BackSvg';
import AccentSvg from '../assets/svg/AccentSvg';
import {useSelector} from 'react-redux';

const QuizProccessScreen = ({ navigation, route }) => {
    const { questions } = route.params;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswer = (answer) => {
        if (isAnswered) return; // Блокируем повторное нажатие

        setSelectedAnswer(answer);
        setIsAnswered(true);

        if (answer === currentQuestion.rightAnswer) {
            setScore(prevScore => prevScore + 1);
        }
    };

    const handleNextQuestion = () => {
        if (!isAnswered) return; // Нельзя перейти без ответа

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setIsAnswered(false);
        } else {
            // Если это последний вопрос – возвращаемся в главное меню или показываем результат
            navigation.navigate('Result', {score}); // Замени на нужный экран
        }
    };
    const isDark = useSelector((state) => state.theme.isDark);

    return (
        <View style={{ backgroundColor: isDark ? '#0A0A0A' : '#00DDCD', flex: 1, paddingHorizontal: 16, justifyContent: 'space-around', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', left: 20, top: 70 }}>
                <BackSvg />
            </TouchableOpacity>

            <Image source={require('../assets/img/img.png')} style={{ marginTop: 50 }} />

            {/* Вопрос */}
            <View style={{ width: '100%' }}>
                <Text style={{ color: '#FDD72E', fontWeight: '900', fontSize: 24, textAlign: 'center', marginBottom: 12 }}>
                    {currentQuestion.question}
                </Text>

                {/* Варианты ответа */}
                {currentQuestion.answers.map((answer, index) => {
                    let backgroundColor = '#002F1C'; // Обычный цвет
                    if (isAnswered) {
                        if (answer === currentQuestion.rightAnswer) {
                            backgroundColor = '#007F3D'; // Зеленый (правильный)
                        } else if (answer === selectedAnswer) {
                            backgroundColor = '#8B0000'; // Красный (неправильный)
                        }
                    }

                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleAnswer(answer)}
                            style={{
                                backgroundColor: backgroundColor,
                                justifyContent: 'center',
                                width: '100%',
                                padding: 16,
                                borderRadius: 16,
                                alignItems: 'center',
                                marginBottom: 8,
                            }}
                            disabled={isAnswered} // Блокируем кнопку после ответа
                        >
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                                {answer}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* Кнопка "Далее" (активна только после ответа) */}
            <TouchableOpacity onPress={handleNextQuestion} disabled={!isAnswered} style={{ opacity: isAnswered ? 1 : 0.5 }}>
                <AccentSvg />
            </TouchableOpacity>
        </View>
    );
};

export default QuizProccessScreen;
