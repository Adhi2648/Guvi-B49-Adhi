import axios from "axios";
import React, { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li
            className="names"
            key={user.id}
            onClick={() => handleUserClick(user)}
          >
            {user.name}
          </li>
        ))}
      </ul>
      {selectedUser && <UserDetails user={selectedUser} />}
    </div>
  );
};

export default UserList;
