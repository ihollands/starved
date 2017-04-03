//bring in React and Component instance from react
import React, { Component } from 'react';

//load in Comment Component
import Comment from './Comment'

class Post extends Component {
  constructor (props) {
    super()
    this.state = {
      body: props.body
    }
  }
  handleClick (e) {
    //setState isinherited form the Component class
    let input = document.getElementById("editInput")
    this.setState({
      body: input.value
    })
    input.value = ""
  }
  render() {
    let comments = this.props.comments.map((comment,index) => (
      <Comment body={comment} key={index} />
    ))
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3><i>{this.props.author}</i></h3>
        <p>{this.state.body}</p>
        <input id="editInput" type="text" placeholder="Edit Post..."/>
        <button onClick={(e) => this.handleClick(e)}>Edit Post</button>
        <p><b>Comments:</b></p>
        {comments}
      </div>
    );
  }
}

export default Post;
