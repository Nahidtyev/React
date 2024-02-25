import React from "react";
import { useState } from "react";
import {useEffect} from 'react'
import { GETAPIData } from '../../Http/Http';
import Card from './Card';
import './allcards.scss'
import Skeleton from '../../Skeleton';

const Product = () => {
  const [product, setProduct] = useState([""]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    HTTPgetApiData();
  }, []);

    const getApiData = async (response)=> {
        setLoading(true)
        try {
            const response = await GETAPIData("data");
           if(isMoounted){
            setProduct(response)
           }
           console.log(response);
          }catch(error){
            console.log("ERRORRRRRRRRRRRR", error);
          }finally {
            setTimeout(()=>{
                setLoading(false);
            },1000)
        }
    }
    return (
        <div className="container">
            <div className="product">
            <div className="row justify-content-center align-items-center g-3">
                {loading}
                {
                     product?.length > 0 && product.map((product,index)=>(
                        loading?(<><Skeleton/></>):
                        (<Card
                            key={`Data_product_${index}`}
                            image={product.image}
                            proname={product.proname}
                            head={product.head}
                            product={product.product}
                            color={product.color}
                            price={product.price}
                        />)
                    ))
                }
            </div>
        </div>
      </div>
  )
};

export default Product;
