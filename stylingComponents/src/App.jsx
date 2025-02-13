import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 

function App() {
  return (
    <div>
      <Welcome />
      <CounterDisplay />
      <Login />
    </div>
  );
}

function Welcome() {
  return <div className="welcome">Benvenuto nel sito!</div>;
}

function CounterDisplay() {
  return <div style={{ fontSize: '20px', color: 'blue' }}>Contatore: 0</div>;
}

function Login() {
  const [password, setPassword] = React.useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Inserisci la password"
      />
      <button
        style={{
          backgroundColor: password.length < 8 ? 'red' : 'green', // Cambia colore in base alla lunghezza della password
        }}
      >
        Login
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
