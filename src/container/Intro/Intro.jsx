import React from 'react';
import { images } from '../../constants';
import './Intro.css';

const Intro = () => (
  <div className=' app__bg flex justify-end   '>
    
    <img src={images.india} width={880} className='mr-[120px]'/>
  </div>
);

export default Intro;
