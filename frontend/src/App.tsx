import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routing/RouterApp';

import '@fortawesome/fontawesome-free/css/all.min.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <ToastContainer />
    </Router>
  );
}

export default App;
