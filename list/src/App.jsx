import React from 'react';
import TodoList from './TodoList'; // Importiamo il componente TodoList

const App = () => {
  return (
    <div>
      <h1>My Todo Application</h1>
      {/* Renderizza il componente TodoList */}
      <TodoList />
    </div>
  );
};

export default App;
