import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "../App.css";

const Login = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="form-box">
          <form className="form">
            <span className="title">Log in</span>
            <span className="subtitle">
             
            </span>
            <div className="form-container">
              <input type="email" className="input" placeholder="Email" />
              <input type="password" className="input" placeholder="Password" />
            </div>
            <button>Login</button>
          </form>
          <div className="form-section">
            <p>
              Don't have an account? <Link to="/register">Register</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
