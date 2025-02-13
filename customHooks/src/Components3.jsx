import React, { useState } from 'react';
import useGithubUser from './useGithubUser';

function GithubUserSearch() {
  const [username, setUsername] = useState('');
  const { user, loading, error } = useGithubUser(username);

  const handleSearch = (e) => {
    e.preventDefault();
    setUsername(e.target.elements.username.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="username" placeholder="Nome utente GitHub" />
        <button type="submit">Cerca</button>
      </form>

      {loading && <p>Caricamento...</p>}
      {error && <p>{error}</p>}
      {user && (
        <div>
          <h3>{user.name}</h3>
          <p>{user.login}</p>
          <img src={user.avatar_url} alt={user.login} width="100" />
        </div>
      )}
    </div>
  );
}

export default GithubUserSearch;
