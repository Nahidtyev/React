import React from 'react'
import './searchbar.scss'
import {BiCommand, BiCommentDetail} from 'react-icons/bi'
import {PiBellRingingBold} from 'react-icons/pi'
import {LuSearch} from 'react-icons/lu'
import {AiOutlinePlus} from 'react-icons/ai'
import profile from '../../assets/profile.png'
const SearchBar = () => {
  return (
    <div className="search-bar">
        <div className='srch-left'>
            <LuSearch fontSize={25} className='icon'/>
           <input type="text" placeholder='Search or type a command'/>
           <button><BiCommand/> F</button>
        </div>
        <div className="srch-right">
            <button><AiOutlinePlus/> Create</button>
            <BiCommentDetail fontSize={20} className='icn'/>
            <PiBellRingingBold fontSize={20} className='icn'/>
            <div className='image'><img src={profile} alt="" /></div>
        </div>
    </div>
  )
}

export default SearchBar