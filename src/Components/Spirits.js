import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Spirits.css';

export default class Spirits extends Component {
  render() {
    const ingredients = ["Vodka", "Gin", "Whiskey", "Rum", "Cognac", "Brandy"];

    return (
      <div>
        <h1 className="title">Thirsty ?</h1>
        <p className="slogan">Be brave and make a random cocktail</p>
        <div className="ingredientListWrapper">
          <div className="ingredientListHeader">
        <h2>Choose your main ingredient:</h2>
        </div>
        <div className="ingredientList">
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
        </div>
      </div>
    );
  }
}
