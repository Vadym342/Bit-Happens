import React, { useContext, useState } from 'react';
import './Button.css';
import Modal from '../ModalForm/Modal';
import { AuthContext } from '../../pages/Profile/AuthContext';
import UserIcon from '../../pages/Profile/UserIcon';

export function Button() {
  const { user, logout } = useContext(AuthContext);

  const [modalActive, setModalActive] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const openLogin = () => {
    setIsSignUp(false);
    setModalActive(true);
  };
  const openSignUp = () => {
    setIsSignUp(true);
    setModalActive(true);
  };

  return (
    <header className="app-header">
      <nav>
        <div className="nav-controls">
          {!user ? (
            <>
              <button className="login-btn" onClick={openLogin}>
                Log in
              </button>
              <button className="signup-btn" onClick={openSignUp}>
                Sign Up
              </button>
            </>
          ) : (
            <>
              <UserIcon></UserIcon>
              <button className="login-btn" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      <Modal active={modalActive} setActive={setModalActive} isSignUp={isSignUp} />
    </header>
  );
}
