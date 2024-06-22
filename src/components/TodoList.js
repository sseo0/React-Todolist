import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;


function TodoList({todos, onRemove, onCheck, onModify}) {
    return (
    <TodoListBlock>
        {
            todos.map((todo, index) => (
                <TodoItem key={index} id={todo.id} text={todo.text} done={todo.done} modify={todo.modify} onRemove={(id) => onRemove(id)} onCheck={(id) => onCheck(id)} onModify={(id, text) => onModify(id, text)}></TodoItem>
            ))
        }
        {/* <TodoItem text="프로젝트 생성하기" done={true}></TodoItem>
        <TodoItem text="데드리프트 100키로 들기" done={false}></TodoItem>
        <TodoItem text="닭가슴살 먹기" done={true}></TodoItem>
        <TodoItem text="데이식스 노래듣기" done={true}></TodoItem> */}
    </TodoListBlock>
    )
}

export default TodoList;