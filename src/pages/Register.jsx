import React from 'react'
import { Link } from "react-router-dom"; // Import Link from React Router
import "../App.css";


const Register = () => {
  return (
   <>
      <div className="flex items-center">
        <div className="form-box">
          <form className="form">
            <span className="title">Register</span>
            <span className="subtitle">
             
            </span>
            <div className="form-container">
              <input type="text" className="input" placeholder="Full name" />
              <input type="email" className="input" placeholder="Email" />
              <input type="password" className="input" placeholder="Password" />
            </div>
            <button>Login</button>
          </form>
          <div className="form-section">
            <p>
              Already have an account? <Link to="/login">login</Link>{" "}
            </p>
          </div>
        </div>
      </div>
   </>
  )
}

export default Register