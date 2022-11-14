import React, { useEffect, useState } from "react";
import User from "../User/User";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>All users: {users.length}</h1>
      {users.map((user) => console.log(user))}
      <div className="users">
        {users.map((user) => (
          <User user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
