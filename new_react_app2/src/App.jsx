import React, { useState } from 'react';
import './App.css';

// Componente che rappresenta un singolo messaggio
const Message = ({ message }) => {
  return (
    <div className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}>
      <p>{message.text}</p>
    </div>
  );
};

// Componente principale dell'app
const App = () => {
  // Stato che gestisce i messaggi della chat
  const [messages, setMessages] = useState([
    { text: 'Ciao, come posso aiutarti?', sender: 'bot' }, // Messaggio iniziale del bot
  ]);
  const [newMessage, setNewMessage] = useState(''); // Stato per il messaggio appena scritto

  // Funzione che gestisce l'invio del messaggio
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return; // Non inviare se il messaggio è vuoto

    // Crea il messaggio dell'utente
    const userMessage = { text: newMessage, sender: 'user' };
    setMessages([...messages, userMessage]); // Aggiungi il messaggio dell'utente alla lista dei messaggi

    // Simula la risposta del bot
    setTimeout(() => {
      const botMessage = { text: 'Risposta automatica dal bot', sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage]); // Aggiungi la risposta del bot
    }, 1000);

    setNewMessage(''); // Pulisce il campo di input
  };

  return (
    <div className="chat-container">
      <div className="message-list">
        {/* Mappa tutti i messaggi e li passa al componente Message */}
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </div>
      <div className="input-container">
        {/* Campo di input per il messaggio */}
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)} // Gestisce il cambiamento del messaggio
          placeholder="Scrivi un messaggio..."
        />
        {/* Pulsante per inviare il messaggio */}
        <button onClick={handleSendMessage}>Invia</button>
      </div>
    </div>
  );
};

export default App;
