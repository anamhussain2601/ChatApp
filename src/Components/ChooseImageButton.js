import React, { Component } from "react";

class Picture extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  btnclick=()=>{
    alert('choose picture');
  }
  render() {
    return (
     <button onClick= {this.btnclick}>Choose Picture</button>
    );
  }
}

export default Picture;
