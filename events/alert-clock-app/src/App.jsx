import React from 'react';
import AlertClock from './AlertClock';

function App() {
  const handleAlert = () => {
    alert(`Current time: ${new Date().toLocaleTimeString()}`);
  };

  return (
    <div>
      <h1>React AlertClock</h1>
      <AlertClock showAlert={handleAlert} />
    </div>
  );
}

export default App;
