import React, { Component } from 'react';
import mountains from './images/mountains.svg';
import pin from './images/pin.svg';
import clock from './images/clock.svg';
import pack from './images/pack.svg';



class Card extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="Card">
      <div className="landmark">
        {this.props.trail.attributes.imgUrl}
      </div>
      {this.props.trail.name.length > 0 &&

        <div className="details">
          <h1>{this.props.trail.name}</h1>
          <ul className="hikeInfo">
            <li><img src={mountains}/>{this.props.trail.attributes.difficulty}</li>
            <li><img src={pin}/>{this.props.trail.attributes.distance}</li>
            <li><img src={clock}/>{this.props.trail.attributes.duration}</li>
            <li><img src={pack}/><p>{this.props.trail.attributes.supplies}</p></li>
          </ul>
        </div>
      }
      </div>
    );
  }
}

export default Card;

// <li><img src='./images/mountains.svg'/>{this.props.trail.attributes.difficulty}</li>
// <li><img src='./images/pin.svg'/>{this.props.trail.attributes.distance}</li>
// <li><img src='./images/clock.svg'/>{this.props.trail.attributes.duration}</li>
// <li><img src='./images/pack.svg'/>{this.props.trail.attributes.supplies}</li>
