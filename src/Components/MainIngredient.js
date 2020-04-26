import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MainIngredient extends Component {
  render() {
    return (
      <button className="ingredientName">
        <Link
          to={{
            pathname: "/random",
            mainIngredient: this.props.name,
          }}
        >
          {this.props.name}
        </Link>
      </button>
    );
  }
}
