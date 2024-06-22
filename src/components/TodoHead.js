import React from 'react';
import styled from 'styled-components';
import { format, getDay } from 'date-fns';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead({todos}) {
    const today = format(new Date(), 'yyyy년 MM월 dd일');
    const dayFormat = () => {
        switch (getDay(new Date())) {
            case 0 : 
                return '일';
            case 1 : 
                return '월';
            case 2 :
                return '화';
            case 3 : 
                return '수';
            case 4 :
                return '목';
            case 5 :
                return '금';
            case 6 :
                return '토';
            default :
                return '';
        }
    }

    const noCheckTodoLength = todos.filter(todo => !todo.done).length;

    return (
        <TodoHeadBlock>
            <h1>{today}</h1>
            <div className="day">{dayFormat()}요일</div>
            <div className="tasks-left">할 일 {noCheckTodoLength}개 남음</div>
        </TodoHeadBlock>
    )

};

export default TodoHead;