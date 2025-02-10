import React from 'react';
import Colors from './Colors'; 

const App = () => {
  const colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
  ];

  return (
    <div>
      <h1>Color List</h1>
      <Colors colors={colors} /> 
    </div>
  );
};

export default App;
