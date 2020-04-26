import React, { Component } from "react";
import { Redirect } from "react-router";
import Loading from "./Loading";

export default class Random extends Component {
  constructor(props) {
    super(props);

    var mainIngredient = this.props.location.mainIngredient;
    if (mainIngredient === undefined) {
      let ingredients = ["Vodka", "Gin", "Whiskey", "Rum", "Cognac", "Brandy"];
      mainIngredient =
        ingredients[Math.floor(Math.random() * ingredients.length)];
    }

    this.state = {
      mainIngredient: mainIngredient,
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
    this.randomCocktail(this.state.mainIngredient);
  }

  render() {
    if (this.state.cocktailId) {
      return (
        <Redirect
          to={{
            pathname: "/cocktail/" + this.state.cocktailId,
            mainIngredient: this.state.mainIngredient,
          }}
        />
      );
    } else if (this.state.error) {
      return <div>an error occured: {this.state.error}</div>;
    } else {
      return <Loading />;
    }
  }
}
