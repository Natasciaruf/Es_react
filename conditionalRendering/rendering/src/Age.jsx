import React from 'react';

function Age({ age }) {
  if (age > 18 && age < 65) {
    return <p>Age: {age}</p>;
  }

  return null;
}

export default Age;
