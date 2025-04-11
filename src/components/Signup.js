import { useState } from "react";
import "../Signup.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://ecommerce-backend-4d12.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,

          email: email,
          password: password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Signup successful!");
        navigate("/login"); // or wherever you want
      } else {
        alert("Signup failed: " + (data.detail || "Unknown error"));
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };
  

  return (
    <div className="modal-overlay">
      <div className="signup-modal">
        <div className="modal-left">
          <h2>Welcome!</h2>
          <p>Join us and explore amazing collections.</p>
        </div>
        <div className="modal-right">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignup}>
                  <input
            type="text"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit">Signup</button>
          </form>
          <p>
           Already a user? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
