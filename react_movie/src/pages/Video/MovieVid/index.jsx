import React, { useEffect, useState } from 'react'
import './movvid.scss'
import Card from './Card'
import { client } from '../../../Service/sanity';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { filmId } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "bestofaction" && _id == "${filmId}"][0]`)
      .then((res) => {
        setFilm(res);
        console.log(res);
      });
  }, [filmId]);

  if (!film) {
    return <div>Loading...</div>;
  }
  return (
    <div className="col-xl-7">
        <div className="row">
                <Card
                image={film.image}
                name={film.name}
                stars={film.stars}
                type={film.type}
                about={film.about}
              />
         </div>
    </div>
  )
}

export default MovieDetails