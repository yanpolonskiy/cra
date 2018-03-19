import React from 'react';
import styles from './Cockpit.css';

const cockpit = props => {
  const classes = [];

  let btnClass = styles.Button;

  if (props.showPersons) {
    btnClass = [styles.Button, styles.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    classes.push(styles.red);
  }

  if (props.persons.length <= 1) {
    classes.push(styles.bold);
  }
  return (
    <div>
      <h1>Hi this is a React app</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Click me!
      </button>
    </div>
  );
};

export default cockpit;
