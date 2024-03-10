import React from 'react'
import { Link } from 'react-router-dom'
function Invest() {
  const handlePredict = () => {
  
  }
  return (
 
    <div className="container-fluid ">
      <div className="row h-screen items-center justify-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3 w-full">
            <div className="d-flex justify-between mb-3 w-full">
              <Link to="/" className="text-primary w-full">
                <h3 className='w-full'><i className="fa fa-user-edit me-2"></i>Login Demat Account</h3>
              </Link>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="tickerinp" placeholder="Ticker Name" name="ticker" autoComplete="on" required />
              <label htmlFor="tickerinp">Ticker Name</label>
            </div>
            <div className="form-floating mb-4">
              <input type="text" className="form-control" id="days" placeholder="Number of days" name="days" autoComplete="on" required />
              <label htmlFor="days">Number of Days</label>
            </div>
            <div className="d-flex justify-between mb-4">
              <Link to="/ticker">Search Ticker Value</Link>
            </div>
            <button type="button" className="btn btn-primary py-3 w-full mb-4" onClick={handlePredict}>Login</button>
            <button type="button" className="btn btn-primary py-3 w-full mb-4" onClick={handlePredict}>SignUp</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invest
