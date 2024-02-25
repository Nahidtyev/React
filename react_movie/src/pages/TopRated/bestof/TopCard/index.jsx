import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import "./card.scss"
import { Link } from 'react-router-dom'
import { urlFor } from '../../../../Service/sanity'

const TopCard = ({id,image,name,stars,type,about,...props}) => {
  return (
    <div className="col-xl-3 col-md-6 col-sm-12  ">
      <div className="top-cards" {...props}>
          <Link  to={`/toprated/details/${image._ref}`}>
              <img src={urlFor(image)} alt=""/>
          </Link>
            <div className="short">
              <p >{name}</p>
              <div className='spans'>
                <span className='spn2'><BsFillStarFill className='str' fontSize={20} />{stars}</span>
                <span className='spn'>{type}</span><br />
              </div>
            </div>
      </div>
    </div>
  )
}

export default TopCard