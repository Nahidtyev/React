import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import "./reccard.scss"

const RecCard = ({image,name,type,stars}) => {
  return (
    <div className="col-xl-9 rec-cards ">
        <img src={image} alt=""/>
        <div className="short">
          <p >{name}</p>
          <div className='spans'>
            <span className='spn2'><BsFillStarFill className='str' fontSize={20} />{stars}</span>
            <span className='spn'>{type}</span><br />
          </div>
        </div>
    </div>
  )
}

export default RecCard