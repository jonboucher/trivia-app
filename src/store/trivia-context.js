import React, { useState, useEffect } from 'react';

const TriviaContext = React.createContext({
  questions: [],
  currentQuestion: null,
  gameState: 'WELCOME',
});

export const TriviaContextProvider = ({ children }) => {
  const DUMMY_DATA = [
    {
      category: 'food_and_drink',
      id: '622a1c367cc59eab6f9502d3',
      correctAnswer: 'Vodka, Orange Juice, Galliano ',
      incorrectAnswers: [
        'Gin, Ginger Beer, Lemon Juice',
        'Rum, Tequila, Tabasco Sauce, Soda',
        'Champagne, Espresso, Mint',
      ],
      question: {
        text: 'What Are The Ingredients Of A Harvey Wallbanger Cocktail?',
      },
      tags: ['food_and_drink'],
      type: 'text_choice',
      difficulty: 'hard',
      regions: [],
      isNiche: false,
    },
    {
      category: 'music',
      id: '625063bce12f6dec240bdf7e',
      correctAnswer: '99 Luftballoons',
      incorrectAnswers: ['Bust a Move', 'Nothing Compares 2 U', "I'Ve Never Been to Me"],
      question: {
        text: 'What song did Nena have a hit with in 1984?',
      },
      tags: ['songs', 'one_hit_wonders', 'music'],
      type: 'text_choice',
      difficulty: 'medium',
      regions: [],
      isNiche: false,
    },
    {
      category: 'sport_and_leisure',
      id: '62417d7d0f96c4efe8d773cc',
      correctAnswer: 'Philadelphia Phillies',
      incorrectAnswers: ['Philadelphia Brewers', 'Philadelphia Crew', 'Philadelphia Orioles'],
      question: {
        text: 'Which of these is a baseball team based in Philadelphia?',
      },
      tags: ['usa', 'baseball', 'nbl', 'sport'],
      type: 'text_choice',
      difficulty: 'hard',
      regions: [],
      isNiche: false,
    },
    {
      category: 'film_and_tv',
      id: '62573f5c9da29df7b05f7397',
      correctAnswer: 'A boy and his little sister struggle to survive in Japan during World War II.',
      incorrectAnswers: [
        'POWs are forced to build a railway, not knowing that allies are planning to destroy it.',
        'An aspiring nun is sent to become a governess to the seven children of a widowed naval officer.',
        'Eddy has a week to pay back £500,000 after losing a poker game to a powerful local mobster.',
      ],
      question: {
        text: 'What is the plot of the movie Grave of the Fireflies?',
      },
      tags: ['film', 'film_and_tv'],
      type: 'text_choice',
      difficulty: 'hard',
      regions: [],
      isNiche: false,
    },
    {
      category: 'society_and_culture',
      id: '622a1c367cc59eab6f95030a',
      correctAnswer: 'Orson Welles',
      incorrectAnswers: ['Louis Figaro', 'Jack Thomas', 'Eugene Lamonde'],
      question: {
        text: "Whose radio production of War Of The World's caused panic in America in 1938?",
      },
      tags: ['society_and_culture'],
      type: 'text_choice',
      difficulty: 'hard',
      regions: [],
      isNiche: false,
    },
    {
      category: 'film_and_tv',
      id: '62573f1f9da29df7b05f7389',
      correctAnswer: "Explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      incorrectAnswers: [
        'An insurance representative lets a housewife seduce him into a scheme of insurance fraud and murder.',
        'An insane American general orders a bombing attack on the Soviet Union.',
        'An agent of the secret police, spying on a writer and his lover, finds himself becoming absorbed by their lives.',
      ],
      question: {
        text: 'What is the plot of the movie Interstellar?',
      },
      tags: ['film', 'film_and_tv'],
      type: 'text_choice',
      difficulty: 'medium',
      regions: [],
      isNiche: false,
    },
    {
      category: 'geography',
      id: '6233863262eaad73716a8cbc',
      correctAnswer: 'Paris ',
      incorrectAnswers: ['Madrid', 'Rome', 'Brussels'],
      question: {
        text: 'Where is Le Figaro published?',
      },
      tags: ['geography'],
      type: 'text_choice',
      difficulty: 'hard',
      regions: [],
      isNiche: false,
    },
    {
      category: 'arts_and_literature',
      id: '622a1c397cc59eab6f950f3d',
      correctAnswer: 'J. R. R. Tolkien',
      incorrectAnswers: ['G. K. Chesterton', 'Philip Pullman', 'C. S. Lewis'],
      question: {
        text: "Which author wrote 'The Return of the King'?",
      },
      tags: ['literature', 'fantasy', 'arts_and_literature'],
      type: 'text_choice',
      difficulty: 'medium',
      regions: [],
      isNiche: false,
    },
    {
      category: 'arts_and_literature',
      id: '622a1c347cc59eab6f94f9f5',
      correctAnswer: 'Leonardo da Vinci',
      incorrectAnswers: ['‎Salvador Dalí', 'Sandro Botticelli', 'Vincent van Gogh'],
      question: {
        text: 'Which artist painted "The Last Supper"',
      },
      tags: ['art', 'painting', 'arts_and_literature'],
      type: 'text_choice',
      difficulty: 'hard',
      regions: [],
      isNiche: false,
    },
    {
      category: 'geography',
      id: '625e9e52796f721e95543f4f',
      correctAnswer: 'Denmark',
      incorrectAnswers: ['Netherlands', 'Poland', 'Qatar'],
      question: {
        text: "Which country's flag fits the description of 'Red with a white cross that extends to the edges.'?",
      },
      tags: ['flags', 'geography'],
      type: 'text_choice',
      difficulty: 'medium',
      regions: [],
      isNiche: false,
    },
  ];
  const [questions, setQuestions] = useState(DUMMY_DATA);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameState, setGameState] = useState('WELCOME');

  useEffect(() => {
    //getQuestions();
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
        gameState: gameState,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
};

export default TriviaContext;
