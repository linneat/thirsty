import React, { Component } from "react";
import "./Cocktail.css";
import { Link } from "react-router-dom";

export default class Cocktail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: undefined,
      cocktailId: props.match.params.id,
      mainSpirit: props.match.params.mainSpirit,
    };
  }

  convertDataToRecipe(data) {
    const drink = data.drinks[0];

    const ingredientsWithMeasure = [];
    for (var i = 1; i <= 15; i++) {
      var ingredientProperty = "strIngredient" + i;
      var measureProperty = "strMeasure" + i;

      if (drink[ingredientProperty] !== null) {
        ingredientsWithMeasure.push({
          name: drink[ingredientProperty],
          measure: drink[measureProperty],
        });
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
    var url =
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
      this.state.cocktailId;

    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          var recipe = this.convertDataToRecipe(data);
          this.setState({
            recipe: recipe,
          });
        },
        (error) => {
          this.setState({
            error: error,
          });
        }
      );
  }

  render() {
    if (this.state.error) {
      return <div>an error occured: {this.state.error}</div>;
    } else if (this.state.recipe === undefined) {
      return <div>loading the cocktail...</div>;
    } else {
      return (
        <div>
          <div>
            <div className="drinkPresentation">
              <div className="back">
                <Link to="/">
                  <i className="fas fa-angle-left fa-3x"></i>
                </Link>
              </div>
              <h1 className="cocktailName">{this.state.recipe.name}</h1>
              <div className="nextRandom">
                <Link
                  to={"/random/" + this.state.mainSpirit}
                >
                  <button>New random {this.state.mainSpirit} cocktail</button>
                </Link>
              </div>
            </div>
            <div className="PicAndListWrapper">
              <div className="columnPicAndListsWrapper">
                <img
                  src={this.state.recipe.thumbnail}
                  alt={this.state.recipe.name}
                  className="picture"
                ></img>
              </div>
              <div className="columnPicAndListsWrapper">
                <div className="ingredientsList">
                  <h2>Ingredients:</h2>
                  <ul>
                    {this.state.recipe.ingredients.map((item, index) => {
                      return (
                        <li key={index}>
                          {item.measure} {item.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="columnPicAndListsWrapper">
                <div className="recipeList">
                  <h2>Recipe:</h2>
                  <ol>
                    {this.state.recipe.instructions.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
