import React, { Component } from 'react';


export default class Cocktail extends Component {
    render(){
        return (
            <div>
              <p>this is the cocktail component called with main ingredient: {this.props.location.mainIngredient}</p>
            </div>
        )
    }
}
