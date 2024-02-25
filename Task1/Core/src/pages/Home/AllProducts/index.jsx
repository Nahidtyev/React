import React, { useState } from 'react'
import profile from '../../../assets/profile.png'
import { LuTwitter } from 'react-icons/lu'
import {BsInstagram} from 'react-icons/bs'
import { PiPinterestLogoBold } from 'react-icons/pi'
import './allproducts.scss'
import FilterBar from '../../../components/FilterBar'
import { useQuery } from '@tanstack/react-query'
import {client} from '../../../service/service'
import Card from './Card'
import {Link} from 'react-router-dom'

const AllProducts = () => {
  const [showMore, setShowMore] = useState(false);

  const{data}=useQuery({
    queryKey:["product"],
    queryFn:()=>client.fetch(`*[_type=="product"]`)
  })
  const handleShowMore = () => {
    setShowMore(true);
  };

  const renderCards = () => {
    if (!data) {
      return null;
    }

    const cardsToRender = showMore ? data : data.slice(0, 9);

    return cardsToRender.map((product, index) => (
        <div className="col-xl-4" 
        key={index}>
          <Link to='/carddetail'>
            <Card 
            image={product.image} 
            name={product.name} 
            price={product.price} />
          </Link>
        </div>
    ));
  };

  return (
    <div className="col-xl-11">
      <div className="row all-products">
        <div className="col-xl-12 profile">
          <div className="p-left">
            <div className="image">
              <img src={profile} alt="" />
            </div>
            <p>
              <h3>Chelsie Haley</h3>
              <span>Dream big. Think different. Do great!</span>
            </p>
          </div>
          <div>
            <div className="p-right">
              <LuTwitter className='icon' fontSize={24}/>
              <BsInstagram className='icon' fontSize={24}/>
              <PiPinterestLogoBold className='icon' fontSize={24}/>
              <button>Follow</button>
            </div>
          </div>
        </div>
        <hr />
        <FilterBar/>
        <div className="row g-4 carding">
          {renderCards()}
        </div>
        {data && data.length > 9 && !showMore && (
          <div className="show-more-button">
            <button className='show-more' onClick={handleShowMore}>Load more</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AllProducts