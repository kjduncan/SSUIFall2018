import React, { Component } from 'react';
import mountains from './images/mountains.svg';
import pin from './images/pin.svg';
import clock from './images/clock.svg';
import pack from './images/pack.svg';
import angels from './images/angels.png';
import ReactDOM from "react-dom";



class Card extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {selectedTrail:{}};
  // }
  //
  // selectedTrail = (trail) => {
  //   // console.warn(trail);
  //   this.setState({
  //     selectedTrail: trail
  //   });
  // }
  state = { show: false };

  selectedTrail = () => {
    this.setState({ show: true});
  };

  selectedTrail = (trail) => {
    this.setState({ selectedTrail: trail, show: false });
  };

  render() {
    return (
      <div className="Card">
      <div>
        <button className="close" onClick={this.selectedTrail}>X</button>
      </div>
      <div className="landmark">
        <img src={angels}/>
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

const container = document.createElement("div");
document.body.appendChild(container);
// ReactDOM.render(<Dashboard />, container);
export default Card;

// <li><img src='./images/mountains.svg'/>{this.props.trail.attributes.difficulty}</li>
// <li><img src='./images/pin.svg'/>{this.props.trail.attributes.distance}</li>
// <li><img src='./images/clock.svg'/>{this.props.trail.attributes.duration}</li>
// <li><img src='./images/pack.svg'/>{this.props.trail.attributes.supplies}</li>
