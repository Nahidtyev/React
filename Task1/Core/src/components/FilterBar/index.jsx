import React from 'react'
import {HiOutlineFilter} from 'react-icons/hi'
import {IoIosArrowDown} from 'react-icons/io'
import './filterbar.scss'
const FilterBar = () => {
  return (
    <div className="col-xl-12 filter-bar">
        <span>
            <button className='fi'>Products</button>
            <p>Followers</p>
            <p>Following</p>
        </span>
        <span>
            <button className='se'>Most recent <IoIosArrowDown fontSize={15}/></button>
            <button><HiOutlineFilter fontSize={20}/></button>
        </span>
    </div>
  )
}

export default FilterBar