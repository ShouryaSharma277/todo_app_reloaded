//ThemeToggle.js
import React from 'react';
import { ThemeContext } from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === 'dark' ? (
                <FontAwesomeIcon icon={faSun} onClick={() => {setTheme(theme === 'dark' ? 'light' : 'dark')}}/>
            ) : (
                <FontAwesomeIcon icon={faMoon} onClick={() => {setTheme(theme === 'light' ? 'dark': 'light')}}/>
                )}
        </div>
    );
};

