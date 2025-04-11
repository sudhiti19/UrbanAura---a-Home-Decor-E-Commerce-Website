import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem("token", data.access_token || "dummy");  // adjust if needed
        navigate("/");
      } else {
        alert("Login failed: " + (data.detail || "Unknown error"));
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoggingIn(false);
    }
  };
  

  return (
    <div className="modal-overlay">
      <div className="login-container">
        <div className="login-left">
          <h2>Welcome Back</h2>
          <p>Please log in to continue.</p>
        </div>
        <div className="login-right">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={isLoggingIn}>
              {isLoggingIn ? "Logging in..." : "Login"}
            </button>
          </form>
          <p>
            Not an existing user? <a href="/signup">Signup</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
