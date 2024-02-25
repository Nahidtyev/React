import React from 'react'
import { AiFillInfoCircle, AiOutlineArrowUp } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import {BsPersonCircle} from 'react-icons/bs'
import {TfiExchangeVertical} from 'react-icons/tfi'
import {LiaCommentsSolid} from 'react-icons/lia'
import {LuMouse} from 'react-icons/lu'
import './insights.scss'

const Insights = () => {
  return (
    <div className="insights">
        <div className="head">
            <p> <button></button> Insights</p>
            <button >Last 7 days <IoIosArrowDown size={20}/></button>
        </div>
        <ul className='row'>
            <li className='col-xl-3'>
              <div className="earning">
                    <button><BsPersonCircle size={24}/></button>
                    <p>People reached <AiFillInfoCircle/></p>
                    <h1>256k</h1>
                    <p><span><AiOutlineArrowUp/> 37.8%</span> this week</p>
                </div>
            </li>
            <li className='col-xl-3'>
                <div className="earning">
                    <button><TfiExchangeVertical size={24}/></button>
                    <p>Engagement <AiFillInfoCircle/></p>
                    <h1>1.2x</h1>
                    <p><span><AiOutlineArrowUp/> 37.8%</span> this week</p>
                </div>
            </li>
            <li className='col-xl-3'>
                <div className="earning">
                    <button><LiaCommentsSolid size={24}/></button>
                    <p>Comments <AiFillInfoCircle/></p>
                    <h1>128</h1>
                    <p><span><AiOutlineArrowUp/> 37.8%</span> this week</p>
                </div>
            </li>
            <li className='col-xl-3'>
                <div className="earning">
                    <button><LuMouse size={24}/></button>
                    <p>Link clicks <AiFillInfoCircle/></p>
                    <h1>80</h1>
                    <p><span><AiOutlineArrowUp/> 37.8%</span> this week</p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Insights