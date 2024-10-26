import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link,  useLocation } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    
   
    <div className=" footr">
      <footer className="py-5 ms-5">
        <div className="row">
          <div className='col-lg-1'></div>
          <div className="col-11 col-md-3 col-lg-3  ms-xl-5 mb-3  ">
            <h4  >Quick Links</h4>
            <ul className="nav ms-2 flex-column">
            <Link to='/' className='text-decoration-none'  >
              <li className="nav-item mb-2 fs-5"><a href="#" className="nav-link p-0 text-body-secondary"><span className='text-light ' >Home</span></a></li>
              </Link>

              <Link to='/about' className='text-decoration-none'  >
              <li className="nav-item mb-2 fs-5" ><a href="#" className="nav-link p-0 text-body-secondary"><span className='text-light' >About US</span> </a></li>
              </Link>
              <Link to='/clients' className='text-decoration-none'  >
              <li className="nav-item mb-2 fs-5"><a href="#" className="nav-link p-0 text-body-secondary"><span className='text-light' >Our Clients</span></a></li>
              </Link>
              <Link to='/services' className='text-decoration-none'  >
              <li className="nav-item mb-2 fs-5"><a href="#" className="nav-link p-0 text-body-secondary"><span className='text-light' >Our Services</span></a></li>
              </Link>
            </ul>
          </div>
          <div className="col-11 col-md-3 col-lg-3  ms-xl-5 mb-3">
            <h4 className='ms-lg-3' >Our Pages</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-3"><a href="#" className="nav-link p-0 text-body-secondary fs-5">
              <span className='ms-lg-3 text-light'><FaTwitter style={{height:'30px', width: '35px' }}  /></span>
              <span className='text-light' >Twitter</span> </a></li>
             
              <li className="nav-item me-5 me-3 mb-3"><a href="#" className="nav-link p-0 text-body-secondary fs-5 ">
              <span className='ms-lg-3 text-light'><FaFacebookF style={{height:'30px', width: '35px' }}  /></span>
              <span className='text-light' >Facebook</span>  </a></li>
              <li className="nav-item mb-3"><a href="#" className="nav-link p-0 text-body-secondary fs-5">
              <span className='ms-lg-3 text-light'><FaSquareInstagram style={{height:'30px', width: '35px' }}  /></span>
              <span className='text-light' >Instagram</span></a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary fs-5">
              <span className='ms-lg-3 text-light'><BsLinkedin style={{height:'30px', width: '35px' }}  /></span>
              <span className='text-light' >Linkedin</span> </a></li>
             
            </ul>
          </div>

          <div className='col-1'></div>
          <div className="col-11 col-md-3  col-lg-3 mb-3">
            <h4>Services</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-5 fs-5"><a href="#" className="nav-link p-0 text-body-secondary"><span className='text-light' >Highly voltage cable testing</span></a></li>
              <li className="nav-item mb-5 fs-5"><a href="#" className="nav-link p-0 text-body-secondary"><span className='text-light' >Installation of Link box</span></a></li>
              <li className="nav-item mb-5 fs-5"><a href="#" className="nav-link p-0 text-body-secondary"><span className='text-light' >High voltage GIS termination</span></a></li>
              <li className="nav-item mb-5 fs-5"><a href="#" className="nav-link p-0 text-body-secondary"><span className='text-light' > underground cable outdoor <br /> sealing end termination</span></a></li>
              <li className="nav-item  fs-5"><a href="#" className="nav-link p-0 text-body-secondary"><span className='text-light' >Project management for <br /> high voltage underground cable laying</span></a></li>
            </ul>
          </div>
          
         

          {/* Repeat the above structure for other columns */}

          
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-2 my-2 border-top mt-5">
          <p>© 2024 ShauketAli&Sons, Inc. All rights reserved.</p>
          
        </div>
      </footer>
    </div>
 

    </>
  )
}
