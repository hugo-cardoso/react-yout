import React from 'react';

const Video = props => {

	return  <div className="box">
						<article className="media">
							<div className="media-left">
								<figure className="image is-64x64">
									<img src={ props.data.snippet.thumbnails.default.url } alt="Image" />
								</figure>
							</div>
							<div className="media-content">
								<div className="content">
									<p>
										<strong>{ props.data.snippet.title }</strong> <small><a href={ 'https://www.youtube.com/channel/' + props.data.snippet.channelId } target="parent">{ props.data.snippet.channelTitle }</a></small>
										<br/>
										{props.data.snippet.description}
									</p>
									<a className="button is-primary" target="parent" href={'https://www.youtube.com.br/watch?v=' + props.data.id.videoId }>VER</a>
								</div>
							</div>
						</article>
					</div>
}

export default Video;