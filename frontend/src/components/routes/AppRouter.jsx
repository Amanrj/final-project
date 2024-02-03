// AppRoutes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import PrivateRoutes from './PrivateRoutes';
import About from '../About';
import Favorites from '../Favorites';
import Tickets from '../Tickets';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tickets' element={<PrivateRoutes><Tickets/></PrivateRoutes>} />
      <Route path='/about' element={<About />} />
      <Route path='/favorites' element={<PrivateRoutes>  <Favorites /></PrivateRoutes>} />
    </Routes>
  );
};

export default AppRouter;
