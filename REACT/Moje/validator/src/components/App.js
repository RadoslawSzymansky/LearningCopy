import React from 'react';
import '../styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar'
import Page from './Page'
import Footer from './Footer'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="main">
        <Navbar />
        <Page />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
