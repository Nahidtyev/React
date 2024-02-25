import React from 'react'
import './sidebar.scss'
import { BiHomeAlt } from 'react-icons/bi'
import {RiVipDiamondLine} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'
import {AiOutlinePieChart, AiOutlinePlusCircle, AiOutlineQuestionCircle, AiOutlineShop} from 'react-icons/ai'
import {TbDiscount2} from 'react-icons/tb'
import {HiOutlineSun} from 'react-icons/hi'
import Logo from '../../assets/Logo.png'
import { PiMoonFill } from 'react-icons/pi'
import {IoIosArrowDown} from 'react-icons/io'
import{Link} from 'react-router-dom'
const SideBar = () => {
    
  return (
    <div className="side-bar">
        <div className="head">
            <div>
                <img src={Logo} alt="" />
            </div>
            <ul>
                <li><span><BiHomeAlt/> Home</span></li>
                <li><span><RiVipDiamondLine/> Products</span><span><AiOutlinePlusCircle/> <IoIosArrowDown/></span></li>
                <li><span><CgProfile/> Customers</span><span><IoIosArrowDown/></span></li>
                <li><span><AiOutlineShop/> Shop</span></li>
                <li><span><AiOutlinePieChart/> Income</span><span><IoIosArrowDown/></span></li>
                <Link to='/promote'><li><span><TbDiscount2/> Promote</span></li></Link>
            </ul>
        </div>
        <div className="foot">
            <hr />
            <p><AiOutlineQuestionCircle/> Help & getting started <button>8</button></p>
            <button className='mode'>
                <button></button>
                <div className="sun">
                    <HiOutlineSun/> Light
                </div>
                <div className="night">
                    <PiMoonFill/> Dark
                </div>
            </button>
        </div>
    </div>
  )
}

export default SideBar