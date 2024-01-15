import React from 'react';

function SponsorItem({ image, name, info }) {
  return (
    <div className='sponsorItem'>
        <div style={{ backgroundImage: `url(${image})`}}> </div>
        <h1> {name} </h1>
        <p> {info} </p>
    </div>
  )
}

export default SponsorItem