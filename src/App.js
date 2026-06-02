import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<><Header /><Main /></>} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
