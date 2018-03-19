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

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Update persons.js inside shouldComponentUpdate', nextProps, nextState);
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   );
  //   // return true
  // }

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
