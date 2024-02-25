import React from 'react'
import SideMenu from '../../component/SideMenu'
import BestOf from './bestof'
import TopMovies from './toprated'
import "./top.scss"

const TopRated = () => {
  return (
    <div id="top">
        <div className="container">
            <div className="row">
                <SideMenu/>
                <div className="col-xl-10">
                  <div className="row">
                      <TopMovies/>
                      <BestOf/>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopRated