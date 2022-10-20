import React from 'react';
import image1 from '../../../images/providers/man1.jpg';
import image2 from '../../../images/providers/man2.jpg';
import image3 from '../../../images/providers/man3.jpg';
import image4 from '../../../images/services/Education-1280x720.jpg';




const Provider = () => {
    return (
        <div>
            <h1 class="text-center mt-5">All Popular Service Providers</h1>
      <h3 class="text-center text-decoration-underline mt-5">Cleaning & Household Needs</h3>
      <div class="container">
        <div class="row">
          <div class="col shadow">
            <img src={image1} class="d-block w-100" alt="" />
            <p>Prats Showroom</p>
          </div>
          <div class="col shadow">
            <img src={image2} class="d-block w-100" alt="" />
            <p>Dheeraj Mittal</p>
          </div>
          <div class="col shadow">
            <img src={image3} class="d-block w-100" alt="" />
            <p>Education Services</p>
          </div>
        </div>
      </div>

      <h3 class="text-center text-decoration-underline mt-5">House Manintenance & Item Repairing</h3>
      <div class="container">
        <div class="row">
          <div class="col shadow">
            <img src={image1} class="d-block w-100" alt="" />
            <p>Golu Plumbing Work</p>
          </div>
          <div class="col shadow">
            <img src={image2} class="d-block w-100" alt="" />
            <p>Dhananjay Kumar Dubey</p>
          </div>
          <div class="col shadow">
            <img src={image3} class="d-block w-100" alt="" />
            <p>Sonu Electrician</p>
          </div>
        </div>
      </div>

      <h3 class="text-center text-decoration-underline mt-5">Tour & Travels</h3>
      <div class="container">
        <div class="row">
          <div class="col shadow">
            <img src={image3} class="d-block w-100" alt="" />
            <p>Bharat Taxi</p>
          </div>
          <div class="col shadow">
            <img src={image2} class="d-block w-100" alt="" />
            <p>Musafir cabs</p>
          </div>
          <div class="col shadow">
            <img src={image1} class="d-block w-100" alt="" />
            <p>Cab Services</p>
          </div>
        </div>
      </div>
      <h3 class="text-center text-decoration-underline mt-5">Daily Needs </h3>
      <div class="container">
        <div class="row">
          <div class="col shadow">
            <img src={image2} class="d-block w-100" alt="" />
            <p>Ghanshyam provision</p>
          </div>
          <div class="col shadow">
          <img src={image1} class="d-block w-100" alt="" />
            <p>Krisna complex Super</p>
          </div>
          <div class="col shadow">
          <img src={image3} class="d-block w-100" alt="" />
            <p>Spencer's</p>
          </div>
          
        </div>
      </div>
  
      <h3 class="text-center text-decoration-underline mt-5">Education</h3>
      <div class="container">
        <div class="row">
          <div class="col shadow">
            <img src={image4} class="d-block w-100" alt="" />
            <p>Suyas Institute of Inpormation</p>
          </div>
          <div class="col shadow">
            <img src={image4} class="d-block w-100" alt="" />
            <p>Als Coaching</p>
          </div>
          <div class="col shadow">
            <img src={image4} class="d-block w-100" alt="" />
            <p>IIB</p>
          </div>
        
         
        </div>
      </div>
      <h3 class="text-center text-decoration-underline mt-5">Event Mangement</h3>
      <div class="container">
        <div class="row">
          <div class="col shadow">
            <img src={image1} class="d-block w-100" alt="" />
            <p>Ganpati Marraige</p>
          </div>
          <div class="col shadow">
            <img src={image2} class="d-block w-100" alt="" />
            <p>Atul patel</p>
          </div>
          <div class="col shadow">
            <img src={image3} class="d-block w-100" alt="" />
            <p>Satkar marraige</p>
          </div>
        
         
        </div>
      </div>
      <h3 class="text-center text-decoration-underline mt-5">Handicrafts & Decoratives</h3>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 shadow">
            <img src={image3} class="d-block w-100" alt="" />
            <p>pranjali</p>
          </div>
        
         
        </div>
      </div>
     
            
        </div>
    );
};

export default Provider;