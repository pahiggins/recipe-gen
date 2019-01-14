import React from "react";

const Recipe = ({ recipeData }) => {
  console.log(recipeData);
  return (
    <li>
      {recipeData.title} ({recipeData.f2f_url})
    </li>
  );
};

export default Recipe;
