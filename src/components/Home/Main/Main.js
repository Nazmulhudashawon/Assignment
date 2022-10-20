import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import { BsCoin } from 'react-icons/bs';
import { HiSpeakerphone } from 'react-icons/hi';
import { BsNewspaper } from 'react-icons/bs';
import { ImBlogger2 } from 'react-icons/im';
import { GiHumanPyramid } from 'react-icons/gi';
import { MdFeedback } from 'react-icons/md';



const Main = () => {
    return (
        
            <div class="container mt-5 ">
  <div class="row">
    <div class="col align-items-center justify-content-center ">
    <p class="align-content-center"><FaMobileAlt size='60px' /></p>
     <p>Prepaid Mobile Recharge</p> 
    </div>
    <div class="col">
      <p><FiMonitor size='60px' /></p>
     <p> DTH Recharge</p>
    </div>
    <div class="col">
   <p><BsCoin size='60px' /></p>
     <p> Loans</p>
    </div>
    <div class="col">
    <p><HiSpeakerphone size='60px'/></p>
      <p>Promotion</p>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col">
      <p><BsNewspaper size='60px'/></p>
    <p>  News</p>
    </div>
    <div class="col">
    <p><ImBlogger2 size='60px'/></p>
     <p> Blog</p>
    </div>
    <div class="col">
      <p><GiHumanPyramid size='60px'/></p>
   <p>   Jobs</p>
    </div>
    <div class="col">
    <p>< MdFeedback size='60px'/></p>
     <p> Anonymous Feedback</p>
    </div>
  </div>
</div>
            
        
    );
};

export default Main;