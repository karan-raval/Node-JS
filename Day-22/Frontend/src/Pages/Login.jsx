import React, { useState } from "react";
import "./login.css";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import Popover from "./Popover";

const Login = () => {
  const [state, setState] = useState({
    password: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (E) => {
    E.preventDefault();
    axios
      .post("http://localhost:8080/login", state)
      .then((Res) => {
        console.log(Res);
        let a = jwtDecode(Res.data.token);
        console.log(a);
        localStorage.setItem("token", Res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-row ps-5 pt-5">
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: "#709085" }} />
            <span className="h1 fw-bold mb-0">Logo</span>
          </div>
          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h3
              className="fw-normal mb-3 ps-5 pb-3"
              style={{ letterSpacing: "1px" }}
            >
              Log in
            </h3>
            <form action="" onSubmit={handleSubmit}>
              <MDBInput
                wrapperClassName="mb-4 mx-5 w-100"
                onChange={handleChange}
                label="Email address"
                id="emailInput"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClassName="mb-4 mx-5 w-100"
                onChange={handleChange}
                label="Password"
                id="passwordInput"
                type="password"
                size="lg"
              />
              <MDBBtn
                className="mb-4 px-5 mx-5 w-100"
                color="info"
                type="submit"
                size="lg"
              >
                Login
              </MDBBtn>
            </form>
            <p className="small mb-5 pb-lg-3 ms-5">
              <a className="text-muted">
                <Popover />
              </a>
            </p>
            <p className="ms-5">
              Don't have an account?{" "}
              <a href="#!" className="link-info">
                Register here
              </a>
            </p>
          </div>
        </MDBCol>
        <MDBCol
          sm="6"
          className="d-none d-sm-block px-0 d-flex justify-content-center align-items-center"
        >
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.xY7ZSmIBRsf-MbdyWpKs7gHaEK&pid=Api&P=0&h=180" // Replace with your nature image URL
            alt="Nature"
            className="w-100"
            style={{
              height: "450px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
