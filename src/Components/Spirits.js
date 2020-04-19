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
                <div className="ingedientName">
                <MainIngredient name="Vodka"/>
                </div>
              </div>
              <div className="column">
              <div className="ingedientName">
                <MainIngredient name="Gin"/>
                </div>
              </div>
              <div className="column">
              <div className="ingedientName">
                <MainIngredient name="Whiskey"/>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="column">
              <div className="ingedientName">
                <MainIngredient name="Rum"/>
                </div>
              </div>
              <div className="column">
              <div className="ingedientName">
                <MainIngredient name="Cognac"/>
                </div>
              </div>
              <div className="column">
              <div className="ingedientName">
                <MainIngredient name="Brandy"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
