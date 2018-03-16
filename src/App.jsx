import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person.jsx';

class App extends Component {
  state = {
    persons: [
      { name: 'Sergey', age: 25, hobbies: 'football', handler: false, id: 'jqwej1jzxc' },
      { name: 'John', age: 22, hobbies: 'music', handler: true, id: 'jqw419032czxj' },
      { name: 'Sophie', age: 29, hobbies: 'painting', handler: false, id: 'zxcnk2138fc' },
    ],
    otherState: 'Some other value',
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    // const Person = Object.assign({}, person);
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
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(i, 1);
    this.setState({ persons });
  };

  render() {
    const style = {
      backgroundColor: '#fff',
      font: 'inherit',
      border: '1px solid #bbb',
      padding: '1rem',
      cursor: 'pointer',
      borderRadius: '3px',
    };

    let persons = null;

    if (this.state.showPersons) {
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
    return (
      <div className="App">
        {persons}
        <button style={style} onClick={this.toggleShowPersonsHandler}>
          Click me!
        </button>
      </div>
    );
  }
}

export default App;
