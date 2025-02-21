import React from 'react';

import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <div className="button-container">
      <Link to="/login">
        <button className="login-btn">Log in</button>
      </Link>
      <Link to="/sign-up">
        <button className="signup-btn">Sign Up</button>
      </Link>
    </div>
  );
}
