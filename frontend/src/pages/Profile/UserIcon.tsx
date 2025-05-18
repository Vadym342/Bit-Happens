import React from 'react';
import { Link } from 'react-router-dom';
import defaultAvatar from '../../assets/profile_default_photo.png';
import './UserIcon.css';

export default function UserIcon() {
  return (
    <Link to="/profile">
      <img src={defaultAvatar} alt="User avatar" className="user-icon" />
    </Link>
  );
}
