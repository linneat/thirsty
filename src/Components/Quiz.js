import React, { Component } from "react";
import "./Cocktail.css";
import "./Quiz.css";

export default class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question1: undefined,
      question2: undefined,
      question3: undefined,
      message: "",
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

    if (
      this.state.question1 !== undefined &&
      this.state.question2 !== undefined &&
      this.state.question3 !== undefined
    ) {
        let sum = 0;
      if (this.state.question1 === "tipsy") {
        sum = sum + 1;
      } else if (this.state.question1 === "sober") {
        sum = sum - 1;
      }
      if (this.state.question2 === "tipsy") {
        sum = sum + 1;
      } else if (this.state.question2 === "sober") {
        sum = sum - 1;
      }
      if (this.state.question3 === "tipsy") {
        sum = sum + 1;
      } else if (this.state.question3 === "sober") {
        sum = sum - 1;
      }
      let message = "";
      if (sum > 0) {
        message = "You are tipsy - GO TO BED";
      } else if (sum < 0) {
        message = "You are completely sober";
      } else {
          message = "You are only a little tipsy - one more drink wouldn't hurt";
      }
      this.setState({
        message: message,
      });
    } else {
      this.setState({
        message: "Please answer all the questions",
      });
    }
  };

  render() {
      return (
        <div>
          <h1 className="cocktailName">Tipsy test</h1>
          <div className="q1">
            <h2>Can you walk in a straight line?</h2>
            <div className="radio-buttons">
              It's very difficult
              <input
                id="tipsy"
                value="tipsy"
                name="question1"
                type="radio"
                onChange={this.handleChange}
              />
              Yes, but its not easy
              <input
                id="littleTipsy"
                value="littleTipsy"
                name="question1"
                type="radio"
                onChange={this.handleChange}
              />
              Yes that is no problem
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
                Yes, but I know I will feel differently about it when I wake up
                tomorrow
                <input
                  id="littleTipsy"
                  value="littleTipsy"
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
            <div className="q2">
              <h2>It is 2am, do you think its a good idea to call your ex?</h2>
              <div className="radio-buttons">
                YES best idea ever
                <input
                  id="tipsy"
                  value="tipsy"
                  name="question3"
                  type="radio"
                  onChange={this.handleChange}
                />
                No but I guess a text message is okay
                <input
                  id="littleTipsy"
                  value="littleTipsy"
                  name="question3"
                  type="radio"
                  onChange={this.handleChange}
                />
                No definitly not
                <input
                  id="sober"
                  value="sober"
                  name="question3"
                  type="radio"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button onClick={this.handleClick}>tipsy test result</button>
            <div>{this.state.message}</div>
          </div>
        </div>
      );
    }
}
