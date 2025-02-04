import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  // Aggiorna l'ora ogni secondo
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Pulisce l'intervallo quando il componente è smontato
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Current Time: {time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
