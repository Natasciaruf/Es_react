import React, { useEffect, useRef } from 'react';

const MountEffectComponent = () => {
  // Crea un ref per tenere traccia del montaggio del componente
  const isMounted = useRef(false);

  // Utilizziamo useEffect per stampare un messaggio solo al primo montaggio
  useEffect(() => {
    // Se il componente non è ancora stato montato, eseguiamo l'effetto
    if (!isMounted.current) {
      console.log('Componente montato per la prima volta!');
      isMounted.current = true; // Impostiamo il flag a true
    }
  }, []); // L'effetto viene eseguito solo al primo montaggio

  return (
    <div>
      <h2>Componente con effetto al montaggio</h2>
    </div>
  );
};

export default MountEffectComponent;
