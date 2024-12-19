import React, { useState } from "react";
import "./login.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import  jwtDecode  from "jwt-decode";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Popover from "./Popover";

const Login = () => {
  const [state, setState] = useState({
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (E) => {
    E.preventDefault();
    axios
      .post("http://localhost:8888/login", state)
      .then((Res) => {
        console.log(Res);
        let a = jwtDecode(Res.data.token);
        console.log(a);
        localStorage.setItem("token", Res.data.token);
        navigate('/home');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MDBContainer fluid className="bg-light p-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard className="shadow-sm">
            <MDBCardBody className="p-5">
              <h3 className="text-center mb-4">Welcome Back!</h3>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass="mb-4"
                  onChange={handleChange}
                  name="email"
                  label="Email address"
                  type="email"
                  icon="envelope"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  onChange={handleChange}
                  name="password"
                  label="Password"
                  type="password"
                  icon="lock"
                />
                <MDBBtn className="w-100 mb-4" color="primary" type="submit">
                  Login
                </MDBBtn>
              </form>
              <div className="text-center">
                <Popover/>

              </div>
              <p className="text-center mt-3">
                Don't have an account? <Link className="link-info" to={'/signup'}>Register here</Link>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;