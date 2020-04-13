import React, { Component } from "react";
import CocktailService from "../Services/CocktailService";

export default class Cocktail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {},
    };
  }

  componentDidMount() {
    const recipe = CocktailService.getRandomCocktail(
      this.props.location.mainIngredient
    );
    this.setState(() => ({
      recipe: recipe,
    }));
  }

  render() {
    if (this.state.recipe.strDrink === undefined) {
      return <div>loading...</div>;
    } else {
      return (
        <div>
          <p>Main ingredient: {this.props.location.mainIngredient}</p>

          <div>
            <p>Cocktail name: {this.state.recipe.strDrink}</p>

            <img src={this.state.recipe.strDrinkThumb} width="300px"></img>

            <div>
              Recipe:
              <ol>
                {this.state.recipe.strInstructions
                  .split(". ")
                  .map((item) => {
                    return <li>{item}</li>;
                  })}
              </ol>
            </div>
          </div>
        </div>
      );
    }
  }
}
