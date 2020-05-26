import React, { Component } from "react";
import "./Spirits.css";
import { Link } from "react-router-dom";

export default class MainSpiritButton extends Component {
  render() {
    return (
      <div className="column">
        <button className="ingredientName">
          <Link to={"/random/"+this.props.ingredient}>{this.props.ingredient}</Link>
        </button>
      </div>
    );
  }
}
