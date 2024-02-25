import React from 'react'
import Btn from '../../../atoms/Btn'
import './card.scss'
const Card = ({img,todo}) => {
  return (
    <div className="col-xl-4 col-md-6 col-sm-12 ">
                <div className="image">
                  <Btn todo={todo}/>
                <img src={img} alt="" />
                </div>
            </div>
  )
}

export default Card