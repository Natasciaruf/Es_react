import React, {useState} from "react";
import CounterDisplay from './CounterDisplay'


function Counter({ initialValue, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + incrementAmount);
  };

  const decrement = () => {
    setCounter(counter - incrementAmount);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return (
    <div>
      <h1>Counter App</h1>
    
      <CounterDisplay count={counter} />

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
