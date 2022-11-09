import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import Child from "./Child";

export default class Parent extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: 21,
      showAge: false,
      emps: ["alex", "tony", "anne"],
    };

    this.namechange.bind(this);
  }

  // Arrow Key Method
  namechange1 = () => {
    this.setState({ name: "alex" });
  };

  // Function decleration
  namechange = function () {
    console.log(this);
    this.setState({ name: "alex" });
  };

  onChangeHandler = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    let age;
    if (this.state.showAge) {
      age = <p>Age: {this.state.age}</p>;
    }
    return (
      <div>
        <div></div>
        <Link to="/home">Home</Link>
        <Link to="/help">Help</Link>

        <Outlet></Outlet>
        
        Name Value: {this.state.name}
        Name:{" "}
        <input
          name="name"
          value={this.state.name}
          onChange={this.onChangeHandler}
        ></input>
        {/* <p>Name: {this.state.name}</p> */}
        {/* {this.state.showAge && <p>Age: {this.state.age}</p>} */}
        {age}
        {/* <button onClick={() => this.namechange()}>change</button> */}
        {/* {this.state.emps.map((emp, index) => {
          return (
            <div key={emp}>
              <b>
                {emp} - {index}
              </b>
            </div>
          );
        })} */}
      </div>
    );
  }
}
