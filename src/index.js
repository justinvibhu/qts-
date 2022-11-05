import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
import Register from './components/login/register';
import Admin from './components/Admin/admin';
import Login from './components/login/login';
import EmployeeCard from './components/EmployeeCard/employeecard';
import LeaderBoard from './components/LeaderBoard/leaderboard';
import Leave from './components/EmployeeCard/leave';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
  
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Login />} />
          <Route path="login" element={<Register />} />
          <Route path=" /leaderboard" element={<LeaderBoard />} />
          <Route path="admin" element={<Admin />} />
          <Route path="employeecard" element={<EmployeeCard/>} />
          <Route path="leave" element={<Leave/>} />
        </Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
