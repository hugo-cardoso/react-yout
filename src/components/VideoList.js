import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import Video from './Video';

class VideoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    
    PubSub.subscribe('SearchResult', (msg, data) => {
      
      this.setState({list: data.items})
    });
  }

  render() {
    return (
      <div className="VideoList">
        
        { this.state.list.map(video => {

          return  <Video data={ video } key={ video.id.videoId }/>

        }) }

      </div>
    );
  }
}

export default VideoList;