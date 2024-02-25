import React, { useEffect, useState } from 'react'
import ButtoN from '../../../component/Button'
import {CiSearch} from 'react-icons/ci'
import {MdOutlineNotificationAdd} from "react-icons/md"
import './navbar.scss'
import { client } from '../../../Service/sanity'

const Navbar = () => {
  // const [query, setQuery] = useState("");
  // const [movie, setMovie] = useState([]);
  // useEffect(() => {
  //   setQuery();
  // }, []);
  // useEffect(() => {
  //   if (query === "") {
  //     setMovie();
  //   }
  // }, [query]);

  // const HandleSearch = (e) => {
  //   setQuery(e.target.value);
  //   console.log(query);
  //   setMovie(
  //     client.fetch("*[_type =='topmovies']").filter((item) => {
  //       return item.movie.toLowerCase().includes(query.toLowerCase());
  //     })
  //   );
  // };

// const [query, setQuery] = useState('');
// const [movies, setMovies] = useState([]);

//  CODE II

// useEffect(() => {
//   if (query === '') {
//     setMovies([]);
//   } else {
//     const fetchMovies = async () => {
//       try {
//         const filteredMovies = await client.fetch(
//           `*[_type == 'topmovies' && movie match $queryFlags]`,
//           { queryFlags: `*${query}* i` }
//         );
//         setMovies(filteredMovies);
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//       }
//     };
//     fetchMovies();
//   }
// }, [query]);

// const handleSearch = (e) => {
//   const newQuery = e.target.value;
//   setQuery(newQuery);
// };


  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleButtonClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <nav>
      <div className="container">
        <div className="row justify-content-center  align-items-baseline">
          <div className="col-xl-2">
            <h4>CineMax</h4>
          </div>
          <div className="col-xl-7">
            <ul>
              <li>Movies</li>
              <li>Series</li>
              <li>Animation</li>
              <li>Genres</li>
             <div className='searching'>
              <CiSearch id='bino' onClick={handleButtonClick} fontSize={25}/>
              {isSearchOpen&&
                (<input
                      type="search"
                      name="search"
                      id="search"
                      onChange={HandleSearch}
                      value={query}
                    />)}
             </div>
            </ul>
          </div>
          <div className="col-xl-3">
             <ButtoN text="Subscribe"/>
             <MdOutlineNotificationAdd id='ring' fontSize={25}/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar