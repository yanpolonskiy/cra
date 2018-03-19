// @flow

import React, { PureComponent } from 'react';
import Person from '../Person/Person.jsx';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('Persons.js insinde constructor', props);
  }

  componentWillMount() {
    console.log('Persons.js component will mount', this.props);
  }
  componentDidMount() {
    console.log('Persons.js component will mount', this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('UPDATE Persons.js inside component willRecieveProps', nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Update Persons.js inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('Update Persons.js inside componentDidUpdate');
  }

  render() {
    console.log('Persons.js render()');
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
