import React, { useState } from 'react';
import { Link,  useLocation } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { RiMailFill } from "react-icons/ri";
import '../App.css';

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header className="header my-2">
      <nav className="navbar" aria-label="First navbar example">
        <div className="row d-flex justify-content-between align-items-center">
         
            <div className="col-6 col-lg-4  mt-2">
              <Link to='/' className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                <h1 className='fw-bold'>
                  <span className="Shauket ms-sm-5 ms-2 ms-lg-3 ms-xl-5">SHAUKAT</span>
                  <span className='Ali'>ALI</span>
                </h1>
                <h5 className="And fw-lighter fst-italic fs-6">
                  <span className="ms-5 text-danger">&</span>
                  <span className="text-info">SONS</span>
                </h5>
              </Link>
            </div>
   

            <div className="col-0 col-lg-4  pages d-none d-sm-none d-md-none d-lg-block me-lg-2 me-xl-4">
              <ul className="links d-flex justify-content-end column-gap-lg-1 column-gap-xl-3 column-gap-xxl-5 fs-5 text-auto">
                <Link to='/' className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                  <li>
                    <span className='ms-2'><GoHomeFill className='img-fluid' style={{ height: '30px', width: '40px' }} /></span>
                    Home
                  </li>
                </Link>
                <Link to='/about' className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                  <li>
                    <span className='ms-4'><RiTeamFill style={{ height: '30px', width: '30px' }} /></span>
                    About Us
                  </li>
                </Link>
                <Link to='/services' className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>
                  <li>
                    <span className='ms-4'><GrServices style={{ height: '30px', width: '30px' }} /></span>
                    Services
                  </li>
                </Link>
                <Link to='/projects' className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
                  <li>
                    <span className='ms-3'><RiLightbulbFlashFill style={{ height: '30px', width: '35px' }} /></span>
                    Projects
                  </li>
                </Link>
                <Link to='/clients' className={`nav-link ${location.pathname === '/clients' ? 'active' : ''}`}>
                  <li>
                    <span className='ms-3'><IoPersonCircleSharp style={{ height: '30px', width: '30px' }} /></span>
                    Clients
                  </li>
                </Link>
                <Link to='/contact-us' className={`nav-link ${location.pathname === '/contact-us' ? 'active' : ''}`}>
                  <li>
                    <span className='ms-4'><RiMailFill style={{ height: '30px', width: '40px' }} /></span>
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>
            <div className="col-1  box-button   text-dark ">
              <button className="navbar-toggler d-block d-lg-none " type="button" onClick={toggleExpansion}>
                <p className="navbar-toggler-icon text-dark"></p>
              </button>
            </div>
          
          </div>
        
      </nav>
      <div className={`navbar-collapse ${isExpanded ? 'show' : 'collapse'}`} id="navbarsExample01">
        <ul className="navbar-nav ms-5 me-auto row-gap-4 mb-2">
          <Link to='/' className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            <li className="nav-item">Home</li>
          </Link>
          <Link to='/clients' className={`nav-link ${location.pathname === '/clients' ? 'active' : ''}`}>
            <li className="nav-item">Clients</li>
          </Link>
          <Link to='/projects' className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
            <li className="nav-item">Projects</li>
          </Link>
          <Link to='/services' className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>
            <li className="nav-item">Services</li>
          </Link>
          <Link to='/about' className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
            <li className="nav-item">About Us</li>
          </Link>
          <Link to='/contact-us' className={`nav-link ${location.pathname === '/contact-us' ? 'active' : ''}`}>
            <li className="nav-item">Contact Us</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}