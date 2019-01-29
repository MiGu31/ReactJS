import React, { Component } from 'react';
import '../styles/App.css';
import Video from '../components/util/video.component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Probando materialize</h4>
        <Video url="https://www.youtube.com/watch?v=sTJ1XwGDcA4&start_radio=1&list=RDsTJ1XwGDcA4"/>
        <Video url="https://www.youtube.com/watch?v=CdqoNKCCt7A&list=RDsTJ1XwGDcA4&index=3  "/>
        <Video url="https://www.youtube.com/watch?v=yURRmWtbTbo&list=RDsTJ1XwGDcA4&index=7"/>
      </div>
    );
  }
}

export default App;
