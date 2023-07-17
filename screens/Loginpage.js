import React, { useState } from 'react';

const LoginPage = ({ setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., validating credentials)
    // Once logged in, set the loggedIn state to true
    setLoggedIn(true);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
