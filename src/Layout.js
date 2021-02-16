import React, { Component } from "react";

import logo from "./logo.svg";

import bird from "./birds.jpg";
import bird1 from "./birds1.jpg";
import bird2 from "./birds2.jpg";

import orange from "./oranges.jpg";
import orange1 from "./oranges1.jpg";
import orange2 from "./oranges2.jpg";

import mountain from "./mountain.jpg";
import mountain1 from "./mountains1.jpg";
import mountain2 from "./mountains2.jpg";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  clickButton(nextIndex) {
    this.setState({
      index: nextIndex,
    });
  }

  render() {
    var imageArr = [
      [logo, logo, logo, logo, logo],
      [bird, bird1, bird2, bird, bird2, bird1, bird],
      [orange, orange1, orange2, orange1, orange2, orange, orange1],
      [mountain, mountain1, mountain2, mountain, mountain2, mountain1],
    ];

    return (
      <div>
        <div style={{ marginTop: "50px" }}>
          <button
            style={{ margin: "10px" }}
            onClick={() => this.clickButton(0)}
          >
            React Logo
          </button>
          <button
            style={{ margin: "10px" }}
            onClick={() => this.clickButton(1)}
          >
            Birds
          </button>
          <button
            style={{ margin: "10px" }}
            onClick={() => this.clickButton(2)}
          >
            Oranges
          </button>
          <button
            style={{ margin: "10px" }}
            onClick={() => this.clickButton(3)}
          >
            Mountains
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {imageArr[this.state.index].map((picture) => {
            return <img className="img-holder" src={picture}></img>;
          })}
        </div>
      </div>
    );
  }
}

export default Layout;
