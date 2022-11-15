import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
function LeaderBoard() {
  return (
    <div>
      <MDBRow>
        <MDBCol md="8">
          <MDBTable className=" leader ">
            <MDBTableHead>
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
                <td>200</td>z
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBCol>
        <MDBCol md="4">md="4"</MDBCol>
      </MDBRow>
    </div>
  );
}
export default LeaderBoard;
