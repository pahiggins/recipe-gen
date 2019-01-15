import React from "react";

const IngredientList = ({ ingredients, getRecipes }) => {
  return (
    <div>
      <ul>
        {ingredients.map((ingredient, index) => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
      <button onClick={getRecipes}>Generate Recipes</button>
    </div>
  );
};

// const handleClick = cb => {
//   fetch(
//     "https://www.food2fork.com/api/search?key=64e5c975570769a9d4c46db10fb2805e&q=onions,potato,cheese&page=2"
//   )
//     .then(recipes => recipes.json())
//     .then(recipes => cb(recipes.recipes))
//     .catch(console.log);
// };

export default IngredientList;
