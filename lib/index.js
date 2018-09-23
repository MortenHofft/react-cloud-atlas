'use strict';

exports.__esModule = true;
exports.CloudAtlas = exports.createAtlas = undefined;

var _createAtlas = require('./createAtlas');

var _createAtlas2 = _interopRequireDefault(_createAtlas);

var _CloudAtlas = require('./CloudAtlas');

var _CloudAtlas2 = _interopRequireDefault(_CloudAtlas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = _createAtlas2.default;
exports.createAtlas = _createAtlas2.default;
exports.CloudAtlas = _CloudAtlas2.default;