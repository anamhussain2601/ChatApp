import React, { Component } from "react";
import Texttwo from './Texttwo';

class Reply extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showComponent: false
      };
  }

  onReply = e => {
    this.setState({
        showComponent:true
    });
  };


  render() {
    return (
      <div>
        <button onClick={this.onReply}>Reply</button>

        {/* {this.state.showComponent? <Texttwo/> : null} */}
      </div>
    );
  }
}

export default Reply;
