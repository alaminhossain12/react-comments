import React from "react";
import "./User.css";

const User = (props) => {
  const { name, username, email, address } = props.user;
  return (
    <div className="user">
      <h1>User Name: {name}</h1>
      <h3>UserName: {username}</h3>
      <p>Email: {email}</p>
      <p>Address: {address.city}</p>
    </div>
  );
};

export default User;
