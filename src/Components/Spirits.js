import React, { Component } from "react";
import "./Spirits.css";
import Icon from "./icon.png";
import { Link } from "react-router-dom";
import MainSpiritButton from "./MainSpiritButton";

export default class Spirits extends Component {
  render() {
    return (
      <div>
        <div className="iconAndTitleWrapper">
          <img src={Icon} alt="cocktail icon" className="iconTitle" />
          <h1 className="title">Thirsty ?</h1>
        </div>
        <p className="slogan">Get a random cocktail recipe</p>
        <div className="ingredientListWrapper">
          <div className="ingredientListHeader">
            <h2>Choose your main ingredient:</h2>
          </div>

          <div className="ingredientList">
            <div className="row">
              <MainSpiritButton ingredient="Vodka" />
              <MainSpiritButton ingredient="Gin" />
              <MainSpiritButton ingredient="Whiskey" />
            </div>
            <div className="row">
              <MainSpiritButton ingredient="Rum" />
              <MainSpiritButton ingredient="Cognac" />
              <MainSpiritButton ingredient="Brandy" />
            </div>
          </div>
        </div>
        <p className="textToQuizLink">
          Are you sure another drink is a good idea? Try the{" "}
          <Link to={"/quiz"}>tipsy test</Link>{" "}
        </p>
      </div>
    );
  }
}
