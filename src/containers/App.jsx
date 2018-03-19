import React, { PureComponent } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons.jsx';
import Cockpit from '../components/Cockpit/Cockpit.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('App.js insinde constructor', props);
    this.state = {
      persons: [
        { name: 'Sergey', age: 25, hobbies: 'football', id: 'jqwej1jzxc' },
        { name: 'John', age: 22, hobbies: 'music', id: 'jqw419032czxj' },
        { name: 'Sophie', age: 29, hobbies: 'painting', id: 'zxcnk2138fc' },
      ],
      otherState: 'Some other value',
      showPersons: false,
    };
  }

  componentWillMount() {
    console.log('App.js component will mount', this.props);
  }

  componentDidMount() {
    console.log('App.js component did mount', this.props);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Update App.js inside shouldComponentUpdate', nextProps, nextState);
  //   // return true;
  //   return (
  //     nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('Update App.js inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('Update App.js inside componentDidUpdate');
  }

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
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show persons
        </button>
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
