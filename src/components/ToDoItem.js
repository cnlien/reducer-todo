import React from 'react';
import {Card} from 'reactstrap';

export const TodoItem = (props) => {

  return (
    <Card className="todo-item" onClick={()=>props.handleClick(props.task)}>
      <h3>{props.task}</h3>
    </Card>
  )
}