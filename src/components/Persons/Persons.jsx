import React, { Component } from 'react';
import Person from '../Person/Person.jsx';

class Persons extends Component {
  render() {
    return this.props.persons.map((person, i) => (
      <Person
        click={() => this.props.clicked(i)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => this.props.changed(event, person.id)}
      />
    ));
  }
}

export default Persons;
