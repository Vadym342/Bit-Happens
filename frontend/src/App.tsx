import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routing/RouterApp';

import '@fortawesome/fontawesome-free/css/all.min.css';

import store from './redux/store';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="layout">
          <Navbar />
          <main className="main-content">
            <AppRoutes />
          </main>
          <Footer />
        </div>
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
