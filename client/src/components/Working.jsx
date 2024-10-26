import React from 'react';
import './working.css'; 

export default function Working() {
  return (

    
    <div className="mx-5  my-5">
      <h1 className='target mb-5' > 7 Targeted Service <span className='offerings' >Offerings__</span> </h1>
      <div className="row  justify-content-center mb-4 mb-lg-1">
        <div className=" box1 img-container col-lg-4 col-md-6 mb-3 ">
          <img src="/images/error.jpg" alt="Image 1" className="img-fluid rounded" />
          <div className="overlay">
              <div className="text">High voltage underground cable fault indentification</div>
            </div>
        </div>
        <div className="  box1 img-container col-lg-4 col-md-6 mb-3 mb-lg-1">
          <img src="/images/gis.jpg" alt="Image 2" className="img-fluid rounded" />
          <div className="overlay">
              <div className="text">High voltage GIS ( gas insulated switch gear) termination</div>
            </div>
        </div>
        <div className="  box1 img-container col-lg-4 col-md-6 mb-3 mb-lg-1">
          <img src="/images/box.jpg"  alt="Image 3" className="img-fluid rounded" />
          <div className="overlay">
              <div className="text">installation of Link box</div>
            </div>
        </div>
      </div>
      <div className="row justify-content-center mb-2">
        <div className=" box2 img-container col-lg-4 col-md-6 mb-3">
          <img src="/images/tester.jpg"  alt="Image 4" className="img-fluid rounded" />
          <div className="overlay">
              <div className="text">Highly voltage cable testing</div>
            </div>
        </div>
        <div className=" box2 img-container col-lg-4 col-md-6 mb-3">
          <img src="/images/underline.jpg"  alt="Image 5" className="img-fluid rounded" />
          <div className="overlay">
              <div className="text">High voltage underground cable outdoor sealing end termination</div>
            </div>
        </div>
        <div className=" box2 img-container col-lg-4 col-md-6 mb-3">
          <img src="/images/project7.jpg"  alt="Image 6" className="img-fluid rounded" />
          <div className="overlay">
              <div className="text">High voltage underground cable joint</div>
            </div>
        </div>
      </div>
      <div className="row box2 img-container justify-content-center">
        <div className="col-lg-4 img-container box3 col-md-6 mb-3 ">
          <img src="/images/ideas.jpg"  alt="Image 7" className="img-fluid rounded" />
          <div className="overlay">
              <div className="text">Project management for high voltage underground cable laying</div>
            </div>
        </div>
      </div>
    </div>

  )
}