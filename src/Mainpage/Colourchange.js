import React, { Component } from "react";
import "../CSS/Colorchange.css"
class ColorChange extends Component {
  state = {};
  componentDidMount() {
    window.sections = [...document.querySelectorAll(".section")];
    window.lastScrollTop = window.pageYOffset;

    document.body.style.background = window.sections[0].getAttribute("data-bg");
    window.addEventListener("scroll", this.onScroll);
  }
  onScroll = () => {
    // const scrollTop = window.pageYOffset;

    const section = window.sections
      .map((section) => {
        const el = section;
        const rect = el.getBoundingClientRect();
        return { el, rect };
      })
      .find((section) => section.rect.bottom >= window.innerHeight * 0.5);
    document.body.style.background = section.el.getAttribute("data-bg");
  };

  render() {
    return (
      <div>
        <div class="section" data-bg="black">
          
        </div>
        <div class="section" data-bg="red">
         
        </div>
        <div class="section" data-bg="blue">
          
        </div>
        <div class="section" data-bGg="GREEN">
          
        </div>
        <div class="section" data-bg="magenta">
          
        </div>
        <div class="section" data-bg="#41B3A3w">
          
        </div>
      </div>
    );
  }
}

export default ColorChange;
