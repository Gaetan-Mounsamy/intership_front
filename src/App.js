import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/login/Login";
import AddInternship from './components/internship/AddInternship';
import ConsultInternship from './components/internship/ConsultInternship';
import DetailInternship from './components/internship/DetailInternship';
import UploadReport from './components/report/UploadReport';
import UploadCdC from './components/CdC/UploadCdC';
import UseToken from './UseToken';
import Navbar from './components/navbar/Navbar';
import './App.css';


function App() {


    const { token, setToken } = UseToken();
    if(!token){
        return <Login setToken={setToken} />
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
        localStorage.removeItem('internshipData');
    };

    // console.log(localStorage.getItem('token'))
    return (
        <div className="wrapper">
            <h1>Track my Internship</h1>

            <button className="logOutButton" onClick={handleLogout}>Logout</button>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/internship/add" element={<AddInternship/>}/>
                    <Route path="/internship/consult" element={<ConsultInternship/>}/>
                    <Route path="/internship/consult/:internshipId" element={<DetailInternship/>}/>
                    <Route path="/report/upload" element={<UploadReport/>}/>
                    <Route path="/cdc/upload" element={<UploadCdC/>}/>
                </Routes>
            </Router>
        </div>

    )
}
export default App;