import React, { useState, useEffect } from 'react';

const TriviaContext = React.createContext({
  questions: [],
  currentQuestion: null,
  gameState: 'WELCOME',
});

export const TriviaContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [gameState, setGameState] = useState('WELCOME');

  const getQuestions = (params = 'https://the-trivia-api.com/v2/questions/') => {
    setIsLoading(true);

    fetch(params)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
      })
      .finally(() => {
        setIsLoading(false);
        setCurrentQuestion(0);
        setGameState('PLAYING');
      });
  };

  const startGame = (options) => {
    let numQuestions = 'limit=' + options.mode || '';
    let difficulty = 'difficulty=' + options.difficulty || '';

    let query = 'https://the-trivia-api.com/v2/questions?' + numQuestions + '&' + difficulty;
    console.log(query);

    getQuestions(query);
  };

  return (
    <TriviaContext.Provider
      value={{
        questions: questions,
        currentQuestion: currentQuestion,
        gameState: gameState,
        onStartGame: startGame,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
};

export default TriviaContext;
