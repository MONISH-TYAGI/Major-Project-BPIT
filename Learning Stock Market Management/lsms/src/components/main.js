import React from 'react';
import '../static/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../static/css/style.css'; // Import custom CSS
import userPhoto from '../static/image/user.png'; // Import user photo
import Sidebar from './sidebar';
import Navbar from './navbar';

const main = () => {
    return (
        <div className="container-fluid position-relative d-flex p-0">
            {/* Spinner Start */}
            {/* <div id="spinner" className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> */}
            {/* Spinner End */}

            {/* Sidebar */}
           <Sidebar></Sidebar>
            {/* Sidebar End */}

            {/* Content */}
            <div className="content">
                {/* Navbar */}
              <Navbar/>
                {/* Navbar End */}

 {/* Search start */}
 <div className="container-fluid pt-4 px-4 ">
                    <div className="row g-4">
                        <div className="col-sm-12 col-xl-12">
                            <div className="bg-secondary text-center rounded p-4 ">
                                <div className="d-flex align-items-center justify-content-between mb-2 ">
                                    <h6 className="mb-0">Active Stocks</h6>
                                    <a href="">Show All</a>
                                </div>
                                <div className='flex'>
                                <div className=' w-4/12 h-16  '>
                                    <div className=' '>
                                        <span>
                                        Select Stock
                                        </span>
                                        </div>
                                    <div className='px-2'>
                                    <input className="form-control bg-dark border-0 " type="search" placeholder="Search" />
                                    </div>
                                </div>
                                <div className=' w-3/12 h-16 '>
                                    <div className=' '>
                                        <span>
                                       Start Date
                                        </span>
                                        </div>
                                    <div className='px-2'>
                                    <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
                                    </div>
                                </div>
                                <div className=' w-3/12 h-16 '>
                                    <div className=' '>
                                        <span>
                                       End Date
                                        </span>
                                        </div>
                                    <div className='px-2'>
                                    <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
                                    </div>
                                </div>
                                <div className='border w-2/12 h-16 '>
                                
                                  <button className='form-control bg-dark  mt-[23px]'>Search</button>
                                </div>
                    </div>
          
                            </div>
                        </div>
                         
                    </div> 
                   
                </div>
                {/* Search End */}
                {/* Sales Chart */}
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-sm-12 col-xl-12">
                            <div className="bg-secondary text-center rounded p-4">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h6 className="mb-0">Active Stocks</h6>
                                    <a href="">Show All</a>
                                </div>
                                {/* Left Plot */}
                                {/* Your Left Plot Content Goes Here */}
          
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sales Chart End */}

                {/* Recent Sales */}
                <div className="container-fluid pt-4 px-4">
                    <div className="bg-secondary text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Recent Stocks</h6>
                            <a href="https://finance.yahoo.com/trending-tickers">Show All</a>
                        </div>
                        <div className="table-responsive">
                            <table className="table text-start align-middle table-bordered table-hover mb-0">
                                <thead>
                                    <tr className="text-white">
                                        <th scope="col">Ticker</th>
                                        <th scope="col">Open</th>
                                        <th scope="col">High</th>
                                        <th scope="col">Low</th>
                                        <th scope="col">Close</th>
                                        <th scope="col">Adj. Close</th>
                                        <th scope="col">Volume</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Recent Stocks Data */}
                                    {/* Your Recent Stocks Data Goes Here */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* Recent Sales End */}

                {/* Footer */}
                <div className="container-fluid pt-4 px-4">
                    <div className="bg-secondary rounded-top p-4">
                        <div className="row">
                            <div className="col-12 col-sm-6 text-center text-sm-start">
                                &copy; <a href="#">Kumar Laxmikant</a>, All Right Reserved. 
                            </div>
                            <div className="col-12 col-sm-6 text-center text-sm-end">
                                Designed By <a href="https://portfolio-website-azure-eta.vercel.app/">Kumar Laxmikant</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End */}
            </div>
            {/* Content End */}

            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    );
}

export default main;
