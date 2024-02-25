import React from 'react'
import Card from './card'
import "./essentials.scss"
import Image10 from '../../assets/images/Image10.png'
import Image11 from '../../assets/images/Image11.png'
import Image12 from '../../assets/images/Image12.png'

function Essentials() {

    const ImgData =[
        {
            todo:"Men's",
            img:Image10
        },
        {
            todo:"Womens's",
            img:Image11
        },
        {
            todo:"Kids",
            img:Image12
        },
    ]
  return (
    <div className="essentials">
        <div className="row justify-content-center g-3">
            <span>The Essentials</span>
            {
                ImgData.length>0 && ImgData.map((data,index)=>(
                    <Card
                        key={`Data_img_${index}`}
                        todo={data.todo}
                        img={data.img}
                        />
                ))
            }
            <div className="col-xl-12 ">
                <div className="lists">
                <ul>
                    <label>Icons</label>
                    <li>Air Force 1</li>
                    <li>Huaranche</li>
                    <li>Air Max 90</li>
                    <li>Air Max 95</li>
                </ul>
                <ul>
                    <label>Shoes</label>
                    <li>All Shoes</li>
                    <li>Custom Shoes</li>
                    <li>Jordan Shoes</li>
                    <li>Running Shoes</li>
                </ul>
                <ul>
                    <label>Clothing</label>
                    <li>All Clothing</li>
                    <li>Modest Wear</li>
                    <li>Hoodies & Pullovers</li>
                    <li>Shirts & Tops</li>
                </ul>
                <ul>
                    <label>Icons</label>
                    <li>Infant & Toddler Shoes</li>
                    <li>Kids' Shoes</li>
                    <li>Kids' Jordan Shoes</li>
                    <li>Kids' Basketball Shoes</li>
                </ul>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Essentials