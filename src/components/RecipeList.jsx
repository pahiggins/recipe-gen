import React from "react";
import Recipe from "./Recipe";

const RecipeList = ({ recipesData, isLoading }) => {
  if (recipesData.length === 0 && !isLoading) {
    return <p>No recipes found.</p>;
  }

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <ul>
      {recipesData.map(recipeData => {
        return <Recipe key={recipeData.recipe_id} recipeData={recipeData} />;
      })}
    </ul>
  );
};

export default RecipeList;
