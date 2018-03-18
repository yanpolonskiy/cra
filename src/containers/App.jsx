import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons.jsx';

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
    let persons = null;
    let btnClass = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
      btnClass = styles.Red;
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }

    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }
    return (
      <div className={styles.App}>
        <h1>Hi this is a React app</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.toggleShowPersonsHandler}>
          Click me!
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
