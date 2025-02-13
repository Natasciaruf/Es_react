import React from 'react';
import useFilteredList from '../hooks/useFilteredList'; // Importiamo il custom hook useFilteredList

function FilteredList({ list }) {
  const filteredList = useFilteredList(list);  // Usiamo il custom hook per ottenere la lista filtrata

  return (
    <div>
      <h2>Lista utenti (età 18):</h2>
      <ul>
        {filteredList.map(item => (
          <li key={item.id}>
            {item.name}, {item.age} anni
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
