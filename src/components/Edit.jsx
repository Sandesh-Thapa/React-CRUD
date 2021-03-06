import React, { Component } from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'

export default class Edit extends Component {
    state = {
        id: "",
        name: "",
        username: "",
    }

    componentDidUpdate(prevProps){
        //console.log(prevProps)
        if(prevProps.id !== this.props.id){
            const user = this.props.getUserById(this.props.id)
            this.setState({
                id: this.props.id,
                name: user.name,
                username: user.username,
            })
        }
    }


    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onEdit(this.props.id, this.state)
        this.props.onClose()
    }

    render() {
        const {name, username} = this.state
        const {isOpen} = this.props
        return (
                <Modal open={isOpen} onClose={this.props.onClose}>
                    <Modal.Header>Edit User</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Input label="Full Name" value={name} name="name" onChange={this.handleChange}></Form.Input>
                            <Form.Input label="Username" value={username} name="username" onChange={this.handleChange}></Form.Input>
                            <Button type="submit" content="Edit"></Button>
                        </Form>
                    </Modal.Content>
                </Modal>
            )
    }
}
