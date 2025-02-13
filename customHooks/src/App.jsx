import React from 'react';
import { SWRConfig } from 'swr';
import useGithubUser from './hooks/useGithubUser'; // Importa il custom hook
import ShowGithubUser from './ShowGithubUser'; // Importa il componente che utilizza il custom hook

function App() {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => fetch(url).then((res) => res.json()), // Imposta il fetcher predefinito
      }}
    >
      <div>
        <h1>GitHub User Info</h1>
        <ShowGithubUser username="octocat" />
      </div>
    </SWRConfig>
  );
}

export default App;
