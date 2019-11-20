import React, {useReducer, useState} from 'react';
import { Form, Input, Button, Card } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.scss';

import {todoReducer, initialState} from '../reducers';


const ToDoForm = (props) => {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todoItem, setTodoItem] = useState();

  console.log("This is state", state)

  const handleChange = e => {
    setTodoItem(e.target.value);
  }

  return(
    <Card className="todo-form">
      <Form>
        <Input
          placeholder='Add New Task'
          className='add-todo'
          type='text'
          name='todoItem'
          value={todoItem}
          onChange={handleChange}
        />

        <Button
          onClick ={()=>{
            dispatch({ type: "ADD_TASK", payload: todoItem});
            setTodoItem("");
          }}
        >Add Task</Button>
      </Form>
    </Card>
  );
}

export default ToDoForm