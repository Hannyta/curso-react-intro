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
  { text: 'Comer', completed: false },
]

function App() {
  return (
    <>

      <TodoCounter  completed={defaultTodos.filter(todo => todo.completed).length} total={defaultTodos.length}/>
      <TodoSearch />

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
