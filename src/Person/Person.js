import React, { Component } from 'react'

export default class Person extends Component {
  render() {
    return (
      <div>
        <p>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
      </div>
    )
  }
}