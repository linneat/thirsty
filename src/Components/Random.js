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

  componentDidMount() {
    if (this.props.location.mainIngredient === undefined) {
      this.setState({
        error: "undefined main ingredient",
      });
    } else {
      var url =
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
        this.props.location.mainIngredient;
      fetch(url)
        .then((response) => response.json())
        .then(
          (data) => {
            if (data.drinks.length === 0) {
              this.setState({
                error:
                  "no cocktails for this main ingredient: " +
                  this.props.location.mainIngredient,
              });
            } else {
              var randomDrink =
                data.drinks[Math.floor(Math.random() * data.drinks.length)];
              this.setState({
                cocktailId: randomDrink.idDrink,
              });
            }
          },
          (error) => {
            this.setState({
              error: error,
            });
          }
        );
    }
  }

  render() {
    if (this.state.cocktailId) {
      return <Redirect to={"/cocktail/"+ this.props.location.mainIngredient+ "/" + this.state.cocktailId} />;
    } else if (this.state.error) {
      return <div>an error occured: {this.state.error}</div>;
    } else {
      return <div>loading the cocktail...</div>;
    }
  }
}
