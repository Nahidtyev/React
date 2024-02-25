import React from 'react'
import Card from './card'
import "./gearup.scss"
import {TfiArrowCircleLeft} from 'react-icons/tfi'
import {TfiArrowCircleRight} from 'react-icons/tfi'
import Image5 from '../../assets/images/Image5.png'
import Image6 from '../../assets/images/Image6.png'
import Image7 from '../../assets/images/Image7.png'
import Image8 from '../../assets/images/Image8.png'

const GearUp = () => {
    var CardData1=[
        {
           image: Image5,
           head: "Nike Dri-FIT ADV TechKnit Ultra",
           product:"Men's Short-Sleeve Running Top"
        },
        {
            image: Image6,
            head: "Nike Dri-FIT Challenger",
            product:"Men's 18cm (approx.) 2-in-1 Versatile Shorts"
         },
    ]
    var CardData2=[
        {
           image: Image7,
           head: "Nike Dri-FIT ADV Run Division",
           product:"Women's Long-Sleeve Running Top"
        },
        {
            image: Image8,
            head: "Nike Fast",
            product:"Women's Mid-Rise 7/8 Running Leggings with Pockets"
         },
    ]
  return (
    <div className="gearup">
        <div className="row justify-content-space-between">
            <span className='heading-f'>Gear Up</span>
            <div className="col-xl-6 col-md-12">
                <div className="navigate">
                            <p>Shop Men's</p> <TfiArrowCircleLeft fontSize={40}/><TfiArrowCircleRight fontSize={40}/>
                        </div>
                    <div className="row">
                    {
                        
                        CardData1.length>0&&CardData1.map((data,index)=>(
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
            <div className="col-xl-6 col-md-12">
                <div className="navigate">
                            <p className='shop'>Shop Women's</p> <TfiArrowCircleLeft fontSize={40}/><TfiArrowCircleRight fontSize={40}/>
                        </div>
                <div className="row">
                {
                    CardData2.length>0&&CardData2.map((data,index)=>(
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
              
        </div>
    </div>
  )
}

export default GearUp