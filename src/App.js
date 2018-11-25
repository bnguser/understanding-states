import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'max', age: '28' },
      { name: 'manu', age: '29' },
      { name: 'sathish', age: '33'}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, i'm react app</h1>
        <p>This is really working</p>
        <Person name ={this.state.persons[0].name} age ={this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age ={this.state.persons[1].age}>My hobbies : Racing</Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
