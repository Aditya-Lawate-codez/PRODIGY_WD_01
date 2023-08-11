import React from 'react';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';  // Update this line
import Features from './components/Features';  // Update this line
import Contact from './Components/Contact';
import AboutPage from './components/AboutPage';  // Update this line

import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

      // <Router>
      //   <Route exact path="/" element={<HomePage />} />  {/* Updated render to element */}
      //   <Route exact path="/about" element={<AboutPage />} />  {/* Updated render to element */}
      //   <Route exact path="/features" element={<Features />} />  {/* Updated render to element */}
      // </Router>