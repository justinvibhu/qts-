import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Register from "./register";
import {Link, withRouter} from "react-router-dom";
import Navbar from "../../Navbar";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "./login.scss"
function Login() {
  return (
    <div class="container-md">
    <div class="Login" style={{alignItems:'center',justifyContent:"center"}}>
      <Navbar />
    
      <MDBContainer fluid className="p-2 my-6 h-custom ">
        <MDBRow className="card d-flex justify-content-center align-items-center">
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt="Sample image"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Username"
              id="formControlLg"
              type="text"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
            />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <MDBBtn className="mb-0 px-5" size="lg">
                Login
              </MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?{" "}
                <Link to="/register">Blogs</Link>
              </p>
            </div>
          </MDBCol>
        </MDBRow>

        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 ">
          <div className="text-white mb-3 mb-md-0"></div>

          <div></div>
        </div>
      </MDBContainer>
    </div>
    </div>
  );
}

export default Login;
