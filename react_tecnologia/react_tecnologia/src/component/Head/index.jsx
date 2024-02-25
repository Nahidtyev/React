import React from 'react'
import "./head.scss"

const Head = ({motto,heading}) => {
  return (
    <div className="head">
            <button>{motto}</button>
            <h1>{heading}</h1>
    </div>
  )
}

export default Head;