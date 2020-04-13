import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Spirits extends Component {
  render() {
    const ingredients = ["Vodka", "Gin", "Whiskey", "Rum", "Cognac", "Brandy"];

    return (
      <div>
        <p>Choose your main ingredient:</p>
        <ul>
          {ingredients.map((ingredient, index) => {
            return (
              <li key={ingredient}>
                <Link
                  to={{
                    pathname: "/cocktail",
                    mainIngredient: ingredient
                  }}
                >
                  {ingredient}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
