import React from 'react';

import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routing/RouterApp';

import '@fortawesome/fontawesome-free/css/all.min.css';

import store from './redux/store';

function App() {
  return (
    <Router>
      <Navbar />
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </Router>
  );
}

export default App;
