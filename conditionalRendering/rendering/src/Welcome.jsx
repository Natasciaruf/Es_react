import React from 'react';
import Age from './Age';
import Message from './Message';

function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome, {name}!</p>
      <Message age={age} /> 
      
     
      {age > 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && name === "John" && <Age age={age} />}
    </div>
  );
}

export default Welcome;
