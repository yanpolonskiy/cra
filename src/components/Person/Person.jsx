import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = props => {
  const style = {
    '@media(min-width: 500px)': {
      width: '450px',
    }
  };
  return (
    <div className="Person" style={style}>
      <h1 onClick={props.click}>Hello i am {props.name}</h1>
      <h2>My age is {props.age}</h2>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
