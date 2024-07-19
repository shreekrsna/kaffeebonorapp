import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id='login'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links mt-4 ">
      <div className="app__footer-links_contact mx-6">
        <h1 className="app__footer-headtext mr-[150px] mx-[94px]">Contact Us</h1>
        <p className='text-2xl text-bold'>Kaffeebonor LLP</p>
        
               <p className="p__opensans mt-[-20px] "> No 201, Raheja Point, Magrath Road, Ashoknagar, Bangaluru- 560025</p>
               <p className="p__opensans mx-[80px]">+91 99808 50157  <br/>- Mr Moorthy Krishnan </p>
               <p className=' my-[10px] mx-[80px]'> Email: coffee@kaffeebonor.com</p>
      
       

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

      <div className="app__footer-links_work mx-[20px]">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans ">Monday-Friday</p>
        <p className="p__opensans mt-5">GSTIN: 29ABCFK2992E1Z5</p>

       
      
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Kaffeebonor LLP. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;