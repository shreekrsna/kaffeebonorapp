import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id='login'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext mr-[150px]">Contact Us</h1>
        <p className='text-2xl text-bold mx-2 mt-5'>Kaffeebonor LLP</p>
        
               <p className="p__opensans mt-[-20px] "> No 201, Raheja Point, Magrath Road, Ashoknagar, Bangaluru- 560025</p>
               <p className="p__opensans ">+91 99808 50157  <br/>- Mr Moorthy Krishnan </p>
      
       

      </div>

      <div className="app__footer-links_logo">
        <h2 className='text-3xl text-yellow-100 mb-5'> KAFFEEBONOR LLP</h2>
        
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt='spoon_image' />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans mx-[200px]">Monday-Friday</p>
       
      
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Kaffeebonor LLP. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;