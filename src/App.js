import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Account from './pages/Account';
import AvaliableOptions from './pages/AvaliableOptions';
import { Navbar } from './components/Navbar';
import { Modal } from './components/Modal';
import { Lottery } from './pages/Lottery';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Account />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/AvaliableOptions" element={<AvaliableOptions />} />
          <Route path="/AvaliableOptions/Lottery" element={<Lottery />} /> 
        </Routes>
      </Sidebar>
    </BrowserRouter>
   
  );
};

export default App;