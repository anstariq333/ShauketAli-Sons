import React from 'react';
import './components.css';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img src="/images/start1.jpg" className="rotate-img" alt="toward modern"/>
          <Carousel.Caption>
            <h3 className='title'><span data-text="towards modern">towards modern</span></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src="/images/lighting1.jpg" className="rotate-img" alt="darkness to light"/>
          <Carousel.Caption>
            <h3 className='title'><span data-text=" towards light">towards light</span></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src="/images/tower.jpg" className="rotate-img" alt="From underground to the skies"/>
          <Carousel.Caption>
            <h3 className='title'><span data-text="from ground to sky">from ground to sky</span></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src="/images/wind.jpg" className="rotate-img" alt="socket to turbine"/>
          <Carousel.Caption>
            <h3 className='title'><span data-text="towards turbine"> towards turbine</span></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src="/images/soler.jpg" className="rotate-img" alt="From fossil to green energy"/>
          <Carousel.Caption>
            <h3 className='title'><span data-text="towrads Energy">towards Energy</span></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
