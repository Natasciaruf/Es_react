import React from 'react';
import Hello from './Hello';        
import { LanguageProvider } from './LanguageContext';  

function App() {
  return (
    <LanguageProvider>
      <div>
        <h1>Seleziona la lingua:</h1>
        <LanguageSelector />
        <Hello />
      </div>
    </LanguageProvider>
  );
}

// Componente per selezionare la lingua
function LanguageSelector() {
  const { changeLanguage } = React.useContext(LanguageContext);

  return (
    <select onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="it">Italiano</option>
      <option value="es">Español</option>
    </select>
  );
}

export default App;
