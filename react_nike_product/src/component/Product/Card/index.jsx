import React from 'react'
import "./card.scss"
import { useState } from 'react';

const Card = ({image,proname,head,product,color,price}) => {

  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className="col-xl-4 col-md-6 col-sm-12 best-cards ">
        <img src={image} alt=""  onClick={toggleTextVisibility} className="toggle-image" />
        {isTextVisible &&(
          <div className='text-container'>
            <p>Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
           <hr />
            <div className='con2'>
              <p>Colour Shown: Sail/Fossil <br /> Stone/Celestial Gold/Taupe Haze</p>
              <p>Style: DM9652-102</p>
            </div>
          </div>
        )}
        <h6>{proname}</h6>
        <p className='phar'>{head}</p>
        <span>{product} <br />1 {color}</span><br />
        <span className='price'>MRP : ₹ {price}</span>
    </div>
  )
}

export default Card