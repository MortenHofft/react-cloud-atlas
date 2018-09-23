import React, {Component} from 'react'
import {render} from 'react-dom'
import {CloudAtlas} from '../../src'

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {config: {endpoint: '//localhost:9200/fungi', articleUrl: '/testfile.json', title:"Demo atlas"}};
  }

  render() {
    return <div>
      <h1>react-cloud-atlas Demo</h1>
      <CloudAtlas config={this.state.config} />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))

// import createAtlas from '../../src'
// createAtlas('#demo', {endpoint: '//localhost:9200/fungi', articleUrl: '/testfile.json', title: 'Atlas fits here'});