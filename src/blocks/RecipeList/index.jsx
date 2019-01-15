import React from "react";

import Div from '../../elements/Div';
import P from '../../elements/P';
import Ul from '../../elements/Ul';
import Recipe from "../Recipe";

const RecipeList = ({ recipesData, isLoading }) => {
  if (recipesData.length === 0 && !isLoading) {
    return (
      <Div>
        <P>Add ingredients and then click 'Generate Recipes'</P>
      </Div>
    );
  }

  return isLoading ? (
    <Div>
      <P>Loading...</P>
    </Div>
  ) : (
      <Div>
        <Ul>
          {recipesData.map(recipeData => {
            return <Recipe key={recipeData.recipe_id} recipeData={recipeData} />;
          })}
        </Ul>
      </Div>
    );
};

export default RecipeList;
