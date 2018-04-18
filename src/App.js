import React, { Component } from 'react';
import { search } from './services/youtube-api';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      searchText: ''
    };
  }

  searchByName( name ) {

    search(name).then(res => window.console.log(res.data));
  }

  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <h1 className="title">
              Search
            </h1>
            <div className="field has-addons">
              <div className="control is-expanded">
                <input className="input" type="text" value={ this.state.searchText } placeholder="Find a repository" onChange={ (e) => this.setState({searchText: e.target.value}) } />
              </div>
              <div className="control">
                <a className="button is-info" onClick={ () => this.searchByName(this.state.searchText)}>
                  Search
                </a>
              </div>
            </div>
          </div>
        </section>
        <hr/>
      </div>
    );
  }
}

export default App;
