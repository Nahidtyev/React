import React from 'react'
import "./dontmiss.scss"
import SectionHead from '../../atoms/SectionHead'
import Btn from '../../atoms/Btn'
import Image9 from '../../assets/images/Image9.png'

const DontMiss = () => {
  return (
    <div className="dontmiss">
        <div className="row justify-content-center">
            <span>Don't Miss</span>
            <div className="image">
                <img src={Image9} alt="" />
            </div>
            <div className='heading'>
                <SectionHead headtext="FLIGHT ESSENTIALS" content="Your built-to-last, all-week wears—but with style only Jordan Brand can deliver."/>
            </div>
            <div className='btns'><Btn todo="Shop"/></div>
        </div>
    </div>
  )
}

export default DontMiss