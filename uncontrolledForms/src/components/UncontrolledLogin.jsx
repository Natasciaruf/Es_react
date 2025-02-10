import React, { createRef } from 'react';

const UncontrolledLogin = ({ onLogin }) => {
  // Creiamo i riferimenti per ogni campo di input
  const usernameRef = createRef();
  const passwordRef = createRef();
  const rememberRef = createRef();

  // Funzione per gestire l'invio con l'evento 'onSubmit' e DOM API
  const handleSubmit = (e) => {
    e.preventDefault(); // Impedisce il comportamento predefinito del form

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const remember = rememberRef.current.checked;

    console.log('DOM API values:');
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember me:', remember);

    // Chiamata alla funzione onLogin (passata come prop) con i valori dei campi
    onLogin({ username, password, remember });
  };

  // Funzione per gestire il login utilizzando la FormData API
  const handleFormDataLogin = (e) => {
    e.preventDefault(); // Impedisce il comportamento predefinito del form

    const formData = new FormData(e.target); // Usa FormData per raccogliere i dati
    console.log('FormData API values:');
    console.log('Username:', formData.get('username'));
    console.log('Password:', formData.get('password'));
    console.log('Remember me:', formData.get('remember'));

    // Chiamata alla funzione onLogin (passata come prop) con i dati FormData
    onLogin({
      username: formData.get('username'),
      password: formData.get('password'),
      remember: formData.get('remember') === 'on', // FormData restituisce "on" per i checkbox selezionati
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            ref={usernameRef}
            name="username"
            placeholder="Enter username"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            ref={passwordRef}
            name="password"
            placeholder="Enter password"
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              ref={rememberRef}
              name="remember"
            />
            Remember me
          </label>
        </div>
        <button type="submit">Login (DOM API)</button>
      </form>

      <form onSubmit={handleFormDataLogin}>
        <button type="submit">Login (FormData API)</button>
      </form>
    </div>
  );
};

export default UncontrolledLogin;
