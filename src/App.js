import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/auth/Login';
import Address from './views/address/Index';
import Condition from './views/condition/ConditionMainPage'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/address' element={<Address />}></Route>
          <Route exact path='/condition' element={<Condition />}></Route>
        </Routes>
      </Fragment>
    </Router>

  );
}

export default App
