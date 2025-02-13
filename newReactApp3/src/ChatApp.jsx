import React, { useState, useRef } from 'react';

function ChatApp() {
  // Stato per i messaggi
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  
  // Riferimento per scrollare l'area dei messaggi
  const messagesEndRef = useRef(null);

  // Funzione per inviare un messaggio
  const sendMessage = () => {
    if (newMessage.trim() === '') {
      return;  // Non inviare messaggi vuoti o con spazi
    }

    setMessages((prevMessages) => [...prevMessages, newMessage.trim()]);
    setNewMessage('');  // Svuota il campo di input

    // Scroll automatico verso il basso dopo l'invio
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Funzione per gestire la pressione del tasto "Enter"
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {/* Visualizziamo i messaggi */}
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
        
        {/* Riferimento per scrollare verso il basso */}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Scrivi un messaggio..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatApp;
