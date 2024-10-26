import React, { useState } from 'react';
import './ContactUs.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiMailFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import EmailForm  from '../components/EmailForm';
const ContactUs = () => {

  return (
<>
        <div className='contact-img  row flex-wrap' >
          <div></div>
          <div>
          <h1 className=' heading1 text-light' >Send Us your  Inquiry</h1>
          </div>
          
        </div>

   
     <div className=' container-fluid '  >
      <div  className='row' >
      
        <div className=' col-12 col-md-3 ms-5 d-flex flex-wrap flex-column' >
          <div  >
          <h3 className='phone' ><BsFillTelephoneFill /> <span>PHONE</span>  </h3>
          <h4 className ='d-flex flex-wrap' >+92 307 0406219 </h4>
          <h4 className ='d-flex flex-wrap' >+92 342 3346941</h4>
        </div>
        <div> 
        <h3 className='phone' ><RiMailFill  style={{height:'35px', width: '35px' }}   /><span className='ms-2' >Email</span>  </h3>
        <h4 className ='d-flex flex-wrap' >abdulhanan2742@gmail.com</h4>
         <h4 className ='d-flex flex-wrap' >Shaukatali2742@yahoo.com</h4>

        </div>
        <div>
        <h3 className='phone' ><FaLocationDot style={{height:'35px', width: '35px' }} /> <span>ADDREES</span>  </h3>
          <h4 className ='d-flex flex-wrap' >P103,Model Town,Gojra,PK</h4>
        
        </div>
        </div>
         <div className='col-12 col-md-8 my-5' >  
            <EmailForm></EmailForm>
          </div>
          </div>
     </div>
    
        
      
    
   
    </>
  );
};

export default ContactUs;
