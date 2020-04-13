import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class SpiritsList extends Component {
    render(){
        return (
            <div>
                <p>Choose your main ingredient:</p>
              <ul>

                  <li key="Vodka" >
                    <Link to={{
                        pathname: "/cocktail",
                        mainIngredient: "vodka"
                    }}>
                        Vodka
                    </Link>
                  </li>

                  <li key="Gin" >
                    <Link to={{
                        pathname: "/cocktail",
                        mainIngredient: "gin"
                    }}>
                        Gin
                    </Link>
                  </li>

              </ul>
            </div>
        )
    }
}