import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const users = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    // Implement your logout logic here
    localStorage.removeItem('user');
    window.location.reload();
    // You might want to redirect the user to the login page or do other cleanup
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom border-danger">
      <div className="container-fluid">
        <div className="leftNav">
          <Link className="navbar-brand text-danger" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
              <path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z" />
            </svg>
            StayJordan
          </Link>
        </div>

        <div className="midNav d-flex flex-row border rounded-pill p-3 shadow">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="nav-link active m-1" aria-current="page" to="#">
            Anywhere
          </Link>
          <Link className="nav-link active m-1 ms-3" aria-current="page" to="#">
            Any week
          </Link>

          <form className="d-flex" role="search">
            <input className="form-control me-2 ms-3 " type="search" placeholder="Add guests" aria-label="Search" />
            <button className="btn btn-outline-danger border rounded-circle" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
          </form>
        </div>

        <div className="rightNav d-flex flex-row border rounded-pill p-3 shadow">
          <Link className="nav-link active m-1" aria-current="page" to="/hostaspace">
            Host Your Space
          </Link>

          {users ? (
            <button className="btn btn-link nav-link active m-1 ms-3" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link className="nav-link active m-1 ms-3" aria-current="page" to="/signup">
              Sign up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
