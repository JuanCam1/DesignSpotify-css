import React from 'react';
import './Home.css';

const Card = ({ dat }) => {
  return (
    <div className='card' key={dat.id}>
      <div className='home-img'>
        <img src={dat.imgMusic} alt={dat.title} />
      </div>
      <p className='home-title'>{dat.title}</p>
      <p className='home-desc'>{dat.desc}</p>
    </div>
  );
};

export default Card;
