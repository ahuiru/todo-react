import React, { useState } from 'react';
import './App.css';
import { InputForm } from './components/InputForm';
import { Title } from './components/Title';
import { TodoList } from './components/TodoList';


function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="body">
      <Title />
      <InputForm todoList={todoList} setTodoList={setTodoList}/>
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
