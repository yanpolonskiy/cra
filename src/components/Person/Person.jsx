import React from 'react';
import styles from './Person.css';

const person = props => {
  const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error('Something bad happened');
  }
  return (
    <div className={styles.Person}>
      <h1 onClick={props.click}>Hello i am {props.name}</h1>
      <h2>My age is {props.age}</h2>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
