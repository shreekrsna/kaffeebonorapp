import React from 'react';
import styles from '../../style';
import './Chef.css';
import { images } from '../../constants'; // Assuming the image is imported here

const Chef = () => (
  <div className='chef__bg sm:flex-row flex-col bg-black-gradient-2 app__bg box-shadow p-10' id='chef'>
    <div className="flex-1 flex justify-start items-start flex-col text-container ml-12">
      <h2 className={`${styles.heading2} headtext__cormorant`}>Let's Explore the Coffee World...</h2>
      
      <p className="max-w-[470px] mt-5 text-gray-400 ml-[220px] text-xl">
        The story of Indian coffee begins in the 17th century when Baba Budan, a revered Sufi saint, smuggled seven coffee beans from the port city of Mocha in Yemen. He planted these beans in the Chandragiri Hills of Karnataka, India, marking the birth of coffee cultivation in India. The cool climate and fertile soil of the Western Ghats provided the ideal conditions for coffee cultivation.
      </p>
      
      <p className='mt-5 max-w-[470px] text-gray-400 text-xl'>
        India cultivates all of its coffee under a well-defined two-tier mixed shade canopy, comprising evergreen leguminous trees. Nearly 50 different types of shade trees are found in coffee plantations. Shade trees prevent soil erosion on a sloping terrain; they enrich the soil by recycling nutrients from deeper layers, protect the coffee plant from seasonal fluctuations in temperature, and play host to diverse flora and fauna.
      </p>
      
      <p className="text-xl text-gray-400 ml-[220px] max-w-[470px] mt-5">
        Coffee plantations in India are essential spice worlds too: a wide variety of spices and fruit crops like pepper, cardamom, vanilla, orange and banana grow alongside coffee plants.
      </p>
    </div>
    <div className="flex-1 flex justify-center items-center image-container">
      <img src={images.india} alt="India Coffee" className="chef__image" />
    </div>
    <div className="flex justify-end items-center w-full additional-content mt-10">
      <ul className="text-gray-400  text-xl">
        <li>Karnataka produces 70% of coffee among other coffee-growing regions. Major varieties are both Arabica and Robusta.</li>
        <li>Kerala accounts for 15% of coffee production, major variety is Robusta.</li>
        <li>Tamil Nadu accounts for 10% of coffee production, major variety is Arabica.</li>
        <li>The remaining 5% coffee is grown in non-traditional regions.</li>
      </ul>
    </div>
  </div>
);

export default Chef;
