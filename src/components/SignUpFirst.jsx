import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link, useNavigate } from 'react-router-dom'
import ax from 'axios'
const SignUpFirst = () => {
  const[firstName,setFirstName]=useState('')
  const[lastName,setLastName]=useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const[phoneNumber,setPhoneNumber]=useState('')
  const navigate=useNavigate()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
     
      setIsLoading(true)
   setError(null)
  //  https://bvc-46jr.onrender.com
   const response = await ax.post('http://localhost:4000/api/user/signup' ,{firstName,lastName,email,password,phoneNumber} )
 
  
 // save the user to local storage
     localStorage.setItem('user', JSON.stringify(response.data))

     // update the auth context
     navigate('/signin')
    
     // update loading state
     setIsLoading(false)

   } catch (error) {
   
      setIsLoading(false)
     setError('please fill out all fields')
   }
    
  }
  
  return (
    <div className="container-fluid d-flex justify-content-center p-4 bg-light" >

        <div className="col-sm-6 col-md-5 form-section border border-danger rounded-4  m-3 p-4 shadow-lg">

          <h2 className="login-title p-5 text-bold text-danger">Sign up</h2>

          <div className='border-bottom border-danger'></div>
          <form action="#!" className='p-4' onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label  className="sr-only">First name</label>
              <input type="text" name="firstName" id="firstName" className="form-control" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
            </div>
            <div className="form-group mb-2">
              <label  className="sr-only">Last name</label>
              <input type="text" name="lastName" id="lastName" className="form-control" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
            </div>

            <div className="form-group mb-2">
              <label className="sr-only">Email</label>
              <input type="email" name="email" id="email" className="form-control" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="form-group mb-3">
              <label className="sr-only">Password</label>
              <input type="password" name="password" id="password" className="form-control" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div className="form-group mb-2">
              <label  className="sr-only">Phone number</label>
              <input type="text" name="phoneNumber" id="phoneNumber" className="form-control" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-5">
              <input name="login" id="login" className="btn btn-lg login-btn bg-danger text-light" type="submit" value="submit" disabled={isLoading} />
            </div>
          </form>
          <p className="login-wrapper-footer-text">Already have an account? <Link to="/signin" className="text-reset ">Sign in here</Link></p>

        </div>
      </div>
  )
}

export default SignUpFirst