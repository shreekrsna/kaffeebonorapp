import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding " id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about mb-8">
        <h1 className="headtext__cormorant ">Washed Arabica</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <ul className='p__opensans flex flex-col justify-end items-start space-y-2'>
          <li><span>Plantation MNEB</span> <span>(Screen 19)</span></li>
          <li><span>Plantation AA</span> <span>(Screen 18)</span></li>
          <li><span>Plantation A</span> <span>(Screen 17)</span></li>
          <li><span>Plantation B</span> <span>(Screen 15)</span></li>
          <li><span>Plantation C</span> <span>(Screen 14)</span></li>
          <li><span>Plantation Pea Berry</span> <span>(PB)</span></li>
        </ul>
        <p className='cup-profile text-gradient'>Cup Profile: Full-bodied cup with pleasant acidity and distinctive hints of chocolate and spices.</p>

        <h1 className="headtext__cormorant mt-6">Washed Robusts</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <ul className='p__opensans flex flex-col justify-end items-start space-y-2'>
          <li>Robusta Kappi Royale AA (Screen 18)</li>
          <li>RKR 17 (Screen 17)</li>
          <li>Robusta Parchment AB (Screen 15)</li>
          <li>Robusta Parchment C (Screen 14)</li>
          <li>Robusta Parchment Pea Berry (PB)</li>
        </ul>
        <p className='cup-profile text-gradient'>Cup Profile: Bold and intense flavor profile with earthy notes, dark chocolate, and a pleasant bitterness.</p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.cofeebean} alt="coffee" />
      </div>

      <div className="app__aboutus-content_history mb-4">
        <h1 className="headtext__cormorant">Natural Arabica</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <ul className='p__opensans flex flex-col justify-end items-start space-y-2'>
          <li>Arabica Cherry AA (Screen 18)</li>
          <li>Arabica Cherry A (Screen 17)</li>
          <li>Arabica Cherry AB (Screen 15)</li>
          <li>Arabica Cherry C (Screen 14)</li>
          <li>Arabica Cherry Pea Berry (PB)</li>
        </ul>
        <p className='cup-profile text-gradient'>Cup Profile: Medium Body, Fair acidity with fruity flavor and aroma.</p>

        <h1 className="headtext__cormorant mt-6">Natural Robusta</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <ul className='p__opensans flex flex-col justify-end items-start space-y-2'>
          <li>Robusta Cherry AAA (Screen 19)</li>
          <li>Robusta Cherry AA (Screen 18)</li>
          <li>Robusta Cherry A (Screen 17)</li>
          <li>Robusta Cherry AB (Screen 15)</li>
          <li>Robusta Cherry C (Screen 14)</li>
          <li>Robusta Cherry Pea Berry</li>
        </ul>
        <p className='cup-profile text-gradient '>Cup Profile: Good aroma with good body. Flavored hot chocolate and molasses flavor.</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
