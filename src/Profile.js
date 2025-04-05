import React from "react";
import "./App.css";

function Profile({ user, onRemove }) {
  return (
    <div className="profile-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>Age: {user.age}</p>
      <button className="remove-button" onClick={onRemove}>✖</button>
    </div>
  );
}

export default Profile;
