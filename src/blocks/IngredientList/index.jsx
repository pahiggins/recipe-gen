import React from "react";

import Div from '../../elements/Div';
import Button from '../../elements/Button';
import Ul from '../../elements/Ul';
import Li from '../../elements/Li';

const IngredientList = ({ ingredients, getRecipes }) => {
  return (
    <Div column>
      <Ul>
        {ingredients.map((ingredient, index) => {
          return <Li key={ingredient}>{ingredient}</Li>;
        })}
      </Ul>
      <Button onClick={getRecipes}>Generate Recipes</Button>
    </Div>
  );
};

export default IngredientList;
