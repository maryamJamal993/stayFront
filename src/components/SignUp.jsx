import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link, useNavigate } from 'react-router-dom'
import ax from 'axios'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
 
  const navigate=useNavigate()



  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
     
      setIsLoading(true)
   setError('')
   
   const response = await ax.post('http://localhost:4000/api/user/login' ,{email,password} )
      console.log(response);
  
   navigate('/')
   window.location.reload();
 // save the user to local storage
       localStorage.setItem('user', JSON.stringify(response.data))
  
    
    
  
     // update the auth context
    //  window.location.reload(true);
     // dispatch({type: 'LOGIN', payload: json})

     // update loading state
     setIsLoading(false)

   } catch (error) {
   
      setIsLoading(false)
     setError('please fill out the right credentials')
   }
   
  }

  return (
    <div className="container-fluid d-flex justify-content-center p-4 bg-light" >

        <div className="col-sm-6 col-md-5 form-section border border-danger rounded-4  m-3 p-4 shadow-lg">
            <h2 className="login-title p-5 text-bold text-danger">Sign in</h2>
            <div className='border-bottom border-danger'></div>
            <form action="#!" className='p-4' onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <label className="sr-only">Email</label>
                <input type="email" name="email" id="email" className="form-control" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
              <div className="form-group mb-3">
                <label className="sr-only">Password</label>
                <input type="password" name="password" id="password" className="form-control" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-5">
                <input name="login" id="login" className="btn btn-lg login-btn bg-danger text-light" type="submit" value="submit" disabled={isLoading}/>
              </div>
              {error && <div className="error">{error}</div>}
            </form>
            <p className="login-wrapper-footer-text">Need an account? <Link to="/signup" className="text-reset ">Signup here</Link></p>
        </div>

      </div>
  )
}

export default SignUp