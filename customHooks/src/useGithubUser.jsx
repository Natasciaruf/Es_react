import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { SWRConfig } from 'swr';

// Funzione di fetcher di default
const fetcher = (url) => fetch(url).then((res) => res.json());

function useGithubUser(username) {
  // Se il nome utente è null, non effettuare alcuna richiesta
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  // Restituisci lo stato, l'errore e una funzione per forzare il refetch dei dati
  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
    refetch: mutate, // Funzione per forzare il refetch
  };
}

export default useGithubUser;
