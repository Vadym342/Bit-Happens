import React, { useContext, useEffect } from 'react';

import defaultAvatar from '../../assets/profile_default_photo.png';

import { AuthContext } from './AuthContext';
import './Profile.css';

const interestsList = [
  'Film Production',
  'Industry Design',
  'Graphic Design',
  'Animation',
  'Photography',
  'IT&Software',
  'Game Art',
  'CG | VFX',
  'Environment Design',
  'Concept Design',
  'C4D',
];

const Profile = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-sidebar">
          <div className="profile-avatar-section">
            <img src={defaultAvatar} alt="User avatar" className="profile-avatar" />
            <h2>
              {user?.firstName} {user?.lastName}
            </h2>
            <p className="profile-id">ID: {user?.id.slice(0, 6)}</p>
          </div>
          <ul className="profile-nav">
            <li className="active">Profile</li>
            <li>Learning History</li>
            <li>Purchase History</li>
            <li>Follow</li>
            <li>Notifications</li>
            <li>Account</li>
          </ul>
        </div>

        <div className="profile-form-section">
          <h2>Profile</h2>
          <div className="form-header">
            <div className="form-avatar">
              <img src={defaultAvatar} alt="Avatar" />
              <a href="#">Change</a>
            </div>
            <div className="form-buttons">
              <button type="button" className="cancel-btn">
                Cancel
              </button>
              <button type="submit" className="done-btn">
                Done
              </button>
            </div>
          </div>

          <form className="profile-settings">
            <label>Full name</label>
            <input type="text" placeholder={`${user?.firstName} ${user?.lastName}`} />

            <label>Email</label>
            <input type="text" placeholder={user?.email} />

            <label>Choose your interest</label>
            <div className="interest-grid">
              {interestsList.map((interest) => (
                <label key={interest} className="interest-item custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span>{interest}</span>
                </label>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
