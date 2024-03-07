import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Account from './pages/Account';
import AvaliableOptions from './pages/AvaliableOptions';
import { Navbar } from './components/Navbar';
import { Lottery } from './pages/Lottery';
import {HoverButton} from './components/HoverButton';

const App = () => {
  return (
    <BrowserRouter>
    {/* <HoverButton
      imageUrl={'https://svgsilh.com/svg/3247458.svg'}
      altText="sq-sample20"
      iconClass="ion-android-stopwatch"
    /> */}
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