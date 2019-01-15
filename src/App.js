import React, { Component } from "react";
import Header from './blocks/Header';
import IngredientAdder from "./blocks/IngredientAdder";
import IngredientList from "./blocks/IngredientList";
import RecipeList from "./blocks/RecipeList";

class App extends Component {
  state = {
    ingredients: [],
    recipes: [],
    isLoading: false
  };

  render() {
    const { ingredients, recipes, isLoading } = this.state;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Header title="Recipe Generator" />
        <IngredientAdder addIngredient={this.addIngredient} />
        <IngredientList
          ingredients={ingredients}
          getRecipes={this.getRecipes}
        />
        <RecipeList recipesData={recipes} isLoading={isLoading} />
      </div>
    );
  }

  addIngredient = ingredientToAdd => {
    this.setState(state => ({
      ingredients: [...state.ingredients, ingredientToAdd]
    }));
  };

  getRecipes = () => {
    const { ingredients } = this.state;
    const query = ingredients.join(",");

    this.setState(
      {
        isLoading: true
      },
      () => {
        fetch(
          `https://www.food2fork.com/api/search?key=e1a5bbeb800c7051e15bbdfd8d00bcb5&q=${query}&page=2`
        )
          .then(recipes => recipes.json())
          .then(({ recipes }) => {
            this.setState({ recipes, isLoading: false });
          })
          .catch(console.log);
      }
    );
  };
}

export default App;
