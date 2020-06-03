import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from './Routes';
import MenuDrawer from './components/MenuDrawer';

import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Fragment>
      <Router>
        <MenuDrawer />
        <Routes />
        <ToastContainer />
      </Router>
    </Fragment>
  );
}

export default App;
