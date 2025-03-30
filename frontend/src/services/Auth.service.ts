import { toastError, toastSuccess } from './toast.constants';

export const loginUser = async (
  email: string,
  password: string,
  navigate: Function,
  setIsModalOpen: (isOpen: boolean) => void,
) => {
  try {
    const response = await fetch(`${process.env.APP_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      toastError('Login failed! Invalid email or password');
      throw new Error('Login failed!');
    }

    const responseData = await response.json();
    localStorage.setItem('token', responseData.token);

    toastSuccess('Login successful!');

    setTimeout(() => {
      setIsModalOpen(false);
      navigate('/');
    }, 1500);
  } catch (error) {
    console.error(error);
  }
};

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
