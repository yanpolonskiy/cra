import React, { Component } from 'react';
import styles from './Person.css';

class Person extends Component {
  render() {
    return (
      <div className={styles.Person}>
        <h1 onClick={this.props.click}>Hello i am {this.props.name}</h1>
        <h2>My age is {this.props.age}</h2>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
