import axios from "axios";
import React, { useState } from "react";

const AddUser = ({ onAdd }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    // Add other user properties here
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((response) => {
        // Handle the new user in your UI (e.g., add to the list)
        onAdd(response.data);
        // Clear the input fields
        setNewUser({
          name: "",
          email: "",
          // Clear other user properties as well
        });
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  return (
    <div className="add-user">
      <h2>Add User</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        {/* Add input fields for other user properties */}
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
