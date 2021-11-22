import React, { Component } from 'react'
import { Button } from "antd";
import "antd/dist/antd.css";

export default class NumericButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Button>{this.props.number}</Button>;
  }
}
