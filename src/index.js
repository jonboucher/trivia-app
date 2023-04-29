import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { TriviaContextProvider } from './store/trivia-context';

import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TriviaContextProvider>
    <App />
  </TriviaContextProvider>
);
