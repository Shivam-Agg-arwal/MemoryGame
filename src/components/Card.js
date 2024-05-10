import React from 'react';
import './Card.css'


const Card = ({ colour, index,clicked }) => {

  function changeColor() {
    clicked(index);
  }

  return (
    <div className='card' style={{ backgroundColor: colour }} onClick={changeColor}>
    </div>
  );
};

export default Card;
