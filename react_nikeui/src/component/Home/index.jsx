import React from 'react'
import SectionHead from '../../atoms/SectionHead'
import Btn from '../../atoms/Btn'
import './home.scss'
import Image from "../../assets/images/Image.png"

const Home = () => {
  return (
    <div className="home">
        <div className="row justify-content-center">
            <div className="col-xl-4">
                <h5>Hello Nike App</h5>
                <p>Download the app to access everything Nike. <span>Get Your Great</span></p>
            </div>
            <div className="image">
                <img src={Image} alt="" />
            </div>
            <div className='heading'>
                <p>First Look</p>
                <SectionHead headtext="Nike Air Max Pulse" content="Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                —designed to push you past your limits and help you go to the max."/>
            </div>
            <div className='btns'><Btn todo="Notify Me"/><Btn todo="Shop Air Max"/></div>
        </div>
    </div>
  )
}

export default Home