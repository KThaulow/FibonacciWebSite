import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" height="100px" />
        </header>
        <div>
          <Route exact path="/" component={Fib} />
        </div>
      </div>
    </Router>
  );
}

export default App;
