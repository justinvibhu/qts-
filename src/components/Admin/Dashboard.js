import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBadge,
  MDBCardImage,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import Navbar from "../../Navbar";
import userlogo from "../EmployeeCard/userlogin.png";

export default function Dashboard() {
  return (
    <div>

      <Navbar />
      <div className="p-1" style={{ marginTop: 100 }}>
        <MDBCard className="w-100 h-100">
          <MDBCardBody>
            <MDBRow>
              <MDBCol md="2">
                <div className="text-center">
                  <img
                    src={userlogo}
                    className=" rounded-circle "
                    alt=""
                    style={{ width: 100 }}
                  />

                  <div>
                    <p2 className="m-4">Admin Name</p2>{" "}
                  </div>
                </div>
              </MDBCol>
              <MDBCol md="10">
                <MDBTable>
                  <MDBTableHead className="gx-5">
                    <tr>
                      <th scope="col">Emp ID</th>
                      <th scope="col">Name </th>
                      <th scope="col">Score</th>
                      <th scope="col">Name </th>
                      <th scope="col">Score</th>
                      <th scope="col">Name </th>
                      <th scope="col">Score</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <th scope="row">1</th>
                      <td>ABC</td>
                      <td>100</td>
                      <td>ABC</td>
                      <td>100</td>
                      <td>ABC</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>ABC</td>
                      <td>100</td>
                      <td>ABC</td>
                      <td>100</td>
                      <td>ABC</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>ABC</td>
                      <td>100</td>
                      <td>ABC</td>
                      <td>100</td>
                      <td>ABC</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>ABC</td>
                      <td>100</td>
                      <td>ABC</td>
                      <td>100</td>
                      <td>ABC</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>ABC</td>
                      <td>100</td>
                      <td>ABC</td>
                      <td>100</td>
                      <td>ABC</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}
