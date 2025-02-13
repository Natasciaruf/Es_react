import React from 'react';
import Counter from './components/Counter';  // Importiamo il componente Counter
import FilteredList from './components/FilteredList';  // Importiamo il componente FilteredList

function App() {
  const users = [
    { id: 1, name: 'Mario', age: 25 },
    { id: 2, name: 'Luigi', age: 17 },
    { id: 3, name: 'Anna', age: 19 },
    { id: 4, name: 'Marco', age: 16 }
  ];

  return (
    <div>
      <h1>Benvenuti nell'app React</h1>

      {/* Usare il componente Counter che usa il custom hook useCounter */}
      <Counter />

      {/* Usare il componente FilteredList che mostra solo gli utenti con età > 18 */}
      <FilteredList list={users} />
    </div>
  );
}

export default App;
