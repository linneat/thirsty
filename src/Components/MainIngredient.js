import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export default class MainIngredient extends Component {
  render() {
    return <Button name={this.props.name}></Button>;
  }
}

const Button = withRouter(({ history, ...props }) => (
  <button
    className="ingredientName"
    type="button"
    onClick={() => {
      history.push("/random/" + props.name);
    }}
  >
    {props.name}
  </button>
));
