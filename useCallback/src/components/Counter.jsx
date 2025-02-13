import React from 'react';
import useCounter from '../hooks/useCounter';  // Importiamo il custom hook useCounter

function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);  // Usando useCounter con valore iniziale 0

  return (
    <div>
      <h2>Contatore: {count}</h2>
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
      <button onClick={reset}>Resetta</button>
    </div>
  );
}

export default Counter;
