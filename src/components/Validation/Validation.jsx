import React from 'react';

const Validation = props => {
  const response = props.length > 5 ? 'Text long enough' : 'Text too short';
  return <div>{response}</div>;
};

export default Validation;
