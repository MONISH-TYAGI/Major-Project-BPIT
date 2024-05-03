import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useContext} from 'react'
import { AuthContext } from './Context/AuthContext';
import { Link } from 'react-router-dom'
function Invest() {
  const navigate = useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const {login}=useContext(AuthContext);
  const {user}=useContext(AuthContext);
  // useEffect(() => {
  //   if (user!=''){
  //    navigate("/home")   
  //   }
  // },[user])
    const goToSignUp=()=>{
      navigate("/signup");
    }
  const sigingIn=async(e)=>{
  
    e.preventDefault();
    console.log("Log In");
    
    try{
    let userObj = await login(email,password)
    setEmail('')
  setPassword('')
  alert("successful Login")
  navigate("/account");
    }catch(err)
    {
      console.log("fail");
      alert("Fail Login")
    }finally{
  console.log("done");
  
    }
  }
    
    
  return (
 
    <div className="container-fluid ">
      <div className="row h-screen items-center justify-center ">
        <div className="col-12 col-sm-8 col-md-6 col-lg-5  ">
          <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3 w-full">
            <div className="d-flex justify-between mb-3 w-full">
              <Link to="/" className="text-primary w-full">
                <h3 className='w-full'><i className="fa fa-user-edit me-2"></i>Login Demat Account</h3>
              </Link>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="tickerinp" placeholder="Ticker Name" name="ticker" autoComplete="on" required  value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <label htmlFor="tickerinp">Enter Email</label>
            </div>
            <div className="form-floating mb-4">
              <input type="text" className="form-control" id="days" placeholder="Number of days" name="days" autoComplete="on" required value={password} onChange={(e)=>setPassword(e.target.value)} />
              <label htmlFor="days">Enter password</label>
            </div>
            {/* <div className="d-flex justify-between mb-4">
              <Link to="/ticker">Search Ticker Value</Link>
            </div> */}
            <button type="button" className="btn btn-primary py-3 w-full mb-4" onClick={sigingIn}>Login</button>
            <button type="button" className="btn btn-primary py-3 w-full mb-4" onClick={goToSignUp}>SignUp</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invest
