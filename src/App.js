import React, { useState } from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
;
import Login from "./components/login/login";

import Navbar from "./Navbar";

import Register from "./components/login/register";
import Employeecard  from "./components/EmployeeCard/employeecard";
import Admin from "./components/Admin/admin";
import { Route, Link, Switch, BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import LeaderBoard from "./components/LeaderBoard/leaderboard";
import Leave from "./components/EmployeeCard/leave";

function App() {
  return (
  <BrowserRouter>
  <Router>
    
    <Switch>
    
      <Route exact path="/register" >{<Register/>}</Route>
      <Route exact path="/card" >{<Employeecard/>}</Route>
     <Route exact path="/leaderboard" >{<LeaderBoard/>}</Route>
      <Route exact path="/leave" >{<Leave/>}</Route>
      <Route exact path="/dashboard" >{<Admin/>}</Route>  
      
      <Route path="/" ><Login/></Route>
    </Switch>
  </Router>
  </BrowserRouter>
 
 

  );
}
export default App;