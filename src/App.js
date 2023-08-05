import React, { useState } from "react";
import axios from "axios";
import './App.css';
import Card from "./Card";

const App = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
        setUserData(null);
      });
  };

 
  return (
    <div className="container rounded-lg bg-red-500/40 mx-auto my-10 p-4 w-1/2">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded mr-2 bg-white"
          placeholder="Enter GitHub username"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Search
        </button>
      </form>

      {userData && <Card userData={userData} />}
    </div>
  );
};

export default App;