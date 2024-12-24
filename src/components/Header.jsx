import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className={`p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Almila Su</h1>
        <div className="flex gap-4">
          <button onClick={toggleTheme} className="px-4 py-2 border rounded">
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button onClick={toggleLanguage} className="px-4 py-2 border rounded">
            {language === 'en' ? 'Türkçe' : 'English'}
          </button>
        </div>
      </div>
    </header>
  );
}
