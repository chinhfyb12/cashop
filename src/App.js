import './App.css';
import React from 'react';
import Header from './common/header/Header';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
      </div>
    </Router>
  );
}

export default App;
