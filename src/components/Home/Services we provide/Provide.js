import React from 'react';
import './Provide.css';
import image1 from '../../../images/services/daily.jpg';
import image2 from '../../../images/services/Education-1280x720.jpg';
import image3 from '../../../images/services/construction.jpg';
import image4 from '../../../images/services/maintanance.jpg';
import image5 from '../../../images/services/travel.jpg';
import image6 from '../../../images/services/event.jpg';
import image7 from '../../../images/services/real.jpg';
import image8 from '../../../images/services/handi.jpg';

const Provide = () => {
  return (
    <div>
      <h1 class="text-center mt-5 ">Services We provide</h1>

      <div class="container">
        <div class="row my-4">
          <div class="col img">
            <div class="text-block">
              <h2>20% Off</h2>
            </div>
            <img src={image1} class="  w-100 image" alt="" />
            <h2 class="text">Daily Needs</h2>
          </div>
          <div class="col img">
          <div class="text-block">
              <h2>20% Off</h2>
            </div>
            <img src={image2} class=" w-100 image" alt="" />
            <h2 class="text">Education</h2>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row my-4">
          <div class="col img">
          <div class="text-block">
              <h2>20% Off</h2>
            </div>
            <img src={image3} class=" w-100 image" alt="" />
            <h2 class="text">Construction</h2>
          </div>
          <div class="col img">
          <div class="text-block">
              <h2>20% Off</h2>
            </div>
            <img src={image4} class=" w-100 image" alt="" />
            <h2 class="text">Manintenance</h2>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row my-4">
          <div class="col img">
          <div class="text-block">
              <h2>20% Off</h2>
            </div>
            <img src={image5} class=" w-100 image" alt="" />
            <h2 class="text">Travel</h2>
          </div>
          <div class="col img">
          <div class="text-block">
              <h2>20% Off</h2>
            </div>
            <img src={image6} class="w-100 image" alt="" />
            <h2 class="text">Event Management</h2>
          </div>
        </div>

        <div class="container">
          <div class="row my-4">
            <div class="col img">
            <div class="text-block">
              <h2>20% Off</h2>
            </div>
              <img src={image7} class=" w-100 image" alt="" />
              <h2 class="text">Real Estate</h2>
            </div>
            <div class="col img">
            <div class="text-block">
              <h2>20% Off</h2>
            </div>
              <img src={image8} class=" w-100 image" alt="" />
              <h2 class="text">Handicrafts & Decoratives</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
