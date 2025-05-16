import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routing/RouterApp';

import '@fortawesome/fontawesome-free/css/all.min.css';

import store from './redux/store';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <div className="layout">
        <Navbar />
        <Provider store={store}>
          <main className="main-content">
            <AppRoutes />
          </main>
        </Provider>
        <Footer />
      </div>
      <Navbar />
      <AppRoutes />
      <ToastContainer />
    </Router>
  );
}

export default App;
