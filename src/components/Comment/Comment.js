import React from "react";
import "./Comment.css";

const Comment = (props) => {
  const { id, name, email, body } = props.comment;
  return (
    <div className="comment">
      <h1>Comments ID: {id}</h1>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Body: {body}</p>
    </div>
  );
};

export default Comment;
