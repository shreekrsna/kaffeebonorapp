import React, { useState } from 'react';
import './Gallery.css'; // Assume you have some CSS for styling
import coffee from '../../assets/coffee.jpg';
import Monsoon from '../../assets/Monsoon.jpeg';
import Mysore from '../../assets/Mysore.jpeg';
import Washedrobusta from '../../assets/Washedrobusta.jpeg';
import araku from '../../assets/araku.jpeg';
import bull from '../../assets/bull.jpeg';
import byson from '../../assets/byson.jpeg';
import wave from '../../assets/wave.gif';
import background from '../../assets/background.jpg';

// Map the image file names to imported image modules
const images = {
  'coffee.jpg': coffee,
  'Monsoon.jpeg': Monsoon,
  'Mysore.jpeg': Mysore,
  'Washedrobusta.jpeg': Washedrobusta,
  'araku.jpeg': araku,
  'wave.gif': wave,
  'bull.jpeg': bull,
  'byson.jpeg': byson,
  'background.jpg': background,
};

const Gallery = () => {
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  const coffeeTypes = [
    {
      name: 'Monsooned Malabar Coffee: (MM AA)',
      image: 'Monsoon.jpeg',
      description: 'This comes from the Natural Arabica coffee beans with the screen of above 7.10 Mm.Its a distinct curing process that imparts a one-of-a-kind flavor. Carefully handpicked beans are fermented and washed and then exposed to monsoon winds. This process, traditionally practiced in the coastal regions of Karnataka and Kerala, allows the beans to swell, resulting in a mellow, low-acidity flavor with earthy and musty notes. The extended exposure to monsoon winds and humidity during the curing process gives Monsooned Malabar coffee its distinct flavor profile. This process carried out for 5 to 6 months during Monsoon season which generally rain appears from June to October.',
    },
    {
      name: 'Mysore Nuggets Extra Bold (MNEB)',
      image: 'Mysore.jpeg',
      description: 'This premium washed Arabica coffee variety is celebrated for its large beans and rich, well-balanced flavor. The beans are harvested and processed to remove the outer skin, still covered in their mucilage. They then undergo fermentation, typically lasting around 24 to 48 hours. After thorough washing, the beans are spread out on large drying patios or raised beds to dry. This exposure to sunlight and air for two weeks reduces the moisture content significantly. The result is a full-bodied cup with pleasant acidity and distinctive hints of chocolate and spices.',
    },
    {
      name: 'Robusta Kaapi Royale',
      image: 'Washedrobusta.jpeg',
      description: 'The Robusta Kaapi Royale is a top-tier coffee in India made from high-quality Robusta beans. These beans follow a similar processing method as MNEB, resulting in a bold and intense flavor profile with earthy notes, dark chocolate, and a pleasant bitterness. This coffee variety is often used in espresso blends because it provides a rich crema and a strong coffee base.',
    },
    {
      name: 'Araku Valley Coffee',
      image: 'araku.jpeg',
      description: 'Found in the picturesque Araku Valley in the Eastern Ghats of Andhra Pradesh, this Arabica coffee stands out for its bright acidity, delicate floral and citrusy notes, and clean, refreshing finish. The regions unique microclimate, ranging from 900 to 1,100 meters above sea level, provides favorable conditions for growing high-quality coffee. The most common processing methods used in Araku Valley include the washed (wet) and natural (dry) processes, with the processed beans sun-dried for several weeks. The result is a coffee that showcases the regions rich biodiversity and sustainable farming practices.',
    },
  ];

  return (
    <div className="coffee-grid app__bg text-yellow-300">
      <h1 className="headtext__cormorant">Speciality Grades</h1>
      {coffeeTypes.map((coffee, index) => (
        <div className="coffee-card" key={index}>
          <img src={images[coffee.image]} alt={coffee.name} className="coffee-image" />
          <h3>{coffee.name}</h3>
          <button onClick={() => setSelectedCoffee(coffee)} className="custom__button slide-bottom">Learn More</button>
        </div>
      ))}
      {selectedCoffee && (
        <div className="coffee-modal">
          <div
            className="coffee-modal-content"
            style={{
              backgroundImage: `url(${
                selectedCoffee.name.includes('Monsooned') ? images['wave.gif']
                : selectedCoffee.name.includes('Mysore') ? images['bull.jpeg']
                : selectedCoffee.name.includes('Robusta') ? images['byson.jpeg']
                : selectedCoffee.name.includes('Araku') ? images['background.jpg']
                : ''
              })`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <span className="close-button" onClick={() => setSelectedCoffee(null)}>&times;</span>
            <h2 className="headtext__cormorant">{selectedCoffee.name}</h2>
            <p className="text-2xl p__cormorant">{selectedCoffee.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
