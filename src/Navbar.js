import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
// import { Outlet, Link } from "react-router-dom";
import { useParams, useRouteMatch, Switch, Route } from "react-router-dom";
import Login from './components/login/login';
import LeaderBoard from './components/LeaderBoard/leaderboard';
import { Divider } from '@material-ui/core';
import logo from "./logo.png";

 function Navbar() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <div >
    <MDBNavbar  expand='lg 'light bgColor='light'>
      <MDBContainer className='text-center'  >
      <MDBNavbarBrand href='#'>
            <img 
              src={logo}
              height='60'
              alt=''
              loading='lazy'
          
            />
            
          </MDBNavbarBrand>
        
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        {/* <h4 className='content-justti'>Quanms</h4> */}
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav style={{  justifyContent: "right",}}>
      
            <MDBNavbarItem>
           
            <MDBNavbarLink href ='/'>
              Home</MDBNavbarLink>
              
           </MDBNavbarItem>
           <MDBNavbarItem>
           
            <MDBNavbarLink href ='/login'>
              Login</MDBNavbarLink>
              
           </MDBNavbarItem>
           <MDBNavbarItem>
           
            <MDBNavbarLink href ='/'>
              Logout</MDBNavbarLink>
              
           </MDBNavbarItem>
           
            
           
          </MDBNavbarNav>
         
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  );
}
export default Navbar;