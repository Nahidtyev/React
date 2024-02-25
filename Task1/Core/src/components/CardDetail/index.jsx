import React from 'react'
import profile from '../../assets/profile.png'
import big from '../../assets/big.png'
import {Link} from 'react-router-dom'
import './detail.scss'
import {FaStar} from 'react-icons/fa'
import {BsArrowRightShort, BsCheck2, BsFillSuitHeartFill} from 'react-icons/bs'
import {FiDownload} from 'react-icons/fi'
import { useQuery } from '@tanstack/react-query'
import { client } from '../../service/service'
import Card from '../../pages/Home/AllProducts/Card'
const CardDetail = () => {

    const{data}=useQuery({
        queryKey:["product"],
        queryFn:()=>client.fetch(`*[_type=="product"]`)
      })

      const renderCards = () => {
        if (!data) {
          return null;
        }
    
        const cardsToRender =  data.slice(0, 3);
    
        return cardsToRender.map((product, index) => (
          <div className="col-xl-4 carding"  
          key={index}>
            <Card 
            image={product.image} 
            name={product.name} 
            price={product.price} 
            />
          </div>
        ));
      };

  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-10">
                <div className="card-detail">
                    <div className="row ">
                        <div className="col-xl-7">
                            <div className='btns'>
                                <button>Product</button>
                                <p>Comments</p>
                            </div>
                            <h1>Fleet - Travel shopping UI design kit</h1>
                            <p>Elegant product mockup for your next project</p>
                            <div className='person'>
                                <div className="image">
                                    <img src={profile} alt="" />
                                </div>
                                <p>  by 
                                    <span className='sp'> Chelsie Haley </span> 
                                    <span className="star"><FaStar className='icon'/> 4.8 (87)</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <button><BsFillSuitHeartFill className='icon'/> 32</button>
                            <button className='dow'>$89 | Download now <FiDownload/></button>
                        </div>
                        <div className="col-xl-12">
                            <img className='big' src={big} alt="" />
                        </div>
                        <div className="col-xl-7">
                            <span>
                                <button></button> Overview
                            </span>
                            <p>
                            Meet Node - a crypto NFT marketplace iOS UI design kit for Figma, Sketch, and Adobe XD. The kit includes 126 stylish mobile screens in light and dark mode, a bunch of crypto 3D illustrations, 1 SaaS landing page with full premade breakpoints, and hundreds of components to help you ship your next crypto, NFT product faster. <br /><br />
                            Types of screens included: onboarding, connect wallet, home feed, profile, upload, menu, search, product detail, notification... <br /><br />
                            If you have any questions or requests, please feel free to leave them all in the comments section.
                            </p>
                        </div>
                        <div className="col-xl-4">
                            <span>
                                <button></button> Fetaures
                            </span>
                            <ul>
                                <li><BsCheck2 fontSize={20}/> 128 prebuilt screens</li> <hr />
                                <li><BsCheck2 fontSize={20}/> SaaS landing page ready</li> <hr />
                                <li><BsCheck2 fontSize={20}/> Global styleguide</li><hr />
                                <li><BsCheck2 fontSize={20}/> Dark + light more ready</li>
                            </ul>
                        </div>
                        <hr />
                        <div className="col-xl-12">
                            <div className='more'>
                                <span>
                                   <button></button> More like this
                                </span>
                                <Link to='/'>
                                    <button>View all <BsArrowRightShort fontSize={25}/></button>
                                </Link>
                            </div>
                            <div className="row ">
                                {renderCards()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardDetail