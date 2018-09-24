import React, { Component } from "react";
import axios from "axios";

const style = {
  border: "10px solid deepskyblue",
  padding: "10px"
};

export default class extends Component {
  render() {
    return (
      <div style={style}>
        <h1>{this.props.config.title}</h1>
        <p>Some welcome page</p>
      </div>
    );
  }
};

