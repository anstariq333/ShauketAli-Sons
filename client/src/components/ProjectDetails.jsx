import React from 'react';
import './ProjectDetails.css';

export default function ProjectDetails() {
  return (
    <div className=' baody row  flex-wrap ' >
          
         
    <center>
      <h1 className='project col-12  flex-wrap' >Projects for <span className='inspirations' >inspirations __</span></h1>

      <h5 className='col-10 flex-wrap prop fs-3 mb-5' >SAS is a turnkey solution provider of power generation, including project management
             and cost-effective operational services.We offer complete preventive, predictive,
             corrective and situational maintenances with depth of knowledge, expertise and quality commitments.</h5>

        <article className='gallery d-none d-sm-grid col-8 col-md-9 col-lg-9 col-xl-8  col-xxl-5 me-lg-5 pe-lg-5 ms-xxl-5 ps-xxl-5' style={{ margin: '0 auto', maxWidth: '90%' }}>
       
          <img src="./images/project16.jpg" alt="" />
          <img src="./images/project2.jpg" alt="" />
          <img src="./images/project11.jpg" alt="" className='mt-5 mt-md-0 ' />
          <img src="./images/project8.jpg"  className='correct' alt="" />
          <img src="./images/pic4.jpg" alt="" />
          <img src="./images/project10.jpg" alt="" />
          <img src="./images/project9.jpg" alt="" />
          <img src="./images/project7.jpg" alt="" />

        </article>
        <div className='container d-block d-sm-none '>

         <div className='col-12' >
          <img src="./images/project16.jpg" alt=""  className='w-100 object-fit-cover rounded mb-2' style={{ height: '200px'}}  />
          <img src="./images/project2.jpg" alt="" className='w-100 object-fit-cover rounded mb-2' style={{ height: '200px'}} />
          <img src="./images/project9.jpg" alt="" className='w-100 object-fit-cover rounded mb-2' style={{ height: '200px'}} />
          <img src="./images/project7.jpg" alt="" className='w-100 object-fit-cover rounded mb-2' style={{ height: '200px'}} />
          <img src="./images/project11.jpg" alt="" className='w-100 object-fit-cover rounded mb-2' style={{ height: '200px'}} />
          <img src="./images/project8.jpg" alt="" className='w-100 object-fit-cover rounded mb-2' style={{ height: '200px'}} />
          </div>
        </div>
       
    </center>
    </div>
  )
}


