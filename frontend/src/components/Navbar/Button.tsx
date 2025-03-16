import React, { useState } from 'react';

import './Button.css';
import Modal from '../ModalForm/Modal';

export function Button() {
  const [modalActive, setModalActive] = useState(false);
  const [signUp, setIsSignUp] = useState(true);
  return (
    <div>
      <div className="button-container">
        <button
          className="login-btn"
          onClick={() => {
            setIsSignUp(false);
            setModalActive(true);
          }}
        >
          Log in
        </button>
        <button
          className="signup-btn"
          onClick={() => {
            setIsSignUp(true);
            setModalActive(true);
          }}
        >
          Sign Up
        </button>
      </div>
      <Modal active={modalActive} setActive={setModalActive} isSignUp={signUp} />
    </div>
  );
}
