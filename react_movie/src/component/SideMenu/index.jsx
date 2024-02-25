import React from 'react'
import { CiStar } from "react-icons/ci";
import { PiTimer } from "react-icons/pi";
import { BiTimeFive } from "react-icons/bi";
import { TbFileDownload } from "react-icons/tb";
import { MdOutlineNightlight } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import "./sidemenu.scss"
import { useEffect, useState } from 'react'
import "../../styles/global.scss"
import { ThemeContext } from '../../context/ThemeChanger'
import {Link} from "react-router-dom"

const SideMenu = () => {
  const [theme , ChangeTheme]=useState(ThemeContext)
  useEffect(()=>{
    document.body.className= theme;
  })
  return (
    <div className="col-xl-2">
            <div className="home-left">
              <ul>
                <label>Menu</label>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20.9801 3.01998C20.1101 2.14998 18.8801 1.80998 17.6901 2.10998L7.8901 4.55998C6.2401 4.96998 4.9701 6.24998 4.5601 7.88998L2.1101 17.7C1.8101 18.89 2.1501 20.12 3.0201 20.99C3.6801 21.64 4.5501 22 5.4501 22C5.7301 22 6.0201 21.97 6.3001 21.89L16.1101 19.44C17.7501 19.03 19.0301 17.76 19.4401 16.11L21.8901 6.29998C22.1901 5.10998 21.8501 3.87998 20.9801 3.01998ZM12.0001 15.88C9.8601 15.88 8.1201 14.14 8.1201 12C8.1201 9.85998 9.8601 8.11998 12.0001 8.11998C14.1401 8.11998 15.8801 9.85998 15.8801 12C15.8801 14.14 14.1401 15.88 12.0001 15.88Z"
                      fill="#B43FEB"
                    />
                  </svg>{" "}
                  Discovery
                </li>
                <li>
                  <CiStar className="icons" />
                  <Link id='gatelink' to="/toprated">Top Rated</Link>
                </li>
                <li>
                  <PiTimer className="icons" />
                  Coming Soon
                </li>
              </ul>
              <ul>
                <label>Library</label>
                <li>
                  <BiTimeFive className="icons" />
                  Recent Played
                </li>
                <li>
                  <TbFileDownload className="icons" />
                  Download
                </li>
                <li className='moon'>
                  <MdOutlineNightlight className="icons" />
                  Dark Mode 
                  <button id='darkmode' onClick={ChangeTheme}>
                    <button id='circle'></button>
                  </button>
                </li>
                <li>
                  <AiOutlineSetting className="icons" />
                  Setting
                </li>
              </ul>
            </div>
          </div>
  )
}

export default SideMenu