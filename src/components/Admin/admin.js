import StartFirebase from "./firebaseconfig";
import React  from "react"
import {ref, onValue} from "firebase/database";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import "../EmployeeCard/employeecard";
const db = StartFirebase();
class Admin extends React.Component{

    constructor(){
        super();
        this.state={
            tableData:[]
        }
    }

    componentDidMount(){
        const dbRef =ref(db,'EmpLeaveDataRecords');
        onValue(dbRef,(snapshot)=>{
            let record=[];
            snapshot.forEach(childSnapshot=>{
                let keyName=childSnapshot.key;
                let data= childSnapshot.val();
                record.push({"key":keyName,"data":data});

            });
            this.setState({tableData:record})

        });
    }
render(){
    return(
        <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>First</th>
            <th scope='col'>Last</th>
            <th scope='col'>Handle</th>
            <th scope='col'>Handle</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
            {this.state.tableData.map((rowdata, index)=>{
                return(
                 <tr>
                 <th scope='row'>{index}</th>
                
                 <td>{rowdata.data.name}</td>
                 <td>{rowdata.data.Date}</td>
                 <td>{rowdata.data.Hour}</td>
                
                 

                 
               </tr>
                )

            })}
         
     
          </MDBTableBody>
    </MDBTable>
    )
}
}
export default Admin;


// import React from "react";
// <script src='https://cdn.firebase.com/js/client/2.2.1/firebase.js'></script>
// class Admin extends React.Component {

// constructor(props) {
//   var ref=firebase.database().ref("https://qudient-employee-default-rtdb.firebaseio.com"); 
  
//     super(props);
   
//     this.state = {employeeslist : []}
//     }
    
//   componentDidMount() {
   
   
     
//       firebase.database().ref("EmpCardDataRecords").on("value", snapshot => {
//         let employeeslist = [];
//         snapshot.forEach(snap => {
//             // snap.val() is the dictionary with all your keys/values from the 'students-list' path
//             employeesslist.push(snap.val());
//         });
//         this.setState({ employeeslist: employeeslist });
//       });
    
    
//  }
  
//   render(){
//   return (
//     <div className="MainDiv">
//       <div class="j">
//           <h3>How to show firebase data in reactjs?</h3>
//       </div>
    
//       <div className="container">
//           <table id="example" class="display table">
//             <thead class="thead-dark">
//                 <tr>
//                     <th>FirstName</th>
//                     <th>Lastname</th>
//                     <th>Email</th>
//                     <th>Mobile</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {this.state.employeeslist.map(data => {
                
//                 return (
//                     <tr>     
//                     <td>{data.firstName}</td>
//                     <td>{data.lastName}</td>
//                     <td>{data.email}</td>
//                     <td>{data.mobileNumber}</td>
//                     </tr>
                    
//                 );
               
//                 })}
        
               
//             </tbody>
            
//          </table>
          
//      </div>
//     </div>
//   );
// }
// }
// export default Admin;