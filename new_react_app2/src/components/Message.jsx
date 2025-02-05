import React, { useState } from 'react';
import './App.css'; 

const Message = ({ message }) => {
  return (
    <div className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}>
      <p>{message.text}</p>
    </div>
  );
};

const App = () => {
  const [messages, setMessages] = useState([
    { text: 'Ciao, come posso aiutarti?', sender: 'bot' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const userMessage = { text: newMessage, sender: 'user' };
    setMessages([...messages, userMessage]);

    // Simula una risposta del bot
    setTimeout(() => {
      const botMessage = { text: 'Risposta automatica dal bot', sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 1000);

    setNewMessage('');
  };

  return (
    <div className="chat-container">
      <div className="message-list">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Scrivi un messaggio..."
        />
        <button onClick={handleSendMessage}>Invia</button>
      </div>
    </div>
  );
};

export default App;
