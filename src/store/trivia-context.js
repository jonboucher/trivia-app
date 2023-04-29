import React, { useState, useEffect } from 'react';

const TriviaContext = React.createContext({
  questions: [],
  currentQuestion: null,
});

export const TriviaContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = () => {
    const retrievedQuestions = fetch('https://the-trivia-api.com/v2/questions/')
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <TriviaContext.Provider
      value={{
        questions: questions,
        currentQuestion: currentQuestion,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
};

export default TriviaContext;
