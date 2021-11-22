import React, { Component } from "react";
import NumericButton from "./NumericButton";
import OperatorButton from "./OperatorButton";

export default class CalcField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: 0,
    };
  }


  numberClickHandler() {
    
  }


  render() {
    return (
      <div className="field">
        <NumericButton onClick={this.numberClickHandler} number={0} />
        <NumericButton onClick={this.numberClickHandler} number={1} />
        <NumericButton onClick={this.numberClickHandler} number={2} />
        <NumericButton onClick={this.numberClickHandler} number={3} />
        <NumericButton onClick={this.numberClickHandler} number={4} />
        <NumericButton onClick={this.numberClickHandler} number={5} />
        <NumericButton onClick={this.numberClickHandler} number={6} />
        <NumericButton onClick={this.numberClickHandler} number={7} />
        <NumericButton onClick={this.numberClickHandler} number={8} />
        <NumericButton onClick={this.numberClickHandler} number={9} />
        <OperatorButton operator="&times;" />
        <OperatorButton operator="&ndash;" />
        <OperatorButton operator="&divide;" />
        <OperatorButton operator="+" />
        <OperatorButton operator="=" />
        <OperatorButton operator="Clear" />
      </div>
    );
  }
}
