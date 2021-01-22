import './App.css';
import React from 'react';
import Header from './common/header/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './common/footer/Footer';
import SignUp from './pages/signup/SignUp.page';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <SignUp />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
