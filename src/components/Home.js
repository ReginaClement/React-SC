import React, { Component } from 'react'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: 'tony',
      users: [], 
      count: 0,
      tempUsers: []
    }
    console.log('inside constructor');
  }

  static getDrivedStateFromProps(props, state) {
    console.log('inside getDrivedStateFromProps');
    return {name: 'alex'}
  }

  shouldComponentUpdate() {
    return true;
  }

  add = () => {
    this.setState({count: this.state.count+1})
  }

  render() {
    console.log('inside render');
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.add}>Add</button>
      </div>
    )
  }

  // getSnapshotBeforeUpdate(props, state) {
  //   console.log('getSnapshotBeforeUpdate', state, props);
  //   this.setState({tempUsers: state.users});
  // }

  // async componentDidUpdate() {
  //   console.log('componentDidUpdate');
  //   // const data = await fetch('https://jsonplaceholder.typicode.com/posts/'+this.state.count);
  //   // data.json().then(res => {
  //   //   //this.setState({users: res});
  //   // })
  // }

  async componentDidMount() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    data.json().then(res => {
      this.setState({users: res});
    })
  }

  componentWillUnmount() {
    console.log('componentWillUnMount');
  }

}

