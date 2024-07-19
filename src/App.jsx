import React from 'react';
import AppName from './component/AppName';
import AddTodo from './component/AddTodo';
import TodoItemss from './component/TodoItems';
import { useState } from 'react';
import ErrorMessage from './component/ErrorTodo';

import './App.css';

function App() {

  const initialTodoItems = [

  ]
  const [todoItems, setTodoItem] = useState([]);
  const handleTodoItems = (itemName, itemDate) => {

    const newTodoItems = [...todoItems, {
      name: itemName,
      dueDate: itemDate
    }];

    setTodoItem(newTodoItems);
  };

  const handleDeleteTodoItems = (itemName) => {
    const newTodoItems = todoItems.filter((items) => items.name !== itemName);
    setTodoItem(newTodoItems);
  }

  return (
    <center className='todo-container'>


      <AppName></AppName>
      <AddTodo onAddItem={handleTodoItems} />

      {todoItems.length === 0 && <ErrorMessage></ErrorMessage>}
      <TodoItemss EachItem={todoItems} onDelete={handleDeleteTodoItems}></TodoItemss>
    </center>
  );
}

export default App;
