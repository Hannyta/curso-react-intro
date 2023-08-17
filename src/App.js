import logo from './logo.png';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton'; 
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso Intro a React.js', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Tomar mate', completed: false },
]

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <TodoSearch />
      <TodoCounter  completed={defaultTodos.filter(todo => todo.completed).length} total={defaultTodos.length}/>

      <TodoList> 
        {defaultTodos.map( todo => (
          < TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
          />
        ))}

      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
