import React, { useState } from "react";
import "./App.css";
import Profile from "./Profile";

function App() {
  const [users, setUsers] = useState([
    { name: "Amit", email: "amit@example.com", age: 25 },
    { name: "Priya", email: "priya@example.com", age: 30 },
    { name: "Raj", email: "raj@example.com", age: 28 },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const addUser = () => {
    if (name && email && age) {
      setUsers([...users, { name, email, age: Number(age) }]);
      setName("");
      setEmail("");
      setAge("");
    }
  };

  const removeUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>User Profiles</h1>
      <div className="input-container">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        <button className="add-button" onClick={addUser}>Add User</button>
      </div>
      <div className="profiles">
        {users.map((user, index) => (
          <Profile key={index} user={user} onRemove={() => removeUser(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;