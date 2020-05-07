import React from "react";
import "./Mainpage.css";
import Card from "@material-ui/core/Card";

class Mainpage extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      scrolling: true,
    };
  }
  handlefirst() {
    this.setState({
      iscardf: true,
      iscards: false,
      iscardt: false,
    });
  }
  handlesecond() {
    this.setState({
      iscardf: false,
      iscards: true,
      iscardt: false,
    });
  }
  handlethirdt() {
    this.setState({
      iscardf: false,
      iscards: false,
      iscardt: true,
    });
  }

  componentDidMount() {
    this.timeout = setTimeout(
      this.changeBackground,
      this.props.animDuration * 1000
    );

    window.addEventListener("scroll", this.colorchange);
  }
 
  
  
  colorchange = (event) => {
    if (window.scrollY === 0 && this.scrolling === true) {
      this.setState({ scrolling: true });
    } else if (window.scrollY === 0 && this.scrolling !== true) {
      this.setState({ scrolling: false });
    }
  };

  render() {
    return (
      <>
        <div className="herodiv">
          <img src={require("../Imagess/meeee.jpg")} className="mainImage" />
        </div>

        <h1 className="contentheading">This is Naweli Verma</h1>
        <div
          style={{ backgroundColor: this.state.scrolling ? "black" : "yellow" }}
          className={this.state.scrolling ? "colorChange" : "Change"}
        >
          {" "}
          <p>
            {" "}
            kab se kosis kar rahi hu bnanae ka. jaldi ban jae kuch toh anadar se
            achhi feling aaye. <br />
            kab se kosis kar rahi hu bnanae ka. jaldi ban jae kuch toh anadar se
            achhi feling aaye. <br />
            kab se kosis kar rahi hu bnanae ka. jaldi ban jae kuch toh anadar se
            achhi feling aaye. <br />
            kab se kosis kar rahi hu bnanae ka. jaldi ban jae kuch toh anadar se
            achhi feling aaye. <br />
            kab se kosis kar rahi hu bnanae ka. jaldi ban jae kuch toh anadar se
            achhi feling aaye. <br />
            kab se kosis kar rahi hu bnanae ka. jaldi ban jae kuch toh anadar se
            achhi feling aaye. <br />
            kab se kosis kar rahi hu bnanae ka. jaldi ban jae kuch toh anadar se
            achhi feling aaye. <br />
            kab se kosis kar rahi hu bnanae ka. jaldi ban jae kuch toh anadar se
            achhi feling aaye. <br />
          </p>
        </div>

        <Card className="cards">
          <h2>movie</h2>
        </Card>
        <br />
        <Card className="cards">
          <h2>movie</h2>
        </Card>
        <br />
        <Card className="cards">
          <h2>movie</h2>
        </Card>
        <p>check it out</p>
      </>
    );
  }
}

export default Mainpage;
