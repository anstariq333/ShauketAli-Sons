import './components.css';
import React, { useEffect } from 'react';
import { RiTeamFill } from "react-icons/ri";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";



export default function Number() 
  {
    useEffect(() => {
      const valueDisplays = document.querySelectorAll(".numb");
      const interval = 3000;
  
      valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
  
        let counter = setInterval(() => {
          startValue += 1;
          valueDisplay.textContent = startValue + '+';
         
  
          if (startValue === endValue) {
            clearInterval(counter);
          }
        }, duration);
  
        return () => clearInterval(counter);
      });
    }, []);
  return (
    <>
    <div  >
      <div className='d-flex flex-row justify-content-between me-md-5 ms-md-5 ms-xl-0' >
      <div className='employ ' >
      <span className='ms-4 text-light'>< RiTeamFill style={{height:'100px', width: '100px' }} /></span>
      <h1 className='text-light numb fs-1  ms-5'data-val="50" >000</h1>
       <h1  className='text-light fs-1 me-3 me-md-0 pb-5'  >Employees</h1>
      </div>
    <div className='customer me-5 d-md-none d-xl-block' >  
      <span className='ms-4 text-light'><IoPersonCircleSharp style={{height:'100px', width: '100px' }}  /></span>
      <h1 className='text-light fs-1  ms-4 ps-2 numb 'data-val="200" >000</h1>
      <h1 className='text-light fs-1 me-5 '  >Customers</h1>
     </div>
   </div>
   <div className=' ms-2 d-flex flex-row justify-content-between me-5 ms-md-5 ms-xl-0' >
    <div className='office' >
      <span className='ms-3 fs-1 me-5 me-md-0 text-light'><FaRegBuilding  style={{height:'100px', width: '100px' }}  /></span>
      <h1 className='text-light fs-1 numb ms-5' data-val="1" >0</h1>
       <h1 className='text-light  ms-1'  >Offices</h1> 
      </div>
   <div className='Project me-3 pe-3 d-md-none d-xl-block' >
       <span className=' text-light'><FaReact style={{height:'100px', width: '100px' }}  /></span>
       <h1 className='text-light fs-1 ms-3  numb'data-val="300" >000+</h1>
            <h1  className='text-light  me-5 pe-5' >Projects </h1>
     </div>
   
    </div>
    </div >

    </>
  )
}



