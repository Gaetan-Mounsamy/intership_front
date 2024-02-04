import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Dashboard from './components/dashboard/Dashboard';
import Preferences from './components/preferences/Preferences';
import Login from "./components/login/Login";
import AddInternship from './components/internship/AddInternship';
import UseToken from './UseToken';
import Navbar from './components/navbar/Navbar';
import './App.css';



function App() {

    const { token, setToken } = UseToken();
    if(!token){
        return <Login setToken={setToken} />
    }
    return (
      <div className="wrapper">
          <h1>Track my Internship</h1>
          <Router>
              <Navbar />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/preferences" element={<Preferences />} />
                  <Route path="/internship/add" element={<AddInternship />} />

              </Routes>
          </Router>
      </div>
  );
}

export default App;