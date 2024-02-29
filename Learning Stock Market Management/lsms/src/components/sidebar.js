import React from 'react';
import userPhoto from '../static/image/user.png'; // Import user photo
function sidebar() {
  return (
    <div className="sidebar pe-4 pb-3">
      <nav className="navbar bg-secondary navbar-dark">
        <a href="#" className="navbar-brand mx-4 mb-3">
          <h3 className="text-primary">
            <i className="fa fa-user-edit me-2"></i>Stocks
          </h3>
        </a>
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
        <a href="/search" className="nav-item nav-link active">
            <i className="fa fa-arrow-trend-up me-2"></i>Live Stocks
          </a>
          <a href="#" className="nav-item nav-link ">
            <i className="fa fa-book-open me-2"></i>Couses
          </a>
        
          <a href="/ticker" className="nav-item nav-link">
            <i className="fa fa-newspaper me-2"></i>News
          </a>
          <a href="/ticker" className="nav-item nav-link">
            <i className="fa fa-wand-magic-sparkles me-2"></i>Stock
          </a>
        </div>
      </nav>
    </div>
  );
}

export default sidebar;
