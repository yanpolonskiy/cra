import React, { Component } from 'react';
import Radium from 'radium';
import './App.css';
import Person from './components/Person/Person.jsx';

class App extends Component {
  state = {
    persons: [
      { name: 'Sergey', age: 25, hobbies: 'football', id: 'jqwej1jzxc' },
      { name: 'John', age: 22, hobbies: 'music', id: 'jqw419032czxj' },
      { name: 'Sophie', age: 29, hobbies: 'painting', id: 'zxcnk2138fc' },
    ],
    otherState: 'Some other value',
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons,
    });
  };

  toggleShowPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  deletePersonHandler = i => {
    const persons = [...this.state.persons];
    persons.splice(i, 1);
    this.setState({ persons });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid #bbb',
      padding: '1rem',
      cursor: 'pointer',
      borderRadius: '3px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: '#fff',
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      style.backgroundColor = 'red';
      style[':hover'] = { backgroundColor: 'salmon', color: '#000' };
      persons = (
        <div>
          {this.state.persons.map((person, i) => (
            <Person
              click={() => this.deletePersonHandler(i)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={event => this.nameChangedHandler(event, person.id)}
            />
          ))}
        </div>
      );
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>Hi this is a React app</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={style} onClick={this.toggleShowPersonsHandler}>
          Click me!
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
