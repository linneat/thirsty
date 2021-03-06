import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Cocktail from "./Cocktail";
import Spirits from "./Spirits";
import Random from "./Random";
import "./Home.css";
import Quiz from "./Quiz";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Spirits} />
            <Route path="/quiz" exact component={Quiz} />
            <Route
              path="/random/:mainSpirit"
              render={(props) => (
                <Random mainSpirit={props.match.params.mainSpirit} />
              )}
            ></Route>
            <Route
              path="/cocktail/:mainSpirit/:id"
              render={(props) => (
                <Cocktail
                  mainSpirit={props.match.params.mainSpirit}
                  cocktailId={props.match.params.id}
                />
              )}
            ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
