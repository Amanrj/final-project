import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Walkthrough from './Walkthrough';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const navBarData = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Tickets",
      link: "/tickets"
    },
    {
      name: "Favorites",
      link: "/favorites"
    }
  ];
  const [cola, setCola] = useState(true);
  // const [logincheck,logincheckSet]=useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, isAuthenticated);
  const setColaps = () => {
    setCola((pre) => !pre);
  }
  const startTour = () => {
    setIsTourOpen(true);
  };
  // useEffect(()=>{
  //   console.log(isAuthenticated)
  // },[isAuthenticated])
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Flight
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={setColaps}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-collapse ${cola ? "collapse" : ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navBarData.map((ele) => {
              return <li key={ele.name} className="nav-item">
                <Link key={ele.link} className="nav-link active" aria-current="page" to={ele.link}>
                  {ele.name}
                </Link>
              </li>
            })}
          </ul>
          {
            !isLoading &&
            <>
              {
                isAuthenticated && !isLoading && <a className="navbar-brand" href="#">
                  <img
                    className="rounded-circle"
                    src={user.picture}
                    alt="Avtar"
                    width="30"
                    height="30"
                  />
                </a>
              }

              {
                isAuthenticated ? <button onClick={() => {

                  logout({ logoutParams: { returnTo: window.location.origin } })
                }} className="btn btn-outline-success log-out " type="submit">
                  LogOut
                </button> : (<>

                  <button onClick={() => {

                    loginWithRedirect();
                  }} className="btn btn-outline-success" type="submit">
                    LogIn
                  </button>
                  <button onClick={() => {

                    loginWithRedirect({
                      authorizationParams : {
                        screen_hint: 'signup',
                      }
                    });
                  }} className="btn btn-outline-success ms-2" type="submit">
                    SignIn
                  </button>
                </>)
              }
              {
                isAuthenticated && <>
                  <button onClick={startTour} className="btn btn-outline-success ms-2">DEMO</button>
                </>
              }
            </>
          }
        </div>
      </div>
      <Walkthrough isOpen={isTourOpen} onRequestClose={() => setIsTourOpen(false)} />
    </nav>
  );
};

export default Navbar;
