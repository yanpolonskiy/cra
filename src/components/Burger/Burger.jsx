import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.jsx';

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(ingr => [
    ...Array(props.ingredients[ingr]),
  ].map((_, index) => <BurgerIngredient key={ingr + index} type={ingr} />))
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
