import React, { Component } from "react";
import axios from "axios";

const style = {
  border: "10px solid deepskyblue",
  padding: "10px"
};

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { endpoint: props.config.endpoint };

    axios.get(props.config.articleUrl).then(
      response => {
        this.setState({
          article: response.data,
          safeContent: { __html: response.data.content }
        });
      },
      err => {
        console.log(err);
      }
    );
  }
  render() {
    return (
      <div style={style}>
        <h1>{this.props.config.title}</h1>
        <img src={this.state.article.headerImage} width="250" height="330" />
        <div dangerouslySetInnerHTML={this.state.safeContent} />
      </div>
    );
  }
}
