import React from 'react'
import "./footlist.scss"

const Footlist = ({todos}) => {
  return (
    <div >
        <ul>
          {[...todos].map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
    </div>
  )
}

export default Footlist