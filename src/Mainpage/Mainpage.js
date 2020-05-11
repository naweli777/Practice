import React, { Component } from 'react';
import Imagecopy from './Imagecopy';
import Colorchange from './Colourchange';


class Mainpage extends Component {
  render() {
    return (
      <div  >
        <Imagecopy animDuration={1} />
        <Colorchange/>
      </div>
    )
  }
}
export default Mainpage;