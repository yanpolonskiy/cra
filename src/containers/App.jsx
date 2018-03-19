import React, { PureComponent } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons.jsx';
import Cockpit from '../components/Cockpit/Cockpit.jsx';
import Aux from '../components/Hoc/Aux.jsx';
import withClass from '../components/Hoc/withClass.jsx';

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
      toggleClickCounter: 0,
    };
  }

  componentWillMount() {
    console.log('App.js component will mount', this.props);
  }

  componentDidMount() {
    console.log('App.js component did mount', this.props);
  }

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
    // better approach to use setState as a functions because its asynchronous operation
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => ({
      showPersons: !doesShow,
      toggleClickCounter: prevState.toggleClickCounter + 1,
    }));
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
      <Aux>
        <button onClick={() => this.setState({ showPersons: true })}>Show persons</button>
        <Cockpit
          clicked={this.toggleShowPersonsHandler}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
        />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, styles.App);
