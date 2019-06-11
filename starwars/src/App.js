import React, { Component } from 'react';
import './App.css';
import SWCharacter from './components/SWCharacter';


// const ApiData = 'https://swapi.co/api/people/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  

  getCharacters = ApiData => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(ApiData)
      .then(res => {
          console.log(ApiData);
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };


  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars Characters</h1>
            <div className="character-list">
            {this.state.starwarsChars.map((starwarsChar, index) => {
                return <SWCharacter swcharacter={starwarsChar} key={index} />;
            })}
        </div>
      </div>
    );
  }
}

export default App;
