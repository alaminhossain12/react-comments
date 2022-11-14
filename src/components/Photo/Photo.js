import React from "react";
import "./Photo.css";

const Photo = (props) => {
  const { id, title, thumbnailUrl } = props.photo;
  return (
    <div className="photo">
      <img src={thumbnailUrl} alt="" />
      <h1>ID: {id}</h1>
      <h2>Name: {title}</h2>
    </div>
  );
};

export default Photo;
