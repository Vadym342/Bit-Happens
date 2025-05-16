import React from 'react';

import { useNavigate } from 'react-router-dom';

import './lecturer-button.css';

export const LecturerButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/be-lecturer');
  };

  return (
    <div className="center">
      <button className="lecturer-btn" onClick={handleClick}>
        Be Our Lecturer
      </button>
    </div>
  );
};
