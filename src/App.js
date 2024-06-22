import React, {useState, useRef} from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

function App() {
  const GlobalStyle = createGlobalStyle`
    body {
      background: #e9ecef;
    }
  `

  const [todos, setTodos] = useState([
    {
      id : 0,
      text : '프로젝트 생성하기',
      done : false,
      modify : false,
    },
    {
      id : 1,
      text : '데드리프트 100kg 들기',
      done : false,
      modify : false,
    },
    {
      id : 2,
      text : '닭가슴살 먹기',
      done : false,
      modify : false,
    },
    {
      id : 3,
      text : '데이식스 노래 듣기',
      done : false,
      modify : false,
    }
  ]);

  const nextId = useRef(todos.length);

  const onCreate = (text) => {
    const todo = {
      id : nextId,
      text : text,
      done : false,
      modify : false,
    }

    setTodos(todos.concat(todo));

    nextId.current += 1;

  }

  const onRemove = (id) => {
    const todo = todos.filter(todo => todo.id !== id);
    setTodos(todo);
  };

  const onCheck = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? {...todo, done : !todo.done} : todo
    )))
  }

  const onModify = (id, text) => {
    setTodos(todos.map(todo => (
      todo.id === id ? text ? {...todo, ...{text : text, modify : false}} : {...todo, modify : !todo.modify} : todo
    )))
  }

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todos={todos}></TodoHead>
        <TodoList todos={todos} onRemove={(id) => onRemove(id)} onCheck={(id)=> onCheck(id)} onModify={(id,text)=> onModify(id,text)}></TodoList>
        <TodoCreate onCreate={onCreate}></TodoCreate>
      </TodoTemplate>
    </>
  );
}

export default App;
