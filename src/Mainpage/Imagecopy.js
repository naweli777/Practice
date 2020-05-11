import React, { Component } from "react";
import Imagecopy from "../CSS/Imagecopy.css";


import black2 from "../Imagess/black2.jpg";
import black3 from "../Imagess/black3.jpg";
import black4 from "../Imagess/black4.jpg";

class Image extends Component {
  state = {
    backgroundIndex: 0,
    backgrounds: [black2, black3, black4],
  };
  componentDidMount() {
    this.timeout = setTimeout(
      this.changeBackground,
      this.props.animDuration * 1000
    );
  }

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout);
  }
  changeBackground = () => {
    this.setState(
      ({ backgroundIndex }) => {
        const nextBackgroundIndex =
          ++backgroundIndex % this.state.backgrounds.length;

        return { backgroundIndex: nextBackgroundIndex };
      },
      () => {
        this.timeout = setTimeout(
          this.changeBackground,
          this.props.animDuration * 1000
        );
      }
    );
  };
  render() {
   
    return (
        <>
      <div className ="changeimage">
        <img src={this.state.backgrounds[this.state.backgroundIndex]}
          alt="blank"
        />
      </div>
      <div className ="Introcontent">
          <h1>The content </h1>
      </div>
      </>
    );
  }
}

export default Image;
