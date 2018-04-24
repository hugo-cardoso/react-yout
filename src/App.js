import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import { search } from './services/youtube-api';
import VideoList from './components/VideoList'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      searchText: ''
    };
  }

  searchByName( name ) {

    search(name).then(res => {
      
      PubSub.publish("SearchResult", res.data);
    });
  }

  search(e) {

    e.preventDefault();
    this.searchByName( this.state.searchText );
  }

  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <h1 className="title">
              Search
            </h1>
            <form onSubmit={ e => this.search(e)}>
              <div className="field has-addons">
                  <div className="control is-expanded">
                    <input className="input" type="text" value={ this.state.searchText } placeholder="Find a video" onChange={ (e) => this.setState({searchText: e.target.value}) } />
                  </div>
                  <div className="control">
                    <button className="button is-info" type="submit">
                      Search
                    </button>
                  </div>
              </div>
            </form>
          </div>
        </section>
        <hr/>
        <div className="container">
          <VideoList />
        </div>
      </div>
    );
  }
}

export default App;
