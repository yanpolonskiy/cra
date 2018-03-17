import React from 'react';
import './Person.css';

const person = props => {
  return (
    <div className="Person">
      <h1 onClick={props.click}>Hello i am {props.name}</h1>
      <h2>My age is {props.age}</h2>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
