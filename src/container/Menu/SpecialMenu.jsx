import React, { useEffect, useRef } from 'react';
import './SpecialMenu.css';
import styles from '../../style';

const SpecialMenu = () => {
  const packingDetailsRef1 = useRef(null);
  const packingDetailsRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('li');
          items.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.2}s`;
            item.classList.add('fade-in');
          });
        }
      });
    }, { threshold: 0.1 });

    const ref1Current = packingDetailsRef1.current;
    const ref2Current = packingDetailsRef2.current;

    if (ref1Current) {
      observer.observe(ref1Current);
    }
    if (ref2Current) {
      observer.observe(ref2Current);
    }

    return () => {
      if (ref1Current) {
        observer.unobserve(ref1Current);
      }
      if (ref2Current) {
        observer.unobserve(ref2Current);
      }
    };
  }, []);

  return (
    <div className='special-menu-container' id='special'>
      <div className='container bg-black-gradient flex mx-[220px] rounded-md'>
        <h2 className={`${styles.heading2} text-gradient mt-[-10px]`}> Try our Packaging Services 🚛🚛 </h2>
        <p className='text-yellow-100 text-2xl'>
          "Experience reliable packaging solutions tailored to your needs with our meticulous handling of materials and comprehensive packaging options. From secure container lining to specialized jute and PP bagging, we ensure your goods are protected for safe transit and storage. Trust our expertise in delivering quality packaging that meets industry standards and safeguards your products throughout their journey."
        </p>
      </div>
      <div className="export-packing-container">
        <div className="truck truck-animate">
          <div className="packing-details" ref={packingDetailsRef1}>
            <h2>🚛 Export Packing Types</h2>
            <ul>
              <li>60Kg Jute bags</li>
              <li>1Mt Big bags with wooden pallets or Plastic pallets</li>
              <li>21.6Mts Container lining packing</li>
            </ul>
          </div>
        </div>
        <div className="truck truck-animate">
          <div className="packing-details" ref={packingDetailsRef2}>
            <h2>📦 Specialty Packing</h2>
            <ul>
              <li>10Kg packing with 50Kg master bag. (Mooda Packing/Camel Packing)</li>
              <li>20Kg canvas jute bag packing</li>
              <li>30Kg canvas jute bag packing</li>
              <li>40Kg canvas jute bag packing</li>
              <li>50Kg Jute bag with Eco Tact or Grain Pro Packing</li>
              <li>50Kg PP packing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
