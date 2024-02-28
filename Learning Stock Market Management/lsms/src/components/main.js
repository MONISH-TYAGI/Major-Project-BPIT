import React from 'react';
import '../static/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../static/css/style.css'; // Import custom CSS

const main = () => {
    return (
        <div className="container-fluid position-relative d-flex p-0">
            {/* Spinner Start */}
            <div id="spinner" className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            {/* Spinner End */}

            {/* Sidebar */}
            <div className="sidebar pe-4 pb-3">
                <nav className="navbar bg-secondary navbar-dark">
                    <a href="#" className="navbar-brand mx-4 mb-3">
                        <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>Stocks</h3>
                    </a>
                    <div className="d-flex align-items-center ms-4 mb-4">
                        <div className="position-relative">
                            <img className="rounded-circle" src="../static/image/user.png" alt="" style={{width: "40px", height: "40px"}} />
                            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                        </div>
                        <div className="ms-3">
                            <h6 className="mb-0">Welcome</h6>
                            <span>Guest</span>
                        </div>
                    </div>
                    <div className="navbar-nav w-100">
                        <a href="#" className="nav-item nav-link active"><i className="fa fa-home me-2"></i>Home</a>
                        <a href="/search" className="nav-item nav-link"><i className="fa fa-search me-2"></i>Predict</a>
                        <a href="/ticker" className="nav-item nav-link"><i className="fa fa-list-alt me-2"></i>Ticker Info</a>
                    </div>
                </nav>
            </div>
            {/* Sidebar End */}

            {/* Content */}
            <div className="content">
                {/* Navbar */}
                <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
                    <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                        <h2 className="text-primary mb-0"><i className="fa fa-user-edit"></i></h2>
                    </a>
                    <a href="#" className="sidebar-toggler flex-shrink-0">
                        <i className="fa fa-bars"></i>
                    </a>
                    <form className="d-none d-md-flex ms-4">
                        <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
                    </form>
                    <div className="navbar-nav align-items-center ms-auto">
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <img className="rounded-circle me-lg-2" src="../static/image/user.png" alt="" style={{width: "40px", height: "40px"}} />
                                <span className="d-none d-lg-inline-flex">Guest</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                                <a href="/search" className="dropdown-item">Predict</a>
                                <a href="/ticker" className="dropdown-item">Ticker Info</a>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Navbar End */}

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
