import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Cocktail from './Cocktail';
import Spirits from './Spirits';



export default class Home extends Component {
    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path={"/"} exact component={Spirits} />
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
