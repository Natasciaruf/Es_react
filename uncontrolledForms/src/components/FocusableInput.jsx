import React, { useEffect, useRef } from 'react';

const FocusableInput = () => {
  // Crea un ref per il campo di input
  const inputRef = useRef(null);

  // Utilizza useEffect per focalizzare l'input appena montato
  useEffect(() => {
    // Focalizza l'input non appena il componente è montato
    inputRef.current.focus();
  }, []); // L'effetto viene eseguito solo al primo rendering

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me on render" />
    </div>
  );
};

export default FocusableInput;
