import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Cocktail extends Component {
  render() {
    return (
      <div>
        <Link
          to={{
            pathname: "/cocktail",
            mainIngredient: this.props.name,
          }}
        >
          {this.props.name}
        </Link>
      </div>
    );
  }
}
