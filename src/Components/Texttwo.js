import React, { Component } from "react";

class Texttwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      showComponent: false
    };
  }

  onTextChange = e => {
    this.setState({
      comment: e.target.value
    });
  };

  _handleKeyPress = e => {
    if (e.key === "Enter") {
      console.log(this.state.comment, "y");
      this.setState({
        showComponent: true
      });
    }
  };

  removetext = () => {
    this.setState({
      comment: ""
    });
    console.log('hi')
  };

  render() {
    return (
        <div style={{paddingTop: '20%' , paddingLeft:'0%'}}>
          <input
            type="text"
            value={this.state.comment}
            onChange={this.onTextChange}
            onKeyPress={this._handleKeyPress}
          />
        </div>
       
    );
  }
}

export default Texttwo;
