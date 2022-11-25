import React from 'react';
import './Card.css';


export default function Card(props) {
  const imageUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;

  return (
    <div>
        <a href="https://www.youtube.com/@Netflix"><img className='card_poster' src={imageUrl} alt='poster' /></a>
   
    </div>
  );
}
