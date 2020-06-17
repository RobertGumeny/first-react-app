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
        <p>Use the buttons to assign people to the <span style={{ color: 'red' }}>Red</span> or <span style={{ color: 'blue' }}>Blue</span> team!</p>
        <div className="personRow">
          {this.state.people.filter(p => p.team === 'Unassigned').map(p => {
            return <Person
              blueTeam={() => this.assignBlueTeamHandler(p.id)}
              redTeam={() => this.assignRedTeamHandler(p.id)}
              name={p.name}
              age={p.age}
              team={p.team} />
          })}
        </div>
        <div className="teamRow">
          <div className="redTeam">
            <h2>Red Team:</h2>
            {this.state.people.filter(p => p.team === 'Red').map(p => {
              return <Person
                name={p.name}
                age={p.age}
                team={p.team} />
            })}
          </div>
          <div className="blueTeam">
            <h2>Blue Team:</h2>
            {this.state.people.filter(p => p.team === 'Blue').map(p => {
              return <Person
                name={p.name}
                age={p.age}
                team={p.team} />
            })}
          </div>

        </div>
      </div>
    );
  }
}

export default App;
