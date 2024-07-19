import React, { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      // Handle success (e.g., redirect to login page)
    } catch (error) {
      console.error('Registration failed:', error);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="User Name"
          required
        />
        <br />
        <input
          type="email"
            name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
        />
        <br />
        <input
          type="password"
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <br />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
        <br />
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;