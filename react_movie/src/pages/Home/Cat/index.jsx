import React from 'react'
import "./catbtn.scss"

const CatBtn = ({category}) => {
  return (
    <button className='catbtn'>{category}</button>
  )
}

export default CatBtn