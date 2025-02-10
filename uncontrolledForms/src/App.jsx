import React from 'react';
import UncontrolledLogin from './UncontrolledLogin';

const App = () => {
  const handleLogin = (loginData) => {
    console.log('Login Data:', loginData);
    // Puoi inviare i dati a un server o fare altro con i dati
  };

  return (
    <div>
      <h1>Uncontrolled Login Example</h1>
      <UncontrolledLogin onLogin={handleLogin} />
    </div>
  );
};

export default App;
