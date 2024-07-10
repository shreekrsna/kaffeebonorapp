import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding mt-[-55px]' id='home'>
    <div className='app__wrapper_info ml-[70px] '>

      <SubHeading title="Quality from Uphill"/>
      <h1 className="app-header text-8xl">
        From the <br/>Hills to <br/> Your Cup.
      </h1>
      <p className='text-gray-300 mt-5  text-xl'>Savor the essence of bold flavors from India's renowned coffee heartlands. From the Monsooned Malabar's earthy notes to the Mysore Nuggets' rich chocolate hints, our coffee varieties promise a unique and exquisite experience. Discover the diverse and vibrant world of Indian coffee, one cup at a time.</p>

    </div>
    <div className='app__wrapper_img'>
        <img src={images.flower} alt='header img' />
    </div>
  </div>
);

export default Header;
