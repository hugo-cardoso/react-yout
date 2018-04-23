import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class VideoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    
    PubSub.subscribe('Teste', (msg, data) => {
      
      console.log(data.items);
      this.setState({list: data.items})
    });
  }

  render() {
    return (
      <div className="VideoList">
        
        { this.state.list.map(video => {

          return  <div className="box" key={video.etag}>
                    <article className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                          <img src={ video.snippet.thumbnails.default.url } alt="Image" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>{ video.snippet.title }</strong> <small>{ video.snippet.channelTitle }</small> <small>31m</small>
                            <br/>
                            {video.snippet.description}
                          </p>
                          <a className="button is-primary" target="parent" href={'https://www.youtube.com.br/watch?v=' + video.id.videoId }>VER</a>
                        </div>
                      </div>
                    </article>
                  </div>

        }) }

      </div>
    );
  }
}

export default VideoList;