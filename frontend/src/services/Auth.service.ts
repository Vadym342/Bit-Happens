import { Dispatch, SetStateAction } from 'react';
import { NavigateFunction } from 'react-router-dom';

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  roleId: string;
}

export const signupUser = async (data: SignUpData, setIsSignUp: Dispatch<SetStateAction<boolean>>): Promise<void> => {
  const res = await fetch(`${process.env.APP_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Sign up failed');
  setIsSignUp(false);
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

  setIsModalOpen(false);
  navigate('/profile');
};
