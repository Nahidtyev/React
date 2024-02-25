import React from 'react'
import './card.scss'
import { BsFillStarFill } from 'react-icons/bs'
import { MdLocalMovies } from 'react-icons/md'
import { BiDownload, BiLike, BiSolidShareAlt } from 'react-icons/bi'
import { urlFor } from '../../../../Service/sanity'

const Card = ({id,name,type,image,stars,about,...props}) => {
  return (
    <div className='col-lg-7'>
        <div className="detailed-movie" {...props}>
              <img src={urlFor(image)} alt="" />
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-4 details">
                <button>PG-13</button>
                <p >{name}</p>
                <div className='spans'>
                    <span className='spn'><MdLocalMovies fontSize={15}/>{type}</span> <br />
                    <span className='spn2'><BsFillStarFill className='str' fontSize={20} />{stars}</span>
                </div>
                </div>
                <div className="col-xl-8 ">
                <div className="likes">
                        <button className='dl'><BiDownload/> Download</button>
                        <button className='sh'><BiSolidShareAlt/> Share</button>
                        <button className='lk'><BiLike/> Like</button>
                </div>
                </div>
            </div>
            <div className="comment">
                <h6>Story Lines</h6>
                <p>{about}</p>
            </div>
        </div>
    </div>
  )
}

export default Card