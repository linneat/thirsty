import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Cocktail from './Cocktail';
import SpiritsList from './SpiritsList';



export default class Spirits extends Component {
    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path={"/"} exact component={SpiritsList} />
                        <Route
                            path={"/cocktail"}
                            render={props => <Cocktail {...props}/>} >
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}
