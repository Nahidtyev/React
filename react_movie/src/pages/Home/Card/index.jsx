import React from 'react'
import "./moviecard.scss"
import {MdLocalMovies} from 'react-icons/md'
import {BsFillStarFill} from 'react-icons/bs'

const MovieCard = ({image,name,type,stars}) => {
  return (
    <div className="col-xl-4 col-md-12 col-sm-12 best-cards ">
        <img src={image} alt=""/>
        <div className="short">
          <button>PG-13</button>
          <p >{name}</p>
          <span className='spn'><MdLocalMovies fontSize={15}/>{type}</span><br />
          <span className='spn2'><BsFillStarFill className='str' fontSize={20} />{stars}</span>
        </div>
    </div>
  )
}

export default MovieCard