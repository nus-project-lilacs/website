import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Sponsors from './components/Sponsors/Sponsors';
import Resources from './components/Resources/Resources'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar/>       
        </header>
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/sponsors" exact element={<Sponsors />} />
              <Route path="/resources" exact element={<Resources />} />
            </Routes>
      </div>
    </Router>
  );
}

export default App;
