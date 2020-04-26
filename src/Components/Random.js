import React, { Component } from "react";
import { Redirect } from "react-router";

export default class Random extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
      cocktailId: undefined,
    };
  }

  async randomCocktail(mainIngredient) {
    var url =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
      mainIngredient;
    let response = await fetch(url);
    let data = await response.json();

    if (data.drinks.length === 0) {
      this.setState({
        error: "no cocktails for this main ingredient: " + mainIngredient,
      });
    } else {
      var randomDrink =
        data.drinks[Math.floor(Math.random() * data.drinks.length)];
      this.setState({
        cocktailId: randomDrink.idDrink,
      });
    }
  }

  componentDidMount() {
    if (this.props.location.mainIngredient === undefined) {
      this.setState({
        error: "undefined main ingredient",
      });
    } else {
      this.randomCocktail(this.props.location.mainIngredient);
    }
  }

  render() {
    if (this.state.cocktailId) {
      return <Redirect to={"/cocktail/" + this.state.cocktailId} />;
    } else if (this.state.error) {
      return <div>an error occured: {this.state.error}</div>;
    } else {
      return <div>loading the cocktail...</div>;
    }
  }
}
