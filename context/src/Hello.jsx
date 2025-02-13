import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function Hello() {
  const { language } = useContext(LanguageContext);

  const messages = {
    en: 'Hello, World!',
    it: 'Ciao, Mondo!',
    es: '¡Hola, Mundo!',
  };

  return <h2>{messages[language]}</h2>;
}

export default Hello;
