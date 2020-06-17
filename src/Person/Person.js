import React, { Component } from 'react'
import './Person.css'

export default class Person extends Component {
  render() {
    return (
      <div className="Person">
        <p>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>Team: {this.props.team}</p>
        <div className="teamButtons">
          <button>Red Team</button>
          <button>Blue Team</button>
        </div>
      </div>
    )
  }
}