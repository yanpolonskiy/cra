import React from 'react';
import './Button.css';

const button = props => (
  <button className={`button ${props.class}`}>
    {props.title}
  </button>
);

export default button;
