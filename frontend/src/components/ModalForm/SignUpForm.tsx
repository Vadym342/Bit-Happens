import React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import { signupUser } from '../../services/Auth.service';

interface SignUpFormProps {
  setIsSignUp: (isSignUp: boolean) => void;
}

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  roleId: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ setIsSignUp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await signupUser(data, setIsSignUp);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal-form-signup">
      <div className="modal-form-field">
        <h4 className="modal-form-title">Sign Up and Start Learning</h4>

        <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="modal-field-input"
            placeholder="First name"
            {...register('firstName', {
              required: 'First name is required',
              minLength: { value: 2, message: 'At least 2 symbols required' },
              maxLength: { value: 100, message: 'Cannot exceed 100 symbols' },
              pattern: { value: /^[A-Za-z]+$/i, message: 'Alphabetical only' },
            })}
          />
          {errors.firstName && <p className="error-text">{errors.firstName.message}</p>}

          <input
            className="modal-field-input"
            placeholder="Last name"
            {...register('lastName', {
              required: 'Last name is required',
              minLength: { value: 2, message: 'At least 2 symbols required' },
              maxLength: { value: 100, message: 'Cannot exceed 100 symbols' },
              pattern: { value: /^[A-Za-z\s]+$/i, message: 'Alphabetical only' },
            })}
          />
          {errors.lastName && <p className="error-text">{errors.lastName.message}</p>}

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
            type="number"
            className="modal-field-input"
            placeholder="Age"
            {...register('age', {
              required: 'Age is required',
              min: { value: 18, message: 'Must be at least 18 years old' },
              max: { value: 99, message: 'Must be under 99 years old' },
            })}
          />
          {errors.age && <p className="error-text">{errors.age.message}</p>}

          <input
            type="password"
            className="modal-field-input"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 symbols' },
            })}
          />
          {errors.password && <p className="error-text">{errors.password.message}</p>}

          <select
            className="modal-field-select"
            {...register('roleId', {
              required: 'Role is required',
              validate: (value) => value === '1' || value === '2',
            })}
          >
            <option value="">Select role</option>
            <option value="1">Student</option>
            <option value="2">Teacher</option>
          </select>
          {errors.roleId && <p className="error-text">{errors.roleId.message}</p>}

          <button type="submit" className="modal-form-btn">
            Sign Up
          </button>
        </form>

        <p className="modal-form-text">
          Already have an account?{' '}
          <span onClick={() => setIsSignUp(false)} className="toggle-link">
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
