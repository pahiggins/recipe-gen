import React, { Component } from "react";

import Div from '../../elements/Div';
import Form from '../../elements/Form';
import Label from '../../elements/Label';
import Input from '../../elements/Input';
import Button from '../../elements/Button';

class IngredientAdder extends Component {
  state = {
    newIng: ""
  };
  render() {
    const { newIng } = this.state;

    return (
      <Div>
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor="add-ingredient">Add Ingredient</Label>
          <Input
            type="text"
            id="newIng"
            value={newIng}
            onChange={this.handleChange}
          />
          <Button type="submit">Add Ingredient</Button>
        </Form>
      </Div>
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
