import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../static/image/user.png'; // Import user photo

function Sidebar() {
  return (
    <div className="sidebar pe-4 pb-3" style={{ width: "15%" }}>
      <nav className="navbar bg-secondary navbar-dark">
        <NavLink exact to="/" className="navbar-brand mx-4 mb-3">
          <h3 className="text-primary">
            <i className="fa fa-user-edit me-2"></i>Trading
          </h3>
        </NavLink>
        <div className="d-flex align-items-center ms-4 mb-4">
          <div className="position-relative">
            <img
              className="rounded-circle"
              src={userPhoto}
              alt=""
              style={{ width: '40px', height: '40px' }}
            />
            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
          </div>
          <div className="ms-3">
            <h6 className="mb-0">Welcome </h6>
            <span>Guest</span>
          </div>
        </div>
        <div className="navbar-nav w-100">
          <NavLink exact to="/" className="nav-item nav-link" activeClassName="active">
            <i className="fa fa-arrow-trend-up me-2"></i>Live Stocks
          </NavLink>
          <NavLink to="/courses" className="nav-item nav-link" activeClassName="active">
            <i className="fa fa-book-open me-2"></i>Courses
          </NavLink>
          <NavLink to="/news" className="nav-item nav-link" activeClassName="active">
            <i className="fa fa-newspaper me-2"></i>News
          </NavLink>
          <NavLink to="/predict" className="nav-item nav-link" activeClassName="active">
            <i className="fa fa-wand-magic-sparkles me-2"></i>Stock
          </NavLink>
          <NavLink to="/invest" className="nav-item nav-link" activeClassName="active">
            <i className="fa fa-money-bill me-2"></i>Invest
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
