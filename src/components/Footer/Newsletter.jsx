import React from 'react';
import indiaimg from '../../assets/indiaimg.jpg';
import SubHeading from '../SubHeading/SubHeading';
import { logoanime } from '../../constants';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter-container" id="footer">
    <div className="app__newsletter-content">
      <div className="app__newsletter-heading">
        {/* <SubHeading title="Newsletter" /> */}
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <button type="button" className="custom__button">Subscribe</button>
      </div>
    </div>
    <div className="app__newsletter-image justify-center items-center mx-[200px] mt-3">
      <img src={indiaimg} alt="India" width={400} />
   
    </div>
  </div>
);

export default Newsletter;
