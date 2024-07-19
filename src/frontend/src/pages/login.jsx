import React, { useState } from "react";

function Login() {
  // State variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Update state variables when user types in input fields
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include credentials in the request
        body: JSON.stringify({ username, password }), // Send username and password as JSON
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Login successful:', data);
      // Handle login success, e.g., redirect to another page or update UI
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure, e.g., show error message
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit} style={{ color: "white" }}>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="form-control"
          placeholder="User Name"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="form-control"
          placeholder="Password"
        />
        <button type="submit" className="btn btn-lg btn-block btn-primary">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;