// import React, {Component} from 'react'
// import axios from 'axios';

// import OccurrenceBrowser from 'react-occurrence-browser'

// export default class extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {endpoint: props.config.endpoint};

//     axios.get(props.config.articleUrl)
//       .then((response) => {
//         this.setState({
//           article: response.data,
//           safeContent: {__html: response.data.content}
//         });
//       }, (err) => {
//         console.log(err);
//       })

//   }
//   render() {
//     return <div>
//       <h2>Welcome to React components</h2>
//       <div dangerouslySetInnerHTML={this.state.safeContent}></div>
//       <OccurrenceBrowser endpoint={this.state.endpoint}/>
//     </div>
//   }
// }

import createAtlas from './createAtlas';
import CloudAtlas from './CloudAtlas';

export default createAtlas;
export { createAtlas, CloudAtlas };