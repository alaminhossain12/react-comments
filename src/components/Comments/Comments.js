import React, { useEffect, useState } from "react";
import Comment from "../Comment/Comment";
import "./Comments.css";

const Comments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <div>
      <h1>All Comments: {comments.length}</h1>
      {/* {comments.map((comment) => console.log(comment))} */}
      <div className="comments">
        {comments.map((comment) => (
          <Comment comment={comment}></Comment>
        ))}
      </div>
    </div>
  );
};

export default Comments;
