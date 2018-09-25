import React, {Component} from 'react'
import {render} from 'react-dom'
import {CloudAtlas} from '../../src'

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        endpoint: '//localhost:9200/fungi', 
        articleUrl: '/about.json', 
        title:"Demo atlas",
        menu: [
          {
            name: 'about',
            url: '/about.json'
          },
          {
            name: 'latest news story',
            url: '/news.json'
          }
        ]
      }
    };
  }

  render() {
    return <CloudAtlas config={this.state.config} theme={{colorPrimary: 'pink'}}/>
  }
}

render(<Demo/>, document.querySelector('#demo'))

// import createAtlas from '../../src'
// createAtlas('#demo', {endpoint: '//localhost:9200/fungi', articleUrl: '/testfile.json', title: 'Atlas fits here'});