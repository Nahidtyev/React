import React, { useState } from 'react'
import SearchBar from '../../components/SearchBar'
import SideBar from '../../components/SideBar'
import Insights from './Insights'
import { useQuery } from '@tanstack/react-query'
import { client } from '../../service/service'
import Card from './Card'
import './promote.scss'
import { IoIosArrowDown } from 'react-icons/io'

const Promote = () => {
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

    const cardsToRender = showMore ? data : data.slice(0, 5);

    return cardsToRender.map((product, index) => (
            <Card
            key={product.index}
            image={product.image} 
            engagement={product.engagement} 
            distribution={product.distribution}
            clicks={product.clicks}
            view={product.view}
            />
    ));
  };
  return (
    <div className="container home">
        <div className="row">
            <div className="col-xl-3">
                <SideBar/>
            </div>
            <div className="col-xl-9">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <SearchBar/>
                    </div>
                    <h1>Promote</h1>
                    <div className="col-xl-11 ">
                        <Insights/>
                    </div>
                    <table className="col-xl-11">
                        <div>
                            <div className="head">
                                <p> <button></button>Recent post</p>
                                <div>
                                    <button >Last 7 days <IoIosArrowDown size={20}/></button>
                                    <button className='newp'>New post</button>
                                </div>
                            </div>
                        </div>
                            <div className='trname'>
                                <tr>
                                    <th>Post</th>
                                    <th>Distribution</th>
                                    <th>Link clicks</th>
                                    <th>Views</th>
                                    <th>Engagement</th>
                                </tr>
                            </div>
                            {renderCards()}
                            {data && data.length > 9 && !showMore && (
                                <div className="show-more-button">
                                    <button className='show-more' onClick={handleShowMore}>Load more</button>
                                </div>
                            )}
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Promote