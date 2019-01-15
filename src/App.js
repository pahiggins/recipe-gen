import React, { Component } from "react";
import "./App.css";
import IngredientAdder from "./components/IngredientAdder";
import IngredientList from "./components/IngredientList";
import RecipeList from "./components/RecipeList";

class App extends Component {
  state = {
    ingredients: [],
    recipes: [],
    isLoading: false
  };
  render() {
    const { ingredients, recipes, isLoading } = this.state;

    return (
      <div className="App">
        <h1>Receipe Generator!</h1>
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
