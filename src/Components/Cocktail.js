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
    if (this.state.recipe.name === undefined) {
      return <div>loading...</div>;
    } else {
      return (
        <div>
          <p>Main ingredient: {this.props.location.mainIngredient}</p>

          <div>
            <p>Cocktail name: {this.state.recipe.name}</p>

            <img src={this.state.recipe.thumbnail} alt={this.state.recipe.name} width="300px"></img>

            <div>
              Ingredients:
              <ul>
                {this.state.recipe.ingredients.map((item, index) => {
                  return <li key={index}>{item.measure} {item.name}</li>;
                })}
              </ul>
            </div>

            <div>
              Recipe:
              <ol>
                {this.state.recipe.instructions.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ol>
            </div>
          </div>
        </div>
      );
    }
  }
}
