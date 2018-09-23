import React, {Component} from 'react'
import axios from 'axios';

import OccurrenceBrowser from 'react-occurrence-browser'

const style = {
    border: '10px solid deepskyblue',
    padding: '10px'
};
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {endpoint: props.config.endpoint};

    axios.get(props.config.articleUrl)
      .then((response) => {
        this.setState({
          article: response.data,
          safeContent: {__html: response.data.content}
        });
      }, (err) => {
        console.log(err);
      })

  }
  render() {
    return <div style={style}>
      <h1>{this.props.config.title}</h1>
      <div dangerouslySetInnerHTML={this.state.safeContent}></div>
      <OccurrenceBrowser endpoint={this.state.endpoint}/>
    </div>
  }
}
