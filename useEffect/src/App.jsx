import React from 'react';
import Counter from './components/Counter';
import Clock from './components/Clock';

const App = () => {
  return (
    <div>
      <h1>React Counter and Clock Example</h1>
      <Counter initialValue={0} incrementAmount={2} />
      <Clock />
    </div>
  );
};

export default App;
