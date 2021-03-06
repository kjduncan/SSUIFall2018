import React, { Component } from 'react';
import Card from './card.js';
import './App.css';
import background from './images/zion.png';

import angels from './images/angels.png';
import narrows from './images/narrows.png';
import grotto from './images/grotto.png';
import emerald from './images/emerald.png';
import weep from './images/weep.png';
import watchman from './images/watchman.png';



let trails = [
  {
    name: 'Angels Landing',
    attributes: {
      difficulty: '10',
      duration: '10:00',
      distance: 4.8,
      supplies: 'water, boots, backpack, sunscreen, hat',
      imgSrc: angels
    }
  },
  {
    name: 'Narrows',
    attributes: {
      difficulty: 2,
      duration: '2:12',
      distance: 2.2,
      supplies: 'water, boots, backpack, sunscreen, hat',
      imgSrc: narrows
    }
  },
  {
    name: 'Grotto Trail',
    attributes: {
      difficulty: 2,
      duration: '2:12',
      distance: 2.2,
      supplies: 'water, boots, backpack, sunscreen, hat',
      imgSrc: grotto
    }
  },
  {
    name: 'Emerald Pools',
    attributes: {
      difficulty: 3,
      duration: '2:12',
      distance: 2.2,
      supplies: 'water, boots, backpack, sunscreen, hat',
      imgSrc: emerald
    }
  },
  {
    name: 'Weeping Rock',
    attributes: {
      difficulty: 4,
      duration: '2:12',
      distance: 2.2,
      supplies: 'water, boots, backpack, sunscreen, hat',
      imgSrc: weep
    }
  },
  {
    name: 'Watchman Trail',
    attributes: {
      difficulty: 5,
      duration: '2:12',
      distance: 2.2,
      supplies: 'water, boots, backpack, sunscreen, hat',
      imgSrc: watchman
    }
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTrail:{}};
  }

  selectedTrail = (trail) => {
    // console.warn(trail);
    this.setState({
      selectedTrail: trail
    });
  }


  render() {
    return (
      <div className="App" >
      <div className="container">
        <nav>
          <ul>
            <button onClick={() => {this.selectedTrail(trails[0])}}><li>Angels Landing</li></button>
            <button onClick={() => {this.selectedTrail(trails[1])}}><li>Narrows</li></button>
            <button onClick={() => {this.selectedTrail(trails[2])}}><li>Grotto Trail</li></button>
            <button onClick={() => {this.selectedTrail(trails[3])}}><li>Emerald Pools</li></button>
            <button onClick={() => {this.selectedTrail(trails[4])}}><li>Weeping Rock</li></button>
            <button onClick={() => {this.selectedTrail(trails[5])}}><li>Watchman Trail</li></button>
          </ul>
        </nav>
        <div className="main" style={{backgroundImage: `url(${background})`}}>
          <h1>Zion</h1>
        </div>
        </div>




        {this.state.selectedTrail.name &&
            <Card trail={this.state.selectedTrail} cardClose={this.selectedTrail} />
        }

      </div>
    );
  }
}

export default App;
