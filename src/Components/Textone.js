import React, { Component } from "react";
import TextDisplay from "./TextDisplay";
import Reply from "./Reply";

class Textone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment:"",
      shouldDisplayComment:false,
      commentCopy:[]
    };
  }

// we need to make a co ntrolled component first of all what we are typing in textbix should disply in textbix
//step 1 take a state comment and make it empty
//assgine the value to comment what you have typed in text bix
//to achive this we have to make a function which will called on change of input
//so till now we had made controlled component now what we will type is availble on comment state
//now on enter we need to display it withing another compojent called text disply
//we need another state to show and hide commner

onInputChange = (e)=>{
  this.setState({
    comment:e.target.value
  })
};

onEnterPress = (e)=>{
  //need to clear the input
  //just before emptify need to copy the value of comment
  if(e.key === "Enter"){
    this.setState({
      shouldDisplayComment:true,
    //  commentCopy:this.state.comment,
    commentCopy:this.state.commentCopy.push(this.state.comment),
      comment:''
    })
    console.log('print', this.state.commentCopy);
  }
};
  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <input type="text" value ={this.state.comment} onChange={this.onInputChange} onKeyPress={this.onEnterPress} />
          <Reply />
        </div>
        <div>
           {
              this.state.shouldDisplayComment ? <TextDisplay comment ={this.state.commentCopy}/> :null
           } 
        </div>
      </div>
    );
  }
}

export default Textone;
