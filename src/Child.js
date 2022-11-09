import React, { Component } from 'react'

export default class Child extends Component {
  
  render() {
    return (
    <div>
      <div>Child - {this.props.name}</div>
      <button onClick={() => this.props.out("from child")}>Submit</button>
    </div>
    )
  }
}
