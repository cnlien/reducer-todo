import React from 'react';
import './App.scss';

import { Container } from 'reactstrap';

import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <Container>
        <h1>To Do List</h1>
        <ToDoForm />
        <ToDoList />
        
      </Container>
    </div>
  );
}

export default App;
