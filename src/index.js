import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Components
import { Background } from "./components/Background";
import { ThemeProvider } from "./components/ThemeContext";

ReactDOM.render(
  <ThemeProvider>
	<Background>
	  <App />
	</Background>
  </ThemeProvider>
, document.getElementById('root')
);
