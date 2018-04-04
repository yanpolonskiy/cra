import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl.jsx';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    {controls.map(control => (
      <BuildControl key={control.label} type={control.type} label={control.label} />
    ))}
  </div>
);

export default buildControls;
