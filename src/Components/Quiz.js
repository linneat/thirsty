import React, { Component } from "react";
import "./Cocktail.css";
import "./Quiz.css";
import { Link } from "react-router-dom";

export default class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question1: undefined,
      question2: undefined,
      question3: undefined,
      message: "Answer all the questions to see result here",
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
      let sum =
        parseInt(this.state.question1) +
        parseInt(this.state.question2) +
        parseInt(this.state.question3);
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
        <div className="back">
          <Link to="/">
            <i className="fas fa-angle-left fa-3x"></i>
          </Link>
        </div>
        <h1 className="QuizName">Tipsy test</h1>
        <div className="q">
          <h2 className="questions">Can you walk in a straight line?</h2>
          <div className="radio-buttons">
            <div className="answer">
              <input
                id="tipsyq1"
                value="1"
                name="question1"
                type="radio"
                onChange={this.handleChange}
              />
              it's very difficult
            </div>
            <div className="answer">
              <input
                id="littleTipsyq1"
                value="0"
                name="question1"
                type="radio"
                onChange={this.handleChange}
              />
              yes, but it's not easy
            </div>
            <div className="answer">
              <input
                id="soberq1"
                value="-1"
                name="question1"
                type="radio"
                onChange={this.handleChange}
              />
              yes that is no problem
            </div>
          </div>
        </div>
        <div className="q">
          <h2 className="questions">
            Did you just now decide to quit your job tomorrow?
          </h2>
          <div className="radio-buttons">
            <div className="answer">
              <input
                id="tipsyq2"
                value="1"
                name="question2"
                type="radio"
                onChange={this.handleChange}
              />
              yes, I just realized how miserable my job actually is
            </div>
            <div className="answer">
              <input
                id="littleTipsyq2"
                value="0"
                name="question2"
                type="radio"
                onChange={this.handleChange}
              />
              yes, but I will probably feel differently about it tomorrow
            </div>
            <div className="answer">
              <input
                id="soberq2"
                value="-1"
                name="question2"
                type="radio"
                onChange={this.handleChange}
              />
              no, I would never make such a rushed decision
            </div>
          </div>
        </div>
        <div className="q">
          <h2 className="questions">
            It is 2am, do you think it's a good idea to call your ex?
          </h2>
          <div className="radio-buttons">
            <div className="answer">
              <input
                id="tipsyq3"
                value="1"
                name="question3"
                type="radio"
                onChange={this.handleChange}
              />
              YES best idea ever
            </div>
            <div className="answer">
              <input
                id="littleTipsyq3"
                value="0"
                name="question3"
                type="radio"
                onChange={this.handleChange}
              />
              no but I guess a text message is okay
            </div>
            <div className="answer">
              <input
                id="soberq3"
                value="-1"
                name="question3"
                type="radio"
                onChange={this.handleChange}
              />
              no definitely not
            </div>
          </div>
        </div>
        <button className="resultButton" onClick={this.handleClick}>
          tipsy test result
        </button>
        <div className="testResult">{this.state.message}</div>
      </div>
    );
  }
}
