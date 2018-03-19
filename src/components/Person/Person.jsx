import React, { Component } from 'react';
import styles from './Person.css';
import WithClass from '../Hoc/WithClass.jsx';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('Person.js insinde constructor', props);
  } 

  componentWillMount() {
    console.log('Person.js component will mount', this.props);
  }
  componentDidMount() {
    console.log('Person.js component will mount', this.props);
  }
  render() {
    return <WithClass classes={styles.Person}>
        <h1 onClick={this.props.click}>Hello i am {this.props.name}</h1>
        <h2>My age is {this.props.age}</h2>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </WithClass>;
  }
}

export default Person;
