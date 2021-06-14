import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer/footer';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
     <Navbar />
     <Sidebar />
     <Home />
     <Footer />
    </Router>
  );
}

export default App;
