import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/login/Login';
import ThankYou from './components/login/Thankyou';

function App() {
  return (
    <div>
    <BrowserRouter basename="/mxlfleet">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
