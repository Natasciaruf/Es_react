import React from 'react';

const MouseClicker = () => {

  // Funzione che gestisce il click del primo pulsante
  const handleButtonClick = (event) => {
    console.log(event.target.name); // Stampa l'attributo name del pulsante
  };

  // Funzione che gestisce il click sull'immagine
  const handleImageClick = (event) => {
    console.log(event.target.src); // Stampa l'URL dell'immagine
    event.stopPropagation(); // Impedisce che l'evento raggiunga il pulsante
  };

  return (
    <div>
      {/* Primo pulsante con name="one" */}
      <button name="one" onClick={handleButtonClick}>
        Button One
      </button>

      {/* Secondo pulsante con name="two" e un'immagine dentro */}
      <button name="two" onClick={handleButtonClick}>
        <img 
          src="https://via.placeholder.com/150" 
          alt="Placeholder" 
          onClick={handleImageClick} // Gestisce il click sull'immagine
        />
      </button>
    </div>
  );
};

export default MouseClicker;
