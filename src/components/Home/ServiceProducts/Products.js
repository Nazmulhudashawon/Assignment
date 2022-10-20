import React from 'react';
import './Products.css'
import image1 from '../../../images/cement.jpg';
import image2 from '../../../images/istockphoto-174625708-612x612.jpg';
import image3 from '../../../images/product-500x500.jpeg';
import image4 from '../../../images/almond-milk-cacao-1litre.png';
import image5 from '../../../images/juice.jpg';
import image6 from '../../../images/amla.jpg';
import image7 from '../../../images/tax.jpg';
import image8 from '../../../images/audit.jpg';
import image9 from '../../../images/tax audit.jpg';
import image10 from '../../../images/double-ply-mink-blankets-500x500.jpg';
import image11 from '../../../images/suit.jpg';
import image12 from '../../..//images/apple-macbook-pro-touch-bar-16-i9-2.3-16gb-1tb-ssd-laptop.jpg';

const Products = () => {
  return (
    <div class="container">
      <h1 class="text-center mt-5 ">Popular Service Products</h1>
      

      <h3 class="text-center text-decoration-underline mt-5">Daily Needs</h3>
     
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col shadow ">
            <img src={image4} class="d-block w-100" alt="" />
            <p>almond Milk Cacao-</p>
          </div>
          <div class="col shadow">
            <img src={image5} class="d-block w-100" alt="" />
            <p>Juice Lichi Luscious</p>
          </div>
          <div class="col shadow">
            <img src={image6} class="d-block w-100" alt="" />
            <p>Amla Juice</p>
          </div>
        
      </div>
      <h3 class="text-center text-decoration-underline mt-5">Construction</h3>
      
        <div class="row">
          <div class="col shadow">
            <img src={image1} class="d-block w-100" alt="" />
            <p>Ambuja Cement</p>
          </div>
          <div class="col shadow">
            <img src={image2} class="d-block w-100" alt="" />
            <p>Royel Brick</p>
          </div>
          <div class="col shadow">
            <img src={image3} class="d-block w-100" alt="" />
            <p>Dehri Bihar Morang</p>
          </div>
        </div>
      

      <h3 class="text-center text-decoration-underline mt-5">Consultancy</h3>
     
        <div class="row">
          <div class="col shadow">
            <img src={image7} class="d-block w-100" alt="" />
            <p>TDS Filing</p>
          </div>
          <div class="col shadow">
            <img src={image8} class="d-block w-100" alt="" />
            <p>Concurrent Audit</p>
          </div>
          <div class="col shadow">
            <img src={image9} class="d-block w-100" alt="" />
            <p>Tax Audit</p>
          </div>
        </div>
      
      <h3 class="text-center text-decoration-underline mt-5">Laundry</h3>
    
        <div class="row">
          <div class="col-lg-4 shadow">
            <img src={image10} class="d-block w-100" alt="" />
            <p>BLANKET DOUBLE</p>
          </div>
          <div class="col-lg-4 shadow">
            <img src={image11} class="d-block w-100" alt="" />
            <p>Suit</p>
          </div>
          
        </div>
      
      <h3 class="text-center text-decoration-underline mt-5">Electronics</h3>
     
        <div class="row">
          <div class="col-lg-4 shadow">
            <img src={image12} class="d-block w-100" alt="" />
            <p>Apple Mackbbok Air</p>
          </div>
        
         
        </div>
      </div>
    
  );
};

export default Products;
