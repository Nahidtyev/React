import React from 'react'
import './card.scss'
import { urlFor } from '../../../../service/service'
const Card = ({image,name,price}) => {
  return (
    <div className="cards">
        <img src={urlFor(image)} alt="" />
        <div className='fl'>
          <p>{name}</p>
          <span><button className='prc'> $ {price}</button></span>
        </div>
    </div>
  )
}

export default Card