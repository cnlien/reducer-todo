import React from 'react'
import { Input, Button, Form, Row } from 'reactstrap'

class ToDoForm extends React.Component {

    render() {
        return(
            <Form>
                <Row>
                    <Input placeholder="Add Item"></Input>
                    <Button>Add Item</Button>
                </Row>
            </Form>
        )
    }
}

export default ToDoForm;