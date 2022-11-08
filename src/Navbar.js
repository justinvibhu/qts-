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


 function Navbar() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar  fixed='top' expand='lg 'light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Quams  </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav style={{  justifyContent: "right",}}>
            <MDBNavbarItem>
            <MDBNavbarLink href ='/leaderboard'>LeaderBoard</MDBNavbarLink></MDBNavbarItem>
            <MDBNavbarLink href='/register'>Sign</MDBNavbarLink>
            
           
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default Navbar;