import React, { Component } from "react";
import margarita from './margarita.json';
import './Cocktail.css';

export default class Cocktail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {},
    };
  }

  convertDataToRecipe(data) {
    const drink = data.drinks[0];

    const ingredientsWithMeasure = [];
    for(var i = 1; i <= 15; i++) {
        var ingredientProperty = "strIngredient" + i;
        var measureProperty = "strMeasure" + i;

        if (drink[ingredientProperty] !== null) {
            ingredientsWithMeasure.push({
                name: drink[ingredientProperty],
                measure: drink[measureProperty]
            })
        }
    }

    return {
        name: drink.strDrink,
        thumbnail: drink.strDrinkThumb,
        instructions: drink.strInstructions.split(". "),
        ingredients: ingredientsWithMeasure,
    };
  }

  componentDidMount() {
    const useFakeData = false;
    if (useFakeData) {
      var recipe = this.convertDataToRecipe(margarita)
      this.setState({
        recipe: recipe,
      });
      return;
    }

    if (this.props.location.mainIngredient === undefined) {
      this.setState({
        error: "undefined main ingredient",
      });
    } else {
      var url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + this.props.location.mainIngredient
      fetch(url)
            .then(response => response.json())
            .then(
              (data) => {
                if (data.drinks.length === 0) {
                  this.setState({
                    error: "no cocktails for this main ingredient: " + this.props.location.mainIngredient,
                  });
                } else {
                  var randomDrink = data.drinks[Math.floor(Math.random() * data.drinks.length)];
                  var url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + randomDrink.idDrink

                  fetch(url)
                    .then(response => response.json())
                    .then(
                      (data) => {
                        var recipe = this.convertDataToRecipe(data)
                        this.setState({
                          recipe: recipe,
                        });
                      },
                      (error) => {
                        this.setState({
                          error: error,
                        });
                      }
                    )
                }
              },
              (error) => {
                this.setState({
                  error: error,
                });
              }
            )
    }
  }

  render() {
    if (this.state.error) {
      return <div>an error occured: {this.state.error}</div>;
    }
    else if (this.state.recipe.name === undefined) {
      return <div>loading the cocktail...</div>;
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