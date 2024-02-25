import React from 'react'
import { useState,useEffect } from 'react';
import TopCard from './TopCard';
import "./bestof.scss"
import { client } from "../../../Service/sanity"
import { Link } from 'react-router-dom';

const BestOf = () => {
  const [movie,setMovie]= useState([])
  useEffect(()=>{
    client.fetch("*[_type =='bestofaction']").then((res)=>{
      console.log(res);
      setMovie(res)
    })
  },[])

  return (
    <div className="bestof">
        <h4>Best of Action</h4>
                  {movie&&
                  movie.map((data) => (
                    <div  key={data._id}>
                      <Link to={`/toprated/details/${data._id}`}>
                        <TopCard
                          image={data.image}
                          name={data.name}
                          stars={data.stars}
                          type={data.type}
                        />
                      </Link>
                    </div>
                  ))}
        </div>
  )
}

export default BestOf