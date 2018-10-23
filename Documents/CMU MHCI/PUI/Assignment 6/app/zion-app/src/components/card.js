import React, { Component } from 'react';


class Card extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="Card">
      {this.props.trail.name.length > 0 &&
        <h1>{this.props.trail.name}</h1>
      }
      </div>
    );
  }
}

export default Card;
