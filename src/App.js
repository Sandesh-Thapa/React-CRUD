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
    ],
    query: '',
    results: [],
  }

  handleChange = (e) =>{
    const value = e.target.value
    const {users} = this.state
    this.setState({ query: value })
    const results = users.filter(user => {
      const regex = new RegExp(value, "gi")
      return user.name.match(regex)
    })
    //console.log(results)
    this.setState({ results })
  }

  onFormSubmit = (user) =>{
    const {users} = this.state
    this.setState({
      users:[...users, user]
    })
  }

  onUserDelete = (id) => {
    const {users} = this.state
    this.setState({
      users: users.filter(user => user.id !== id),
    }) 
  }

  render() {
    const {users, results, query} = this.state
    const data = results.length === 0 && !query ? users : results
    return (
      <Container>
        <Add onSubmit={this.onFormSubmit} />
        <Input icon="search" placeholder="search" onChange={this.handleChange}></Input>
        <View data={data} onDelete={this.onUserDelete}/>
      </Container>
    )
  }
}
