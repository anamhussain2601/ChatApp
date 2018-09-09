import React, { Component } from "react";
import Textone from './Textone';

class TextDisplay extends Component {
    constructor(props) {
      super(props);
      console.log(props);
    }
    render() {
      return (
        <div>
            {this.props.comment}
        </div>
      );
    }
  }

export default TextDisplay;

