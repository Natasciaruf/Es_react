import React, { useState, useEffect } from 'react';

function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.github.com/users/${Natasciaruf}`);
        if (!response.ok) {
          throw new Error('Utente non trovato');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {userData && (
        <>
          <h3>{userData.name}</h3>
          <p>Username: {userData.login}</p>
          <img src={userData.avatar_url} alt={userData.login} width={100} />
        </>
      )}
    </div>
  );
}

export default GithubUser;
