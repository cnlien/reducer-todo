import React from 'react';

// STYLES
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row } from 'reactstrap'
// COMPONENTS
import ToDoItem from './components/ToDoItem';
import ToDoForm from './components/ToDoForm';


function App() {
  return (
    <div className="App">
      <Container>
        
        <ToDoForm />
        
        <Row>
          <ToDoItem />
        </Row>
      </Container>
    </div>
  );
}

export default App;
