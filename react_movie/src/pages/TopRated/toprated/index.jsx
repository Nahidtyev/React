import React from 'react'
import { useState,useEffect } from 'react';
import MovieCard from '../../Home/Card';
import "./rated.scss"
import { client , urlFor } from "../../../Service/sanity"

const TopMovies = () => {
  const [data,setData]= useState([])
  useEffect(()=>{
    client.fetch("*[_type =='topmovies']").then((res)=>{
      console.log(res);
      setData(res)
    })
  },[])
  return (
    <div className="toprated">
        <div className="col-xl-12">
        <h4>Top Rated</h4>
        <div className="row justify-content-center align-items-center movies">
                {data.length > 0 &&
                  data.map((data, index) => (
                    <MovieCard
                      key={`Data-Card_${index}`}
                      image={urlFor(data.image)}
                      name={data.name}
                      type={data.type}
                      stars={data.stars}
                    />
                  ))}
            </div>
        </div>
    </div>
  )
}

export default TopMovies