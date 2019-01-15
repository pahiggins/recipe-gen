import React from "react";

const Recipe = ({ recipeData }) => {
  return (
    <li>
      {recipeData.title}
    </li>
  );
};

export default Recipe;
