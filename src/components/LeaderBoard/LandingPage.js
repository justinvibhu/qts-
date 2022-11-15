import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { MDBContainer } from "mdb-react-ui-kit";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBTypography,
  MDBIcon,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Navbar from "../../Navbar";

export default function LandingPage() {
  return (
    <div>
      < Navbar />
      <MDBContainer className=" mb-14" style={{ marginTop:120}}>
        <MDBCard className="d-flex "  >
            
          <MDBRow className="justify-content-center " >
            <MDBCol md="6 me-2 " className="mb-14"  >
              <MDBTable>
                <MDBTableHead className="gx-5">
                  <tr>
                    <th scope="col">Emp ID</th>
                    <th scope="col">Name </th>
                    <th scope="col">Score</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <th scope="row">1</th>
                    <td>ABC</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>CDE</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>CDE</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>CDE</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>CDE</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>CDE</td>
                    <td>200</td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBCol>

            <MDBCol md="4 p-2 mb-3 "style={{ paddingLeft:120}}>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Praveen anna</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBCardTitle>Vaibhav anna</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBCardTitle>Mayuresh</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
             
              
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}
