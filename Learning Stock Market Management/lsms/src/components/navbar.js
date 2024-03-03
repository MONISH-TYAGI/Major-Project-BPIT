import React from 'react'
import userPhoto from '../static/image/user.png'; // Import user photo
function navbar() {
  return (
    <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0 h-[10%]  w-full hmara "style={{zIndex:"-1"}}>
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
                <img className="rounded-circle me-lg-2" src={userPhoto} alt="" style={{width: "40px", height: "40px"}} />
                <span className="d-none d-lg-inline-flex">Guest</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                <a href="/search" className="dropdown-item">Predict</a>
                <a href="/ticker" className="dropdown-item">Ticker Info</a>
            </div>
        </div>
    </div>
</nav>
  )
}

export default navbar
