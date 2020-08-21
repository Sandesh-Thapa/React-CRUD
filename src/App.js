import React, { Component } from 'react'
import Add from './components/Add'
import View from  './components/View'

import {Container, Input} from 'semantic-ui-react'


export default class App extends Component {
  state = {
    users:[
      { id: 1, name: "Sandesh Thapa", username: "sandeshthapa"},
      { id: 2, name: "John Doe", username: "johndoe"},
      { id: 3, name: "Ram Bahadur", username: "rambah"},
      { id: 4, name: "Sita Sita", username: "sitasita"},
    ]
  }
  handleChange = (e) =>{
    console.log(e.target.value)
  }
  render() {
    const {users} = this.state
    return (
      <Container>
        <Add />
        <Input icon="search" placeholder="search" onChange={this.handleChange}></Input>
        <View data={users} />
      </Container>
    )
  }
}
