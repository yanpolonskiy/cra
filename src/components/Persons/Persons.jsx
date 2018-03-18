import React from 'react';
import Person from '../Person/Person.jsx';

const persons = props =>
  props.persons.map((person, i) => (
    <Person
      click={() => props.clicked(i)}
      name={person.name}
      age={person.age}
      key={person.id}
      changed={event => props.changed(event, person.id)}
    />
  ));

export default persons;
