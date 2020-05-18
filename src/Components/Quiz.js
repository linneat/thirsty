import React, { Component } from "react";
import "./Cocktail.css";

export default class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answered: false,
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleClick = (event) => {
    console.log(this.state);

    this.setState({
      answered: true,
    });
  };

  render() {
    if (this.state.answered) {
        const sum = 0;
        if(this.state.question1 == "tipsy"){
            sum = sum + 1;
        }
      if (this.state.question1 == "tipsy" &&this.state.question2 =="tipsy") {
        return <div>You are tipsy - GO TO BED</div>;
      } else if(this.state.question1 == "sober" &&this.state.question2 =="sober") {
        return <div>You are completely sober</div>;
      } else{
          return <div>You are only a little tipsy - one more drink wouldn't hurt</div>
      }
    } else {
      return (
        <div>
          <h1 className="cocktailName">Tipsy test</h1>
          <div className="q1">
            <h2>It is 2am, do you think its a good idea to call your ex?</h2>
            <div className="radio-buttons">
              YES best idea ever
              <input
                id="tipsy"
                value="tipsy"
                name="question1"
                type="radio"
                onChange={this.handleChange}
              />
              No definitly not
              <input
                id="sober"
                value="sober"
                name="question1"
                type="radio"
                onChange={this.handleChange}
              />
            </div>
            <div className="q2">
            <h2>Did you just now decide to quit your job tomorrow?</h2>
            <div className="radio-buttons">
              yes, I just realized how misarable my job actually is
              <input
                id="tipsy"
                value="tipsy"
                name="question2"
                type="radio"
                onChange={this.handleChange}
              />
              No, I would never make such a rushed decision 
              <input
                id="sober"
                value="sober"
                name="question2"
                type="radio"
                onChange={this.handleChange}
              />
            </div>
            </div>
            <button onClick={this.handleClick}>tipsy test result</button>
          </div>
        </div>
      );
    }
  }
}
