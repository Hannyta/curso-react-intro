import logo from './logo.png';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton'; 
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Terminar curso de intro a React.js', completed: false },
  { text: 'Llorar con el código', completed: true },
  { text: 'Dormir menos horas', completed: false },
]

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <section className="Home">
    
        <TodoSearch />
        <TodoCounter  completed={defaultTodos.filter(todo => todo.completed).length} total={defaultTodos.length}/>

        <div className='TodoList'>
          <TodoList> 
            {defaultTodos.map( todo => (
              < TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              />
              ))}
          </TodoList>
        </div>

        <CreateTodoButton />

      </section>
    </>
  );
}

export default App;
