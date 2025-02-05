import React, { useState } from 'react';
import Welcome from './Welcome';

const InteractiveWelcome = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <Welcome name={name} />
    </div>
  );
};

export default InteractiveWelcome;
