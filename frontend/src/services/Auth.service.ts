import { Bounce, toast } from 'react-toastify';

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
      toast.error('Login failed! Invalid email or password', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      throw new Error('Login failed!');
    }

    const responseData = await response.json();
    localStorage.setItem('token', responseData.token);

    toast.success('Login successful!', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });

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
      toast.error('Sign up failed! This email is already in use.', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      throw new Error('Signup failed!');
    }

    if (response.ok) {
      toast.success('Signup successfully!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    }

    setIsSignUp(false);
  } catch (error) {
    console.error(error);
  }
};
