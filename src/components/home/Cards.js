import React from 'react'
import Card from './Card';
import './Home.css';

const Cards = ({title,data}) => {
  return (
    <section className='section-home'>
          <h2 className='section-title'>{title}</h2>

          <div className='cards'>
            {data.map((dat) => {
              return (
                <Card dat={dat} key={dat.id} />
              );
            })}
          </div>
        </section>
  )
}

export default Cards