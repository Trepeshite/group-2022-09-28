import React, { Component } from "react";

class IconCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state, props) => ({
      counter: state.counter + props.increment,
    }));
  }

  render() {
    return (
      <li>
        <img
          onClick={this.handleClick}
          src={this.props.src}
          alt="no-img"
          width="50"
          height="50"
        />
        <p>{this.state.counter}</p>
      </li>
    );
  }
}

IconCounter.defaultProps = {
  src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/noto-emoji/343/person-gesturing-no_1f645.jpg",
  increment: 1,
};

export default IconCounter;
