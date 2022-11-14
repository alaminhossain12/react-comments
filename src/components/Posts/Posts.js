import React, { useEffect, useState } from "react";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1>Posts: {posts}</h1>
    </div>
  );
};

export default Posts;
