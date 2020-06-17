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

  assignTeamHandler = () => {
    console.log("go team!")
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
          <Person
            name={this.state.people[0].name}
            age={this.state.people[0].age}
            team={this.state.people[0].team}
            click={this.assignTeamHandler} />
          <Person
            name={this.state.people[1].name}
            age={this.state.people[1].age}
            team={this.state.people[1].team}
            click={this.assignTeamHandler} />
          <Person
            name={this.state.people[2].name}
            age={this.state.people[2].age}
            team={this.state.people[2].team}
            click={this.assignTeamHandler} />
          <Person
            name={this.state.people[3].name}
            age={this.state.people[3].age}
            team={this.state.people[3].team}
            click={this.assignTeamHandler} />
          <Person
            name={this.state.people[4].name}
            age={this.state.people[4].age}
            team={this.state.people[4].team}
            click={this.assignTeamHandler} />
          <Person
            name={this.state.people[5].name}
            age={this.state.people[5].age}
            team={this.state.people[5].team}
            click={this.assignTeamHandler} />
        </div>
      </div>
    );
  }
}

export default App;
