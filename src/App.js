import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    people: [
      { name: 'Steven', age: 35, team: 'Unassigned' },
      { name: 'Robert', age: 32, team: 'Unassigned' },
      { name: 'Alison', age: 24, team: 'Unassigned' },
      { name: 'Harvey', age: 42, team: 'Unassigned' },
      { name: 'Stephanie', age: 28, team: 'Unassigned' },
      { name: 'Susan', age: 37, team: 'Unassigned' }
    ]
  }

  assignBlueTeamHandler = (personIndex) => {
    let people = this.state.people
    people[personIndex].team = 'Blue'
    this.setState({ people: people })
  }

  assignRedTeamHandler = (personIndex) => {
    let people = this.state.people
    people[personIndex].team = 'Red'
    this.setState({ people: people })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <div className="personRow">
          {this.state.people.map((p, index) => {
            return <Person
              blueTeam={() => this.assignBlueTeamHandler(index)}
              redTeam={() => this.assignRedTeamHandler(index)}
              name={p.name}
              age={p.age}
              team={p.team} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
