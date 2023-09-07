import axios from "axios";
import React, { useState } from "react";

const UserDetails = ({ user, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${user.id}`, editedUser)
      .then((response) => {
        onUpdate(response.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .then(() => {
        onDelete(user.id);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <div>
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={editedUser.name}
              onChange={(e) =>
                setEditedUser({ ...editedUser, name: e.target.value })
              }
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={editedUser.email}
              onChange={(e) =>
                setEditedUser({ ...editedUser, email: e.target.value })
              }
            />
            {/* Add input fields for other user properties */}
            <button onClick={handleUpdate}>Update</button>
          </>
        ) : (
          <>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Display other user properties */}
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
