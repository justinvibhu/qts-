import { auth } from "../../firebase";
import { format } from "date-fns";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBFile,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
function Leave() {
  const [errorMsg, setErrorMsg] = useState("");
  // let history = useHistory();
  const [userData, setUserData] = useState({
    name: "vaibahv",
    EmpID: "",
    FromDate: "",
    ToDate: "",
    Reason: "",
    imag: "",
    l:"",

  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  const submitData = async (event) => {
    event.preventDefault();
    const { name, EmpID, FromDate, ToDate, Reason, imag,l } = userData;

    var date = new Date();
    var current =
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    var currentMonth = date.getMonth() + 1;
    var fromdatesplit = new Date(FromDate);
    var fromdatecurrentMonth = fromdatesplit.getMonth() + 1;
    console.log(fromdatecurrentMonth);
    console.log("current month is", currentMonth);

    if (FromDate > ToDate) {
      alert("invalid date");
    } else  {
      if (name && EmpID && FromDate && ToDate && Reason) {
        const res = fetch(
          "https://qudient-employee-default-rtdb.firebaseio.com/EmpLeaveDataRecords.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({

              name,
              EmpID,
              FromDate,
              ToDate,
              Reason,
              imag,
              
              l:"leave",
            }),
          }
        );

        if (res) {
          
          alert("Data Successfully Submit ");
          setUserData({
            name: "",
            EmpID: "",
            FromDate: "",
            ToDate: "",
            Reason: "",
            imag: "",
      
          });
          // history.push("/card");
          // window.location.reload(false);
        }
      } else {
        alert("Please fill all of the Data ");
      }
    }
  };

  return (
    <MDBContainer fluid style={{ height: 1200, width: 1200 }}>
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol lg="9" className="my-5">
          <h1 className="text-white mb-4">Apply for Leave </h1>
          <form method="POST">
            <MDBCard>
              <MDBCardBody className="px-4">
                <MDBRow ClassName="col-md-6">
                  <MDBCol md="6" className="ps-5">
                    Name
                    <MDBInput
                      label="Name"
                      size="lg"
                      id="form2"
                      type="text"
                      name="name"
                      required
                      value={userData.name}
                      onChange={postUserData}
                    />
                  </MDBCol>
                  <MDBCol md="6" className="ps-5">
                    Emp ID
                    <MDBInput
                      label="Emp ID"
                      size="lg"
                      id="form2"
                      type="text"
                      name="EmpID"
                      required
                      value={userData.EmpID}
                      onChange={postUserData}
                    />
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n10" />
                <MDBRow ClassName="col-md-6">
                  <MDBCol md="6" className="ps-5">
                    <MDBInput
                      label="From Date"
                      size="lg"
                      id="form2"
                      type="date"
                      name="FromDate"
                      required
                      value={userData.FromDate}
                      onChange={postUserData}
                    />
                  </MDBCol>
                  <MDBCol md="6" className="ps-5">
                    <MDBInput
                      label="To Date"
                      size="lg"
                      id="form2"
                      type="date"
                      name="ToDate"
                      required
                      value={userData.ToDate}
                      onChange={postUserData}
                    />
                  </MDBCol>
                </MDBRow>

                <hr className="sm-n3" />

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Reason</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBTextArea
                      label="Reason"
                      id="textAreaExample"
                      rows={2}
                      name="Reason"
                      value={userData.Reason}
                      onChange={postUserData}
                    />
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Medical certificate </h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBFile
                      size="lg"
                      id="customFile"
                      name="imag"
                      value={userData.imag}
                      onChange={postUserData}
                    />
                    <div className="small text-muted mt-2">
                      Upload your authenticate doc, Max file size 50 MB
                    </div>
                  </MDBCol>
                </MDBRow>
                <b className="text-danger">{errorMsg}</b>
                <hr className="mx-n3" />

                <MDBBtn
                  color="success"
                  className="mb-4"
                  size="lg"
                  onClick={submitData}
                >
                  Submit
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Leave;
