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
  { text: 'Comer saludable', completed: true },
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <section className="Home">
    
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoCounter  
          completed={completedTodos} 
          total={totalTodos}
        />

        <div className='TodoList'>
          <TodoList> 
            {searchedTodos.map( todo => (
              < TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
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
