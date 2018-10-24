import React, { Component } from 'react';
import mountains from './images/mountains.svg';
import pin from './images/pin.svg';
import clock from './images/clock.svg';
import pack from './images/pack.svg';
// import ReactDOM from "react-dom";



class Card extends Component {


  render() {
    return (
      <div className="mother">

        <div className="Card">
          <div>
            <button className="close" onClick={() => {this.props.cardClose({})}}>X</button>
          </div>
          <div className="landmark">
            <img src={this.props.trail.attributes.imgSrc}/>
          </div>

            <div className="details">
              <h1>{this.props.trail.name}</h1>
              <ul className="hikeInfo">
                <li><img src={mountains}/>{this.props.trail.attributes.difficulty}</li>
                <li><img src={pin}/>{this.props.trail.attributes.distance}</li>
                <li><img src={clock}/>{this.props.trail.attributes.duration}</li>
                <li><img src={pack}/><p>{this.props.trail.attributes.supplies}</p></li>
              </ul>
          </div>
        </div>
        <div className="darkBackground"></div>
      </div>
    );
  }
}

export default Card;
