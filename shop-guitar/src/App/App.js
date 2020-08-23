import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import RouterURL from '../RouterURL/RouterURL';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <RouterURL></RouterURL>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
