import React, { Component } from "react";

class IngredientAdder extends Component {
  state = {
    newIng: ""
  };
  render() {
    const { newIng } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="add-ingredient">Add ingredient</label>
        <input
          type="text"
          id="newIng"
          value={newIng}
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }

  handleChange = event => {
    const { value, id } = event.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addIngredient(this.state.newIng);
    this.setState({
      newIng: ""
    });
  };
}

export default IngredientAdder;
