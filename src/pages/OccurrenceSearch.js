import React, { Component } from "react";
import OccurrenceBrowser from 'react-occurrence-browser';

const style = {
  border: "10px solid deepskyblue",
  padding: "10px"
};
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { endpoint: props.config.endpoint };
  }
  render() {
    return (
      <div style={style}>
        <OccurrenceBrowser endpoint={this.state.endpoint} />
      </div>
    );
  }
}