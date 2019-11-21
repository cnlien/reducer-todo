import React from 'react';
import './App.scss';

import { Container } from 'reactstrap';

import ToDoForm from './components/ToDoForm';
// import { todoReducer, initialState } from './reducers';

function App() {
  // const [state, dispatch] = useReducer (todoReducer, initialState)
  return (
    <div className="App">
      <Container>
        <h1>To Do List</h1>
        <ToDoForm />
      </Container>
    </div>
  );
}

export default App;
