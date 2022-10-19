import React from 'react';
import "./Banner.css"
import image1 from "../../../images/images (1).jpg"
import image2 from "../../../images/images.jpg"
import image3 from "../../../images/OFF_Overtime_Product_Collections_Large_2X.jpg"
import { HiOutlineMicrophone } from 'react-icons/hi';
import {AiOutlineSearch } from 'react-icons/ai';
import {BsFillChatDotsFill } from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {AiFillBell } from 'react-icons/ai';





const Banner = () => {
    return (
        <div>
           

<div class="row  justify-content-center align-items-center header gx-0">

  

     <div class='col-lg-auto col-md-6 col-sm-2 d-inline'>
      <div class="search">
      <p class="fa"><AiOutlineSearch size="25px" /></p>
     <input type="text" class="" placeholder="    Search for products..."></input>

     </div>

      </div>
    
     
      <div class="col-lg-2 col-md-6 col-sm-6 hide ">
      <div className='row'>
      <p class="icon col"><HiOutlineMicrophone size="30px"/></p>
      <p class="icon col"><BsFillChatDotsFill  size="30px"/></p>
      <p class="icon col"><AiOutlineShoppingCart size="30px"/></p>
      <p class="icon col"><AiFillBell size="30px"/></p>
      </div>
      
      </div>
      <div class="col-lg-2 col-md-6 col-sm-6 justify-content-end align-items-end hide  " >
      <button>Login</button>

      </div>
    

</div>


<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image1} class=" w-100 bimage" alt="..."></img>

    </div>
    <div class="carousel-item">
      <img src={image2} class=" w-100 bimage" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={image3} class=" w-100 bimage" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            
        </div>
    );
};

export default Banner;