import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
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
import { Link, withRouter } from "react-router-dom";
import Navbar from "../../Navbar";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./login.scss";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();
  // const navigate = navigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if ((values.email = "praveen" && values.pass == "admin@12")) {
      history.push("/dashboard");
      window.location.reload(false);
    } else {
      if (!values.email || !values.pass) {
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("");

      setSubmitButtonDisabled(true);
      signInWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
          setSubmitButtonDisabled(false);

          history.push("/card");
          window.location.reload(false);
          // alert("login successfully")
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
    }
  };

  return (
    <div className="container-md">
      <div className="Login">
        <Navbar />

        <MDBContainer fluid className="p-80 my-6  ">
          <MDBRow
            className="card d-flex p-8 justify-content-center align-items-center"
            style={{ marginTop: 40 }}
          >
            <MDBCol col="8" md="4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid"
                alt="Sample image"
              />
            </MDBCol>

            <MDBCol col="4" md="6">
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="formControlLg"
                type="text"
                size="lg"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, pass: event.target.value }))
                }
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
              <b className="primary">{errorMsg}</b>
              <p>If you dont have any account, Click on Register</p>
              <div className="text-center text-md-start mt-4 pt-2">
                <MDBBtn
                  href="/card"
                  className="mb-4"
                  size="lg"
                  type="submit"
                  disabled={submitButtonDisabled}
                  onClick={handleSubmission}
                >
                  Login{" "}
                </MDBBtn>
                or{" "}
                <MDBBtn
                  href="/register"
                  className="mb-4"
                  size="lg"
                  type="submit"
                >
                  register
                </MDBBtn>
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
