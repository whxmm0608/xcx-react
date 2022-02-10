import React, { Component } from 'react'

export class FileName extends Component {

  
  state = {
    userData: null,
    mockData: null,
  }

  async getUsers () {
    let result = await this.$axios({
      method: 'get',
      url: 'http://jsonplaceholder.typicode.com/users',
    });
    const { data } = result;
    this.setState({
      userData: data
    })
  }

  // 跨域了
  async getMock () {
    let result = await this.$axios({
      method: 'get',
      url: 'http://localhost:3000/api1/students',
    });
    const { data } = result;
    this.setState({
      mockData: data
    })
  }

  componentDidMount () {
    this.getUsers();
    this.getMock();
  }
  componentWillUnmount () {
  }

  render () {
    console.log('this', this);
    const { userData } = this.state;
    if (userData) {
      return userData.map(item => <div key={item.id}>{item.email}</div>)
    }
    return <div></div>
  }
}

export default FileName