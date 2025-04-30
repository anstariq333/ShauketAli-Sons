import React, { useEffect } from 'react';
import '../components/Fade.css';

export default function OurServices() {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in'); 
    const sliders = document.querySelectorAll('.slide-in');

    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
      appearOnScroll.observe(slider);
    });

  }, []);

  return (
   <>
      <div className='service-img   row flex-wrap' >
          <div></div>
          <div>
          <h1 className=' heading1 text-light' >Our Services</h1>
          </div>
          </div>


          

    <div className=' overflow-hidden py-5 px-5'>


      
      <div className='row align-items-center '>
        <div className='col-12 col-md-6 slide-in from-left'>
          <h1 className='ms-5 hh1 '>High Voltage Underground Cable Outdoor Sealing End Termination</h1>
          <p className='ms-5 pp fs-4 '>
          We specialize in the precise and secure termination of high voltage underground cables. 
                 Our services ensure reliable connections and maintain system integrity.
           Trust our expertise to enhance the safety and performance of your power infrastructure.
          </p>
        </div>
        <div className='col-12 col-md-6 slide-in from-right'>
          <img src="./images/joint1.jpg" className="img-about shadow" alt="Lighting" />
        </div>
      </div>
      
      <div className='row align-items-center d-none d-md-flex'>
        <div className='col-12 col-md-6 slide-in from-left'>
        <img src="./images/gis.jpg" className="img-about shadow" alt="Lighting" />
          
        </div>
        <div className='col-12 col-md-6 slide-in from-right'>
          <h1 className='ms-5 hh1'>High Voltage GIS (Gas Insulated Switch Gear) Termination</h1>
          <p className='ms-5 pp fs-4 '>
          Our team excels in terminating high voltage cables within Gas Insulated Switchgear systems. 
          This service optimizes both performance and safety, ensuring that your 
              GIS installations operate at peak efficiency.
           Count on us for dependable and meticulous terminations.
            
          </p>
        </div>
      </div>
      <div className='row align-items-center  d-md-none'>
      
        <div className='col-12 col-md-6 slide-in from-right mt-5'>
          <h1 className='ms-5 hh1'>High Voltage GIS (Gas Insulated Switch Gear) Termination</h1>
          <p className='ms-5 pp fs-4'>
          Our team excels in terminating high voltage cables within Gas Insulated Switchgear systems. 
          This service optimizes both performance and safety, ensuring that your 
              GIS installations operate at peak efficiency.
           Count on us for dependable and meticulous terminations.
            
          </p>
        </div>

        <div className='col-12 col-md-6 slide-in from-left'>
        <img src="./images/gis.jpg" className="img-about shadow" alt="Lighting" />
          
        </div>
      </div>
      
      <div className='row align-items-center'>
        <div className='col-12 col-md-6 slide-in from-left mt-5'>
          <h1 className='ms-5 hh1'>Installation of Link Box</h1>
          <p className='ms-5 pp fs-4 '>
          We offer professional installation services for link boxes, crucial for high voltage cable systems.
           Our installations ensure optimal performance and facilitate easy maintenance. 
           Rely on our skilled team to install link boxes with precision and care.
          </p>
        </div>
        <div className='col-12 col-md-6 slide-in from-right'>
          <img src="./images/box.jpg" className=" img-about shadow" alt="Lighting" />
        </div>
      </div>
      
     
     <div className='row align-items-center d-none d-md-flex '>
        <div className='col-12 col-md-6 slide-in from-left'>
        <img src="./images/project15.jpg" className="img-about shadow" alt="Lighting" />
          
        </div>
        <div className='col-12 col-md-6 slide-in from-right'>
          <h1 className='ms-5 hh1 '>High Voltage Underground Cable Joint</h1>
          <p className='ms-5 pp fs-4 '>
          Our expertise includes the jointing of high voltage underground cables. 
          We ensure seamless connections that guarantee reliable performance and durability.
                   With our advanced techniques,
           your cable joints will be robust and long-lasting.
          </p>
        </div>
      </div>
     <div className='row align-items-center d-md-none'>
       
        <div className='col-12 col-md-6 slide-in from-right mt-5 '>
          <h1 className='ms-5 hh1 '>High Voltage Underground Cable Joint</h1>
          <p className='ms-5 pp fs-4 '>
          Our expertise includes the jointing of high voltage underground cables. 
          We ensure seamless connections that guarantee reliable performance and durability.
                   With our advanced techniques,
           your cable joints will be robust and long-lasting.
          </p>
        </div>

        <div className='col-12 col-md-6 slide-in from-left'>
        <img src="./images/project15.jpg" className="img-about shadow" alt="Lighting" />
          
        </div>

      </div>
      
      <div className='row align-items-center'>
        <div className='col-12 col-md-6 slide-in from-left mt-5 '>
          <h1 className='ms-5 hh1'>High Voltage Underground Cable Fault Identification</h1>
          <p className='ms-5 pp fs-4'>
          We provide advanced fault identification services for high voltage underground cables.
                                             Our methods minimize downtime and enhance system reliability.
           Let us swiftly and accurately detect and address any faults in your underground cable network.
          </p>
        </div>
        <div className='col-12 col-md-6 slide-in from-right'>
          <img src="./images/error.jpg" className="img-about shadow" alt="Lighting" />
        </div>
      </div>


      <div className='row align-items-center d-none d-md-flex'>
        <div className='col-12 col-md-6 slide-in from-left'>
        <img src="./images/tester.jpg" className=" img-about shadow" alt="Lighting" />
          
        </div>
        <div className='col-12 col-md-6 slide-in from-right'>
          <h1 className='ms-5 hh1 '>High Voltage Cable Testing</h1>
          <p className='ms-5 pp fs-4'>
          Our comprehensive high voltage cable testing services ensure the safety and efficiency of your power systems.
                   We perform thorough assessments and provide detailed reports, 
                   helping you maintain optimal operation and prevent potential issues.
          </p>
        </div>
      </div>
      <div className='row align-items-center d-md-none'>
      
        <div className='col-12 col-md-6 slide-in from-right mt-5'>
          <h1 className='ms-5 hh1 '>High Voltage Cable Testing</h1>
          <p className='ms-5 pp fs-4'>
          Our comprehensive high voltage cable testing services ensure the safety and efficiency of your power systems.
                   We perform thorough assessments and provide detailed reports, 
                   helping you maintain optimal operation and prevent potential issues.
          </p>
        </div>
            
        <div className='col-12 col-md-6 slide-in from-left'>
        <img src="./images/tester.jpg" className=" img-about shadow" alt="Lighting" />
          
        </div>

      </div>
      
      <div className='row align-items-center'>
        <div className='col-12 col-md-6 slide-in from-left mt-5'>
          <h1 className='ms-5 hh1 '>Project Management for High Voltage Underground Cable Laying</h1>
          <p className='ms-5 pp fs-4'>
          We deliver end-to-end project management for high voltage underground cable laying projects. 
                  Our services ensure timely and cost-effective completion, from planning to execution. 
               Trust our experienced team to manage your projects with precision and expertise.
          </p>
        </div>
        <div className='col-12 col-md-6 slide-in from-right'>
          <img src="/images/ideas.jpg" className="img-about shadow" alt="Lighting" />
        </div>
      </div>
    </div>
</>

  );
}
