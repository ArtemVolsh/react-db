import React, { Component } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";

export default class OperatorButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Button type="primary">{this.props.operator}</Button>;
  }
}
