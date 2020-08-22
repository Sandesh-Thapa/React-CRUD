import React, { Component } from 'react'
import Edit from './Edit'
import {Table, Button} from 'semantic-ui-react'

export default class View extends Component {
    handleDelete = (id) => {
        this.props.onDelete(id)
    }
    render() {
        const {data} = this.props
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
                                        <Button content="Edit"></Button>
                                        <Button content="Delete" onClick={this.handleDelete.bind(this, user.id)}></Button>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        }
                    </Table.Body>
                </Table>
                <Edit />
            </div>
        )
    }
}
