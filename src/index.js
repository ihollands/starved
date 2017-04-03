import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';
import './index.css';

const post = {
  title: "Harambe",
  author: "Alex Manno",
  body: "Have you ever heard of this Harambe dude? I mean, he doesn't really do much of anything, and then he goes to eat some dumb boy who LITERALLY climbs himself into Harambe's little grazing paddock and BOOM. Shot him dead, they did.",
  comments: [
    "Harambe sucks",
    "Fuck Harambe!",
    "Inane comment from someone I have little doubt is a Trump supporter"
  ]
}

ReactDOM.render(
  <Post
    title={post.title}
    author={post.author}
    body={post.body}
    comments={post.comments}
  />,
  document.getElementById('root')
);
