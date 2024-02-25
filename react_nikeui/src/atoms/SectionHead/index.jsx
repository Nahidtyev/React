import React from 'react'
import "./head.scss"

const SectionHead = ({headtext,content}) => {
  return (
    <div id='heading'>
        <h1>{headtext}</h1>
        <p>{content}</p>
    </div>
  )
}

export default SectionHead