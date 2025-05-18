import React, { useEffect, useState, useContext } from 'react';
import './modal.css';
import { ToastContainer } from 'react-toastify';

import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import formImage from '../../assets/form-image.png';

import { AuthContext } from '../../pages/Profile/AuthContext';

interface ModalProps {
  active: boolean;
  setActive: (active: boolean) => void;
  isSignUp: boolean;
}

const Modal: React.FC<ModalProps> = ({ active, setActive, isSignUp }) => {
  const [signUp, setIsSignUp] = useState(isSignUp);
  const { login } = useContext(AuthContext);

  useEffect(() => {
    setIsSignUp(isSignUp);
  }, [isSignUp]);

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setActive(false)}>
          X
        </button>
        <section className="modal-layout">
          <div className="modal-form">
            {signUp ? (
              <SignUpForm setIsSignUp={setIsSignUp} />
            ) : (
              <LoginForm setIsSignUp={setIsSignUp} setIsModalOpen={setActive} onLogin={login} />
            )}
          </div>
          <div className="modal-image">
            <img src={formImage} alt="Form illustration" />
          </div>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Modal;
