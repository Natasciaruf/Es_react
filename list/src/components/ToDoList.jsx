import React, { useState } from 'react';

const TodoList = () => {
  // Stato per la lista dei todo
  const [todos, setTodos] = useState([]);
  // Stato per il valore dell'input
  const [newTodo, setNewTodo] = useState('');

  // Funzione per aggiungere un nuovo todo
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo(''); // Resetta l'input dopo l'aggiunta
    }
  };

  // Funzione per resettare la lista dei todo
  const resetTodos = () => {
    setTodos([]);
  };

  // Funzione per rimuovere un todo dalla lista
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo List</h2>

      {/* Lista dei todo */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} 
            {/* Bottone per rimuovere il todo */}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Input e bottone per aggiungere un nuovo todo */}
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>

      {/* Bottone per resettare la lista */}
      <button onClick={resetTodos}>Reset</button>
    </div>
  );
};

export default TodoList;
