import React from 'react';
import Color from './Color';

const Colors = ({ colors }) => {
  return (
    <ul>
      {/* Mappa l'array di colori e per ciascun oggetto crea un componente Color */}
      {colors.map(color => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
};

export default Colors;
