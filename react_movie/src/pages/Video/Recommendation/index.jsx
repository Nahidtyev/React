import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../../../Service/sanity'
import "./rec.scss"
import RecCard from './Card'

const Recommend = () => {
    const [movie,setMovie]= useState([])
    useEffect(()=>{
      client.fetch("*[_type =='bestofaction']").then((res)=>{
        console.log(res);
        setMovie(res)
      })
    },[])
    const firstThreeItems = movie.slice(0, 3);
  return (
    <div className="col-xl-3 rec">
      <h4>Recommendatiion</h4>
        <div className="row align-items-center movies">
                {firstThreeItems &&
                  firstThreeItems.map((data, index) => (
                    <RecCard
                      key={`Data-Card_${index}`}
                      image={urlFor(data.image)}
                      name={data.name}
                      type={data.type}
                      stars={data.stars}
                    />
                  ))}
            </div>
    </div>
  )
}

export default Recommend