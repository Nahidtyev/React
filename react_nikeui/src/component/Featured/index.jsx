import React from 'react'
import "./featured.scss"
import SectionHead from '../../atoms/SectionHead'
import Btn from '../../atoms/Btn'
import Image4 from '../../assets/images/Image4.png'
import Image1 from '../../assets/images/Image1.png'
import Image9 from '../../assets/images/Image9.png'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Featured = () => {
  return (
    <><div className="featured">
      <div className="row justify-content-center">
        <span>Featured</span>
        <div className="image">
        <>
        <Swiper className="mySwiper">
          <SwiperSlide><img src={Image4} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Image1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Image9} alt="" /></SwiperSlide>
        </Swiper>
      </>
        </div>
        <div className='heading'>
          <SectionHead headtext="STEP INTO WHAT FEELS GOOD" content="Cause everyone should know the feeling of running in that perfect pair." />
        </div>
        <div className='btns'><Btn todo="Find Your Shoe" /></div>
      </div>
    </div>
    </>
  )
}

export default Featured