import React, { Component } from "react";
import MainIngredient from "./MainIngredient";
import "./Spirits.css";
import Icon from "./icon.png";

export default class Spirits extends Component {
  render() {
    return (
      <div>
        <div className="iconAndTitleWrapper">
        <img src={Icon} alt="cocktail icon"  className="iconTitle"/>
        <h1 className="title">Thirsty ?</h1>
        </div>
        <p className="slogan">Get a random cocktail recipe</p>

        <div className="ingredientListWrapper">
          <div className="ingredientListHeader">
            <h2>Choose your main ingredient:</h2>
          </div>

          <div className="ingredientList">
            <div className="row">
              <div className="column">
                <MainIngredient name="Vodka" />
              </div>
              <div className="column">
                <MainIngredient name="Gin" />
              </div>
              <div className="column">
                <MainIngredient name="Whiskey" />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <MainIngredient name="Rum" />
              </div>
              <div className="column">
                <MainIngredient name="Cognac" />
              </div>
              <div className="column">
                <MainIngredient name="Brandy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
