import React, { useState } from 'react';

const TriviaContext = React.createContext({
  questions: [],
  currentQuestion: null,
  gameState: 'WELCOME',
  isLoading: false,
  score: 0,
  onResetGame: () => {},
});

export const TriviaContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [gameState, setGameState] = useState('WELCOME');
  const [score, setScore] = useState(0);

  const getQuestions = (params = 'https://the-trivia-api.com/v2/questions/') => {
    setIsLoading(true);

    try {
      fetch(params)
        .then((response) => response.json())
        .then((data) => {
          setQuestions(data);
        })
        .finally(() => {
          setIsLoading(false);
          setCurrentQuestion(0);
          if (questions.length > 0) {
            setGameState('PLAYING');
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  const startGame = (options) => {
    let numQuestions = 'limit=' + options.mode || '';
    let difficulty = 'difficulty=' + options.difficulty || '';
    let query = 'https://the-trivia-api.com/v2/questions?' + numQuestions + '&' + difficulty;
    getQuestions(query);
  };

  const resetGame = () => {
    setScore(0);
    setQuestions([]);
    setCurrentQuestion(null);
    setGameState('WELCOME');
  };

  const handleScore = () => {
    setScore((prevScore) => {
      return prevScore + 1;
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      setGameState('END');
    } else {
      setCurrentQuestion((prevQuestion) => {
        return prevQuestion + 1;
      });
    }
  };

  return (
    <TriviaContext.Provider
      value={{
        questions: questions,
        currentQuestion: currentQuestion,
        gameState: gameState,
        score: score,
        isLoading: isLoading,
        onStartGame: startGame,
        onResetGame: resetGame,
        onNextQuestion: handleNextQuestion,
        onScore: handleScore,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
};

export default TriviaContext;
