import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer/footer';

function App() {
  return (
    <Router>
     <Navbar />
     <Footer />
    </Router>
  );
}

export default App;
