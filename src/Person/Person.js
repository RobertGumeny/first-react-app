import React, { Component } from 'react'
import './Person.css'

export default class Person extends Component {

  render() {
    let team = this.props.team
    let teamDisplay = null;
    let buttons = null;
    if (team === 'Unassigned') {
      buttons = (
        <div className="teamButtons">
          <button onClick={this.props.redTeam}>Red Team</button>
          <button onClick={this.props.blueTeam}>Blue Team</button>
        </div>
      )
      teamDisplay = (
        <p>Team: {this.props.team}</p>
      )
    } else {
      buttons = null;
      teamDisplay = null;
    }
    return (
      <div className="Person">
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        {teamDisplay}
        {buttons}
      </div>
    )
  }
}