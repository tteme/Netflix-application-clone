import { useState, useEffect } from 'react';
import Axios from '../../utils/axios';
import  './Banner.css'
export default function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          'https://api.themoviedb.org/3/discover/tv?api_key=e31b0b73dea58ce90709efc6001feb3a&with_networks=213'
        );

        // Get a random movie from results
        const movies = response.data.results;
        if (movies.length > 0) {
          const randomMovie = movies[Math.floor(Math.random() * movies.length)];
          setMovie(randomMovie);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Truncate text function
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  // Fallback if no backdrop image
  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: movie?.backdrop_path
      ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
      : "linear-gradient(to right, #111, #333)", // Fallback gradient
  };

  return (
    <div className="banner" style={backgroundStyle}>
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title ||  movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className=" play">Play</button> 
          <button className="">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner_fadeBottom"/>
    </div>
  );
}