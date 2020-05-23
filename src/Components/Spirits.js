import React, { Component } from "react";
import "./Spirits.css";
import Icon from "./icon.png";
import { Link } from "react-router-dom";

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
              <div className="column">
                <button className="ingredientName">
                  <Link to="/random/Vodka">Vodka</Link>
                </button>
              </div>
              <div className="column">
                <button className="ingredientName">
                  <Link to="/random/Gin">Gin</Link>
                </button>
              </div>
              <div className="column">
                <button className="ingredientName">
                  <Link to="/random/Whiskey">Whiskey</Link>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <button className="ingredientName">
                  <Link to="/random/Rum">Rum</Link>
                </button>
              </div>
              <div className="column">
                <button className="ingredientName">
                  <Link to="/random/Cognac">Cognac</Link>
                </button>
              </div>
              <div className="column">
                <button className="ingredientName">
                  <Link to="/random/Brandy">Brandy</Link>
                </button>
              </div>
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
