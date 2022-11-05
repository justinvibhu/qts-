
import Select from "react-select";
import "./employeecardstyle.css";

const Certificate = [
  { value: "certificate", label: "Certificate" },
  { value: "100", label: "Milestone" },
  { value: "50", label: "Courses" },
];
const Shift = [
  { value: "Shift", label: "Shift" },
  { value: "Day", label: "Evening" },
  { value: "Night", label: "Night" },
];


import React from "react";
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

function EmployeeCard() {
  return (
    <div className="employee">
      <MDBContainer fluid style={{ borderRadius: "25px" }}>
        <MDBRow className="card d-flex justify-content-center align-items-center">
          <MDBCol lg="8">
            <MDBCard className="my-5 rounded-2" style={{ maxWidth: "600px" }}>
              <MDBCardImage 
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                className="w-10px  rounded-circle " style={{height:200, width:200,marginLeft:200}}
                alt="Sample photo"
              />

              <MDBCardBody className="px-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                 Employee name
                </h3>
                {/* <MDBInput
                  wrapperClass="mb-4"
                  label="Name"
                  id="form1"
                  type="text"
                /> */}

                <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="datepicker mb-4"
                      label="Select a date"
                      id="form2"
                      type="date"
                    />
                  </MDBCol>

                  <MDBCol md="6" className="mb-4">
                    
                    <Select label="Name" options={Certificate}   />
                  </MDBCol>
                </MDBRow>

                <Select options={Shift} />

                <br></br>
                <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Task"
                      id="form3"
                      type="text"
                    />
                  </MDBCol>
                </MDBRow>

                <MDBBtn color="success" className="mb-4" size="lg">
                  Submit
                </MDBBtn> or
                <MDBBtn href="/leave" color="success" className="mb-4" size="lg">
                  Add Leave
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default EmployeeCard;
