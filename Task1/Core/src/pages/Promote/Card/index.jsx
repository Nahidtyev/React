import React from 'react'
import { urlFor } from '../../../service/service'
import {AiOutlineArrowUp,AiOutlineArrowDown} from 'react-icons/ai'
import './card.scss'

const Card = ({image,distribution,clicks,view,engagement}) => {
  return (
        <div className="promote-card">
            <tr className="row">
                <td className='col-xl-4'>
                    <img src={urlFor(image)} alt="" />
                    <div>
                        <p>Hurry up! You got 50% off – all items 🔥</p>
                    </div>
                </td>
                <td className='col-xl-1'>
                    <button className='fi'>{distribution}</button>
                </td>
                <td className='col-xl-1'>
                    <button className='se'>{clicks}</button>
                    <button className='rd'></button>
                    <br />
                    <span className='grn'><AiOutlineArrowUp/> 37.8%</span>
                </td>
                <td className='col-xl-1'>
                    <button className='se'>{view}</button>
                    <button className='gr'></button>
                    <br />
                    <span className='grn'><AiOutlineArrowUp/> 37.8%</span>
                </td>
                <td className='col-xl-1'>
                    <button className='se'>{engagement}</button>
                    <button className='bl'></button>
                    <br />
                    <span className='redd'><AiOutlineArrowDown/> 37.8%</span>
                </td>
        </tr>
        </div>
  )
}

export default Card