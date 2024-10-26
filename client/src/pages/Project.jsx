import React from 'react';
import ProjectDetails from '../components/ProjectDetails';

export default function Project() {
  return (

   <>

       <div className='project-img  row flex-wrap' >
          <div></div>
          <div>
          <h1 className=' heading1 ms-5 text-light' >Projects</h1>
          </div>
          </div>
  


    <div>
       <ProjectDetails></ProjectDetails>

    </div>
    </>
  )
}
