import React, { useState } from 'react';
import GithubUser from './GithubUser';

function GithubUsers() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (username.trim() !== '') {
      setUsers([username]);  // Aggiungi il nuovo username alla lista
      setUsername('');  // Pulisce il campo di ricerca
    }
  };

  return (
    <div>
      <h2>Ricerca Utenti GitHub</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Inserisci il nome utente"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Cerca</button>
      </form>

      <div>
        {users.length > 0 ? (
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                <GithubUser username={user} />
              </li>
            ))}
          </ul>
        ) : (
          <p>Inserisci un nome utente e premi "Cerca".</p>
        )}
      </div>
    </div>
  );
}

export default GithubUsers;
