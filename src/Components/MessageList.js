import React, { Component } from "react";
import ReactDOM from "react-dom";
import classes from "./style.css";
import Message from "./Message";

class MessageList extends Component {
    //for autoscroll in chatbox start....
    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight +100 >= node.scrollHeight
    }
    
    componentDidUpdate() {
        if(this.shouldScrollToBottom){
        const node = ReactDOM.findDOMNode(this)
        node.scrollTop = node.scrollHeight
        }   
    }
//....for auto scroll in chatbox end
  render() {
    return (
      <div className="message-list">
        {this.props.messages.map((message, index) => {
          return (
            <Message
              key={index}
              username={message.senderId}
              text={message.text}
            />
          );
        })}
      </div>
    );
  }
}

export default MessageList;
