import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Globe from './components/Globe'

class App extends Component {
    render() {

        const layers = [
          'eox-sentinal2-labels',
          'coordinates',
          'view-controls',
          'stars',
          'atmosphere-day-night'
        ];
    
        return (
          <div className='fullscreen'>
            <Globe 
              ref={this.globeRef}
              layers={layers}
              latitude={34.2}
              longitude={-119.2}
              altitude={10e6} 
            />
          </div>
        )
      }
}

ReactDOM.render(<App />, document.getElementById('root'))
