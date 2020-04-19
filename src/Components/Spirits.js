import React, { Component } from "react";
import MainIngredient from "./MainIngredient";
import "./Spirits.css";

export default class Spirits extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Thirsty ?</h1>
        <p className="slogan">Get a random cocktail recipe</p>

        <div className="ingredientListWrapper">
          <div className="ingredientListHeader">
            <h2>Choose your main ingredient:</h2>
          </div>

          <div className="ingredientList">
            <div className="row">
              <div className="column">
              <button className="ingedientName">
                <MainIngredient name="Vodka"/>
                </button>
              </div>
              <div className="column">
              <button className="ingedientName">
                <MainIngredient name="Gin"/>
                </button>
              </div>
              <div className="column">
              <button className="ingedientName">
                <MainIngredient name="Whiskey"/>
                </button>
              </div>
            </div>

            <div className="row">
              <div className="column">
              <button className="ingedientName">
                <MainIngredient name="Rum"/>
                </button>
              </div>
              <div className="column">
              <button className="ingedientName">
                <MainIngredient name="Cognac"/>
                </button>
              </div>
              <div className="column">
              <button className="ingedientName">
                <MainIngredient name="Brandy"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
