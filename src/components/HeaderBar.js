import React, { Component } from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  headerBar: {
    height: "50px",
    width: "100%",
    fontFamily: "Source Sans Pro",
    background: theme.colorPrimary
  }
});

export default injectSheet(styles)(
  class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { classes } = this.props;
      return (
        <div className={classes.headerBar}>
          <h1>Test</h1>
        </div>
      );
    }
  }
);
