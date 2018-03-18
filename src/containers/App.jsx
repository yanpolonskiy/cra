import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons.jsx';
import Cockpit from '../components/Cockpit/Cockpit.jsx';

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

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={styles.App}>
        <Cockpit
          clicked={this.toggleShowPersonsHandler}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
