import React from 'react'
import "./card.scss"


const Card = ({image,head,product}) => {
  return (
    <div className="col-xl-6 col-sm-12 cards ">
        <img src={image} alt="" />
        <p className='phar'>{head}</p>
        <span>{product}</span>
    </div>
  )
}

export default Card