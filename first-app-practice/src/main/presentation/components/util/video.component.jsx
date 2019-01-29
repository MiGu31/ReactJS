import React, { Component } from 'react';

class Video  extends Component {
    render() {
      return (
        <div>
            <div class="video-container">
                <iframe width="853" height="480" src={this.props.url} frameborder="0" allowfullscreen title="video-test"></iframe>
            </div>
        </div>
      );
    }
  }
  
export default Video;