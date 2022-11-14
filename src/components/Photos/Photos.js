import React, { useEffect, useState } from "react";
import Photo from "../Photo/Photo";
import "./Photos.css";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div>
      <h1>Available Photos: {photos.length}</h1>
      {photos.map((photo) => console.log(photo))}
      <div className="photos">
        {photos.map((photo) => (
          <Photo photo={photo}></Photo>
        ))}
      </div>
    </div>
  );
};

export default Photos;
