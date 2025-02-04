import React, { useState, useEffect } from 'react';

const Counter = ({ initialValue = 0, incrementAmount = 1 }) => {
  const [counter, setCounter] = useState(initialValue);

  // Effetto collaterale per stampare il contatore nel console ogni volta che cambia
  useEffect(() => {
    console.log(`Counter value: ${counter}`);
  }, [counter]);  // Dipende da 'counter', quindi si attiva quando cambia

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + incrementAmount);
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default Counter;
