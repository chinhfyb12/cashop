import './App.css';
import React from 'react';
import Header from './common/header/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './common/footer/Footer';
import RouterURL from './RouterURL';
import Cart from './pages/cart/Cart';
import Search from './components/search/Search';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
          <RouterURL />
          <Cart />
          <Search />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
