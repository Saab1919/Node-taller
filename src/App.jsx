import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './features/dashboard/pages/HomePage.jsx';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
