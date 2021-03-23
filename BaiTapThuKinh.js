import React, { Component } from "react";

export default class BaiTapThuKinh extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./img/glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./img/glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./img/glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./img/glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./img/glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./img/glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    id: 9,
    price: 30,
    name: "",
    url: "",
    desc: "",
  };
  rederMatKinh = () => {
    return this.arrProduct.map((matKinh, index) => {
      return (
        <div key={index} className="col-2">
          <button
            onClick={() => {
              this.setState({
                url: matKinh.url,
                name: matKinh.name,
                desc: matKinh.desc,
              });
            }}
            className="btn"
          >
            <img
              onClick={() => {}}
              width="100%"
              src={matKinh.url}
              alt={matKinh.name}
            />
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 mt-4">
            <div style={{ position: "relative" }}>
              <img width="100%" src="./img/glassesImage/model.jpg" alt="" />
              <img
                style={{
                  position: "absolute",
                  width: " 64%",
                  overflow: "hidden",
                  left: " 63px",
                  top: "110px",
                }}
                src={this.state.url}
                alt={this.state.name}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-19px",
                  backgroundColor: "rosybrown",
                }}
              >
                <h3 style={{ color: "red" }}>{this.state.name}</h3>
                <p style={{ color: "white" }}>{this.state.desc}</p>
              </div>
            </div>
          </div>

          <div className="col-4"></div>
          <div className="col-4 mt-4">
            <img width="100%" src="./img/glassesImage/model.jpg" alt="" />
          </div>
          <div className="row mt-4">{this.rederMatKinh()}</div>
        </div>
      </div>
    );
  }
}
