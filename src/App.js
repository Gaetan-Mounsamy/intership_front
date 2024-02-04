import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Dashboard from './components/dashboard/Dashboard';
import Preferences from './components/preferences/Preferences';
import Login from "./components/login/Login";
import UseToken from './UseToken';


function App() {

    const { token, setToken } = UseToken();
    if(!token){
        return <Login setToken={setToken} />
    }
    return (
      <div className="wrapper">
          <h1>Application</h1>
          <Router>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/preferences" element={<Preferences />} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;