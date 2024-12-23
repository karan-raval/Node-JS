import React, { useState } from 'react';
import './signup.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    email: ""
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const handleSubmit = (E) => {
    E.preventDefault()
    axios.post("http://localhost:9999/register", state)
      .then((Res) => {
        console.log(Res)
        navigate('/login');
      }).catch((err) => {
        console.log(err)
      })
  }
  return (
    <>
      <MDBContainer fluid className='p-4'>

        <MDBRow>

          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
              The best offer <br />
              <span className="text-primary">for your business</span>
            </h1>

            <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet, itaque accusantium odio, soluta, corrupti aliquam
              quibusdam tempora at cupiditate quis eum maiores libero
              veritatis? Dicta facilis sint aliquid ipsum atque?
            </p>

          </MDBCol>

          <MDBCol md='6'>

            <MDBCard className='my-5'>
              <MDBCardBody className='p-5'>
                <form onSubmit={handleSubmit}>
                  <MDBInput wrapperClass='mb-4' onChange={handleChange} name='username' label='User name' type='text' />
                  <MDBInput wrapperClass='mb-4' onChange={handleChange} name='email' label='Email' type='email' />
                  <MDBInput wrapperClass='mb-4' onChange={handleChange} name='password' label='Password' type='password' />
                  <MDBInput className='w-100 mb-4' type='submit' value='sign up' size='md' />
                </form>

                <div className="text-center">
                  <p className="text-center mt-3">
                    Alredy Have Account? <Link className="link-info" to={'/'}>Login</Link>
                  </p>
                </div>

              </MDBCardBody>
            </MDBCard>

          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </>
  )
}

export default Signup