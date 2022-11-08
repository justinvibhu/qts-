import { Route, Link, Switch, BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import  {Navigate}  from "react-router-dom/";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  MDBBtn,
  MDBContainer,  
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}

from 'mdb-react-ui-kit';


import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {useHistory} from "react-router-dom";
import Login from "./login";

function Register() {


  let history = useHistory();
  const [values, setValues] = useState({
      name: "",
      empid: "",
      email: "",
      pass: "",
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const handleJustifyClick = () => {
      if (!values.name || !values.email || !values.email || !values.pass) {
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("");
      console.log(values);
      createUserWithEmailAndPassword(auth, values.email, values.pass).then(async(res)=>{
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
            
        
        alert("You are Resister Successfully. Please login ");
      
        history.push("/login");
        window.location.reload(false);
       

   
 
        console.log(user);
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);

      })

    }

 
  
  return (
    <div className='Register' >
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100'
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, name: event.target.value }))
                  }
                
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Emp id' id='form2' type='text' required
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, empid: event.target.value }))
                  }
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope  me-3" size='lg'/>
                <MDBInput label='example@tcs.com' id='form3' type='email'
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, email: event.target.value }))
                  }
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label=' password' id='form4' type='password'
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, pass: event.target.value }))
                  }
                />
              </div>

              <div className='mb-4'>
                <MDBCheckbox className='text-primary'  name='flexCheck ' value='' id='flexCheckDefault'  label='Please, click on check box for Agree !! ' />
              </div>
             < b className='text-danger' >{errorMsg}</b>
             

             <div className="text-center text-md-start">
              <MDBBtn  className='mb-4' size='lg' type="submit" onClick={ handleJustifyClick} >  Register </MDBBtn>  or
              <MDBBtn  href="/login" className='mb-4' size='lg ' type="submit" > Login</MDBBtn> 
              </div>
            </MDBCol>
          


            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
    </div>
  );
}

export default Register;