import React, { Component } from "react";
import CocktailService from '../Services/CocktailService';

export default class Cocktail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {}
    };
  }

  componentDidMount() {
    const recipe = CocktailService.getRandomCocktail(
      this.props.location.mainIngredient
    );
    this.setState(() => ({
      recipe: recipe
    }));
  }

  render() {
    return (
      <div>
        <p>Main ingredient: {this.props.location.mainIngredient}</p>
        <p>Cocktail name: {this.state.recipe.strDrink}</p>
      </div>
    );
  }
}
