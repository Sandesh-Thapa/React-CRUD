import React, { Component } from 'react'
import Add from './components/Add'
import View from  './components/View'
import {Container, Input} from 'semantic-ui-react'
import users from './api/users'

export default class App extends Component {
  state = {
    users:[],
    query: '',
    results: [],
  }

  componentDidMount(){
    this.fetchdata()
  }

  fetchdata = async () => {
    const Response = await users.get('/users')
    this.setState({users: Response.data})
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

  onFormSubmit = async (user) =>{
    // const {users} = this.state
    // this.setState({
    //   users:[...users, user]
    // })
    await users.post('/users', user)
    this.fetchdata()
  }

  onUserDelete = async (id) => {
    // const {users} = this.state
    // this.setState({
    //   users: users.filter(user => user.id !== id),
    // })
    await users.delete(`/users/${id}`)
    this.fetchdata()
  }

  getUserById = (id) => {
    const {users} = this.state
    const user = users.filter(user => user.id === id)
    return user[0]
  }

  onEdit = async (id, updatedUser) => {
    // const {users} = this.state
    // this.setState({
    //   users: users.map(user => user.id === id ? updatedUser : user)
    // })
    await users.patch(`users/${id}`, updatedUser)
    this.fetchdata()
  }

  render() {
    const {users, results, query} = this.state
    const data = results.length === 0 && !query ? users : results
    return (
      <Container>
        <Add onSubmit={this.onFormSubmit} />
        <Input icon="search" placeholder="search" onChange={this.handleChange}></Input>
        <View data={data} onDelete={this.onUserDelete} getUserById={this.getUserById} onEdit={this.onEdit}/>
      </Container>
    )
  }
}
