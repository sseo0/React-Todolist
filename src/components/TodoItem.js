import React, {useState, useRef} from 'react';
import styled, {css} from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { BsPencilSquare } from 'react-icons/bs';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;


function TodoItem({id, done, text, modify, onRemove, onCheck, onModify}) {

    const [input, setInput] = useState(text);
    const inputModify = useRef();

    const onChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={()=> onCheck(id)}>{done && <MdDone/>}</CheckCircle> {/* 체크박스 */}
            <Text done={done} onDoubleClick={() => onModify(id)}>
                {!modify ? text : <input autoFocus ref={inputModify} placeholder='수정' value={input} onChange={onChange} onKeyDown={e => e.key === 'Enter' && onModify(id, input)} onBlur={e => {e.currentTarget === e.target && onModify(id)}}></input>}
            </Text> {/* 할일 text*/}
            <Remove onClick={() => onModify(id)}>
                <BsPencilSquare />
            </Remove>
            <Remove onClick={() => onRemove(id)}> {/* 지우기 버튼 */}
                <MdDelete/> {/* 휴지통 아이콘 */}
            </Remove>
        </TodoItemBlock>
    )
}

export default TodoItem;