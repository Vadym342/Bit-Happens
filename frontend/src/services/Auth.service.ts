import { NavigateFunction } from 'react-router-dom';
import { toastError, toastSuccess } from './toast.constants';

export const signupUser = async (data: any, setIsSignUp: (isSignUp: boolean) => void) => {
  const formattedData = {
    ...data,
    age: Number(data.age),
    roleId: data.roleId == '1' ? 'student' : 'teacher',
  };

  try {
    const response = await fetch(`${process.env.APP_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formattedData),
    });

    if (!response.ok) {
      toastError('Sign up failed! This email is already in use.');
      throw new Error('Signup failed!');
    }

    if (response.ok) {
      toastSuccess('Signup successfully!');
    }

    setIsSignUp(false);
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (
  email: string,
  password: string,
  navigate: NavigateFunction,
  setIsModalOpen: (open: boolean) => void,
  onLogin: (token: string) => void,
): Promise<void> => {
  const res = await fetch(`${process.env.APP_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error('Login failed');

  const data = await res.json();
  const { token } = data;
  if (!token) throw new Error('No token in response');

  localStorage.setItem('token', token);
  onLogin(token);

  toastSuccess('Login successful');
  setIsModalOpen(false);
  navigate('/profile');
};
