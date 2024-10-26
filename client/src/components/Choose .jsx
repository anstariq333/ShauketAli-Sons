import './components.css';
import React, { useEffect } from 'react';
import { IoShieldCheckmarkOutline } from "react-icons/io5"
import { MdSupportAgent } from "react-icons/md";
import { GiBarbedSun } from "react-icons/gi";
import Number from './Number';
export default function Choose () 
{
  useEffect(() => {
    const valueDisplays = document.querySelectorAll(".num");
    const interval = 3000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);

      let counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue + '%';
       

        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);

      return () => clearInterval(counter);
    });
  }, []);
  return (
    <>
    <div className='back-pic row d-flex flex-column flex-wrap mt-5 '>
    <center className='my-5 fs-1 fw-bold text-light'>Why choose <span  className='us'>us __</span> </center>
    <div className='d-flex flex-column flex-md-row ms-5'>

        <div className='col-9 col-md-6 ms-5 ms-md-5 text-light m-5'>
            <h3 className='mb-5'>    We are representing the world's best and most renowned brands with a highly professional and knowledgeable team, One of the 
            key element of our business is establishing long-lasting relationships with our clients.</h3>
             
            <h3 className='text-light'>Quality</h3>
<div className='d-flex align-items-center'>
  <div className='container-div rounded mb-5 ms-2'>
    <span className="num text-dark" data-val="85%">000</span>
  </div>
  <div><li><span className='bar mt-5 mb-5 mb-5'><span className='quality'></span></span></li></div>
</div>

<h3 className='text-light ms-3'>Commitments</h3>
<div className='d-flex align-items-center'>
  <div className='container-div rounded mb-5 ms-4'>
    <span className="num text-dark" data-val="100%">000</span>
  </div>
  <div><li><span className='bar mt-5 mb-5 mb-5'><span className='Commitments'></span></span></li></div>
</div>

<h3 className='text-light ms-5'>Time <span>Management</span></h3>
<div className='d-flex align-items-center'>
  <div className='container-div rounded mb-5 ms-5'>
    <span className="num text-dark " data-val="92%">000</span>
  </div>
  <div><li><span className='bar mt-5 mb-5 mb-5'><span className='time1'></span></span></li></div>
</div>
   </div>           

        <div className='col-12 col-md-6 mb-5 me-5 '>
            <Number></Number>
        </div>

    </div>
</div>

    



     <div className=' mx-5  ' >
     <div className='row  boxes '>
     <div className='col-xl-4 col-12 d-flex flex-row bg-light text-dark py-5' >
     <span className='ms-5 '><MdSupportAgent style={{height:'100px', width: '100px' }}  /></span>
     <h1 className='mt-4 fw-bold' >24/7 Support</h1>
     </div>
     <div className='col-xl-4 col-12 d-flex flex-row bg-danger py-5 '  >
     <span className='ms-5 text-light fs-1'><GiBarbedSun style={{height:'120px', width: '120px' }}  /></span>
     <h1 className='text-light mt-xl-2 mt-4 fw-bolder' >Innovative Solution</h1>
     </div>
     <div className='col-xl-4 col-12  d-flex flex-row bg-dark py-5 '  >
     <span className='ms-5 text-light '><IoShieldCheckmarkOutline  style={{height:'100px', width: '100px' }}  /></span>
     <h1 className='text-light mt-xl-1 mt-4 fw-bolder' >Customer Satisfication</h1>
     </div>
   
    </div>
    </div>


    </>
  )
}



 


