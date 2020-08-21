import React, { Component } from 'react'
import {Modal, Button, Form} from "semantic-ui-react" 

export default class Add extends Component {
    state = {
        name: "",
        username: "",
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        const {name, username} = this.state
        return (
            <Modal trigger={<Button>Add New User</Button>}>
                <Modal.Header>Add New User</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Input name="name" label="Full Name" placeholder="Full Name" value={name} onChange={this.onInputChange}></Form.Input>
                        <Form.Input name="username" label="Username" placeholder="Username" value={username} onChange={this.onInputChange}></Form.Input>
                        <Button content="Add" type="submit"></Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}
