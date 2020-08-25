import React, { Component } from 'react'
import Edit from './Edit'
import {Table, Button} from 'semantic-ui-react'

export default class View extends Component {

    state = {
        isOpen : false,
        id: '',
    }

    handleEdit = (id) => {
        this.setState({isOpen:true, id:id})
    }

    handleDelete = (id) => {
        this.props.onDelete(id)
    }

    handleClose = () => {
        this.setState({isOpen:false})
    }
    render() {
        const {data, getUserById, onEdit} = this.props
        const {isOpen, id} = this.state
        return (
            <div>
                <Table sortable celled fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Full Name</Table.HeaderCell>
                            <Table.HeaderCell>Username</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            data.map(user => 
                                <Table.Row key={user.id}>
                                    <Table.Cell>{user.name}</Table.Cell>
                                    <Table.Cell>{user.username}</Table.Cell>
                                    <Table.Cell>
                                        <Button content="Edit" onClick={this.handleEdit.bind(this, user.id)}></Button>
                                        <Button content="Delete" onClick={this.handleDelete.bind(this, user.id)}></Button>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        }
                    </Table.Body>
                </Table>
                <Edit isOpen={isOpen} onClose={this.handleClose} id={id} getUserById={getUserById} onEdit={onEdit} />
            </div>
        )
    }
}
