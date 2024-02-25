import React from 'react'
import Card from './card'
import "./bestof.scss"
import Image1 from '../../assets/images/Image1.png'
import Image2 from '../../assets/images/Image2.png'
import Image3 from '../../assets/images/Image3.png'
import {TfiArrowCircleLeft} from 'react-icons/tfi'
import {TfiArrowCircleRight} from 'react-icons/tfi'

function BestOf() {
    const CardData=[
        {
            image: Image1,
            head:"Nike Air Max Pulse",
            product:"Women's Shoes"
        },
        {
            image: Image2,
            head:"Nike Air Max Pulse",
            product:"Men's Shoes"
        },
        {
            image: Image3,
            head:"Nike Air Max 97 SE",
            product:"Men's Shoes"
        },
    ]
  return (
    <div className="bestof">
        <div className="row justify-content-center g-3">
            <div className="heading">
                <span>Best of Air Max</span>
                <div className="navigate">
                    Shop <TfiArrowCircleLeft fontSize={40}/><TfiArrowCircleRight fontSize={40}/>
                </div>
            </div>
            {
                CardData.length>0&&CardData.map((data,index)=>(
                    <Card
                    key={`Data_card_${index}`}
                    image={data.image}
                    head={data.head}
                    product={data.product}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default BestOf