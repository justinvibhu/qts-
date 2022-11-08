import Select from "react-select";
import "./employeecardstyle.css";
import { auth } from "../../firebase";

import imag from "./userlogin.png";

import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { NextWeek } from "@material-ui/icons";

function EmployeeCard(props) {
  
  const [userData, setUserData] = useState({
    name:props.name,
    Date: "",
    Shift: "",
    Certificate: "",
    Hour: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  const submitData = async (event) => {
    event.preventDefault();
    const { name, Date, Shift, Certificate, Hour } = userData;
    if ( Date && Shift && Certificate && Hour) {
      const res = fetch(
        "https://qudient-employee-default-rtdb.firebaseio.com/EmpCardDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            Date,
            Shift,
            Certificate,
            Hour,
          }),
        }
      );
      if (res) {
        alert("Data Record Successfully.");
        setUserData({
       
          Date: "",
          Shift: "",
          Certificate: "",
          Hour: "",
        });
      } 
    } else {
      alert("Please Fill all of the Data.")
    }
  };

  return (
    <div className="employee">
      <MDBContainer fluid style={{ borderRadius: "25px" }}>
        <form method="POST">
          <MDBRow className="card d-flex justify-content-center align-items-center">
            <MDBCol lg="8">
              <MDBCard className="my-5 rounded-2" style={{ maxWidth: "600px" }}>
                <MDBCardImage
                  src={imag}
                  className="w-10px  rounded-circle "
                  style={{ height: 200, width: 200, marginLeft: 200 }}
                  alt="Sample photo"
                />

                <MDBCardBody className="px-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                    {props.name ? `Welcome - ${props.name}` : "Login please"}
                  </h3>
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        wrapperClass="datepicker mb-4"
                        label="Select a date"
                        id="form2"
                        type="date"
                        name="Date"
                        placeholder="Date"
                        value={userData.Date}
                        onChange={postUserData}
                      />
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Task"
                        id="form2"
                        type="text"
                        required
                        placeholder="Task"
                        name="Shift"
                        value={userData.Shift}
                        onChange={postUserData}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBInput
                    wrapperClass=" mb-4"
                    label="Certificate"
                    id="form2"
                    type="text"
                    name="Certificate"
                    placeholder="Certificate"
                    value={userData.Certificate}
                    onChange={postUserData}
                  />
                  <br></br>
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Hour"
                        id="form3"
                        type="text"
                        name="Hour"
                        value={userData.Hour}
                        onChange={postUserData}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBBtn
                    color="success"
                    className="mb-4"
                    size="lg"
                    onClick={submitData}
                  >
                    Submit
                  </MDBBtn>
                  or
                  <MDBBtn
                    href="/leave"
                    color="success"
                    className="mb-4"
                    size="lg"
                  >
                    Add Leave
                  </MDBBtn>
                  or
                  <MDBBtn
                    href="/login"
                    color="success"
                    className="mb-4"
                    size="lg"
                  >
                    SignOut
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
    </div>
  );
}

export default EmployeeCard;
