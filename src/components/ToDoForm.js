import React, {useReducer, useState} from 'react';
import { Form, Input, Button, Card, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.scss';

import { todoReducer, initialState } from '../reducers';

import { TodoItem } from './ToDoItem';

const ToDoForm = () => {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todoItem, setTodoItem] = useState();

  const handleChange = e => {
    setTodoItem(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setTodoItem(e.target.value);
  }

  const handleClick = task => {
    dispatch({ type: "MARK_COMPLETE", id: task});
    console.log(task);
    console.log("Clicked", task);
  }

  return(
    <Container>
      <Card className="todo-form">
        <Form onSubmit={handleSubmit}>
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

      <Card className="todo-list">
        {state.todos.map(task => {
          return(
            <TodoItem
              key = {task.id}
              task = {task.item}
              handleClick={handleClick}
            />
          );
        })}
      </Card>
    </Container>
  );
}

export default ToDoForm