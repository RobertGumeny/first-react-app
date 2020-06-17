import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    people: [
      { id: 0, name: 'Steven', age: 35, team: 'Unassigned' },
      { id: 1, name: 'Robert', age: 32, team: 'Unassigned' },
      { id: 2, name: 'Alison', age: 24, team: 'Unassigned' },
      { id: 3, name: 'Harvey', age: 42, team: 'Unassigned' },
      { id: 4, name: 'Stephanie', age: 28, team: 'Unassigned' },
      { id: 5, name: 'Susan', age: 37, team: 'Unassigned' }
    ]
  }

  assignBlueTeamHandler = (id) => {
    let people = this.state.people
    people.forEach(p => {
      if (p.id === id) {
        p.team = 'Blue'
      }
    })
    this.setState({ people: people })
  }

  assignRedTeamHandler = (id) => {
    let people = this.state.people
    people.forEach(p => {
      if (p.id === id) {
        p.team = 'Red'
      }
    })
    this.setState({ people: people })
  }



  render() {

    return (
      <div className="App container-fluid">
        <h1>Hi, I'm a React App!</h1>
        <p>Use the buttons to assign people to the <span className="text-danger">Red</span> or <span className="text-primary">Blue</span> team!</p>
        <div className="personRow row">
          {this.state.people.filter(p => p.team === 'Unassigned').map(p => {
            return <Person
              blueTeam={() => this.assignBlueTeamHandler(p.id)}
              redTeam={() => this.assignRedTeamHandler(p.id)}
              name={p.name}
              age={p.age}
              team={p.team} />
          })}
        </div>
        <div className="teamRow row">
          <div className="col-6">
            <h2>Red Team:</h2>
            <div className="redTeam row">
              {this.state.people.filter(p => p.team === 'Red').map(p => {
                return <Person
                  name={p.name}
                  age={p.age}
                  team={p.team} />
              })}
            </div>
          </div>
          <div className="col-6">
            <h2>Blue Team:</h2>
            <div className="blueTeam row">
              {this.state.people.filter(p => p.team === 'Blue').map(p => {
                return <Person
                  name={p.name}
                  age={p.age}
                  team={p.team} />
              })}
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
