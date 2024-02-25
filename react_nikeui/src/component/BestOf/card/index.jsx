import React from 'react'
import "./card.scss"


const Card = ({image,head,product}) => {
  return (
    <div className="col-xl-4 col-md-6 col-sm-10 best-cards ">
        <img src={image} alt="" />
        <p className='phar'>{head}</p>
        <span>{product}</span>
    </div>
  )
}

export default Card