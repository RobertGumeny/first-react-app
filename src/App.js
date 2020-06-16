import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    people: [
      { name: 'Steven', age: 35 },
      { name: 'Robert', age: 32 },
      { name: 'Alison', age: 24 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}>My Hobbies: Playing Poker</Person>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>My Hobbies: Fishing</Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age}>My Hobbies: Dancing</Person>
      </div>
    );
  }
}

export default App;
