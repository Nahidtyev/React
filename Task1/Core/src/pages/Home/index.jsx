import React from 'react'
import SideBar from '../../components/SideBar'
import SearchBar from '../../components/SearchBar'
import bg from '../../assets/bg.jpg'
import './home.scss'
import AllProducts from './AllProducts'
const Home = () => {
  return (
    <div className="container home">
        <div className="row">
            <div className="col-xl-3">
                <SideBar/>
            </div>
            <div className="col-xl-9">
                <div className="row">
                    <div className="col-xl-12">
                        <SearchBar/>
                    </div>
                    <div className="col-xl-12 ">
                        <div>
                            <img className='back-img' src={bg} alt="" />
                        </div>
                        <div className='row justify-content-center'>
                                <AllProducts/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home