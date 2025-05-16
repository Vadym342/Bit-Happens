import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/Auth.service';

interface LoginFormProps {
  setIsSignUp: (isSignUp: boolean) => void;
  setIsModalOpen: (isOpen: boolean) => void;
  onLogin: (token: string) => void;
}

interface IFormInput {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ setIsSignUp, setIsModalOpen, onLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await loginUser(data.email, data.password, navigate, setIsModalOpen, onLogin);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal-form-login">
      <div className="modal-form-field">
        <h4 className="modal-form-title">Log in to your Account</h4>
        <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            className="modal-field-input"
            placeholder="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p className="error-text">{errors.email.message}</p>}

          <input
            type="password"
            className="modal-field-input"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
            })}
          />
          {errors.password && <p className="error-text">{errors.password.message}</p>}

          <button type="submit" className="modal-form-btn">
            Log In
          </button>
          <p className="modal-form-text">
            Don't have an account?{' '}
            <span onClick={() => setIsSignUp(true)} className="toggle-link">
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
