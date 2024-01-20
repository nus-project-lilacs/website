import React from "react";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import Sponsors from "./pages/Sponsors/Sponsors";
import Resources from "./pages/Resources";
import ResourceDetails from "./components/ResourceDetails";



function App() {
  //const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:1337/api/resources`);
  //       const data = await response.json();
  //       setData(data);
  //       console.log(data.data[0].attributes.title); //can use this to check if the data is fetched correctly -petrine
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resource/:id" element={<ResourceDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
