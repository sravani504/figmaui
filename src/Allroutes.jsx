import React from 'react';
import { Routes,Route } from 'react-router-dom'
import Counselling from './components/counselling/Counselling';

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/Counselling" element={<Counselling/>}/>
    </Routes>
  );
}

export default Allroutes;
