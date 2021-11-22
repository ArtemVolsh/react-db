import React, { Component } from "react";

export default class Display extends Component {
  render() {
    return (
      <div className="display">
        <span>{this.props.result}</span>
      </div>
    );
  }
}
