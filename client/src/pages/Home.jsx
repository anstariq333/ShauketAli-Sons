import React from 'react';
import Slider from '../components/Slider';
import Working from '../components/Working';
import Choose from '../components/Choose ';
import ProjectDetails from '../components/ProjectDetails';
import Clients from '../components/Clients';
import Fade from '../components/Fade';

export default function Home() {
  return (
    <div>
   
   <Slider></Slider>
     <Fade></Fade>
     <Working></Working>
     <Choose></Choose>
     <Clients></Clients>
     <ProjectDetails></ProjectDetails>



    </div>
  )
}
