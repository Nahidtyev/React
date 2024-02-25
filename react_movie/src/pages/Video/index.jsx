import React from 'react'
import SideMenu from '../../component/SideMenu'
import Recommend from './Recommendation'
import './video.scss'
import MovieDetails from './MovieVid'

const MovieVideo = () => {
  return (
    <div id='mv'>
        <div className="container ">
            <div className="row">
                <SideMenu/>
                <MovieDetails/>
                <Recommend/>
                </div>
            </div>
        </div>
  )
}

export default MovieVideo