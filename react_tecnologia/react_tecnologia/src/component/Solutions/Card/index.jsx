import React from 'react'
import "./card.scss"
const Card = ({HeadText,text}) => {
  return (
    <div id='card'>
        <button></button>
        <h2>{HeadText}</h2>
        <p>{text}</p>
        <hr className='devider'/>
        <span>Learn More<hr /></span>
    </div>
  )
}

export default Card;