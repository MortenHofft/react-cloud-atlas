import React, { Component } from "react";
import axios from "axios";
import injectSheet from "react-jss";

const style = {
  border: "10px solid deepskyblue",
  padding: "10px"
};

const styles = {
  about: {
    color: "green",
    border: "10px solid deepskyblue",
    padding: "10px",
    "& span": {
      // jss-nested applies this to a child span
      fontWeight: "bold" // jss-camel-case turns this into 'font-weight'
    }
  }
};

export default injectSheet(styles)(class extends Component {
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
    const {classes} = this.props;
    return (
      <div className={classes.about}>
        <h1>{this.props.config.title}</h1>
        <img src={_.get(this.state, 'article.headerImage')} width="250" height="330" />
        <div dangerouslySetInnerHTML={this.state.safeContent} />
      </div>
    );
  }
});