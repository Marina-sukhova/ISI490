import { useContext, useEffect, useState } from "react";
import Axios, { keyurl } from "../axios";
import MovieContext from "../context/MovieContext";
import "./movie.css";
import backIcon from "../Assets/arrow-back.png";
import icon from "../Assets/play-icon.png";
import closeIcon from "../Assets/close-icon.png";
import YouTube from "react-youtube";
//imtport to movieglue
import {keys} from "../GluAuth/AuthGue"


const Movie = (props) => {
  const { selectedMovie, setSelectedMovie } = useContext(MovieContext);
  const [CurrentMovieData, setCurrentMovieData] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const CallApi = async () => {
    const data = await Axios.get(`movie/${selectedMovie.id}?${keyurl}`);
    setCurrentMovieData(data.data);
  };
  useEffect(() => {
    CallApi();
  }, []);

  const GetMovieTraller = async (id) => {
    const res = await Axios.get(`movie/${id}/videos?${keyurl}`);

    let tr = null;
    res.data.results.forEach((e) => {
      if (
        (e.name.search("trailer") !== -1 || e.name.search("Trailer") !== -1) &&
        !tr
      ) {
        tr = e.key;
      }
    });
    if (!tr) {
      tr = res.data.results[0].key;
    }
    setTrailer(tr);
  };

  return (
    <div className="movie">
      {CurrentMovieData && (
        <div className="movie-head">
          {!trailer && (
            <span
              className="movie-head-close"
              onClick={() => setSelectedMovie(null)}
            >
              <img src={backIcon} alt="close" />
            </span>
          )}
          <div className="movie-head-text">
            <div className="movie-head-text-name">
              {CurrentMovieData.original_title}
            </div>
            <p className="movie-head-text-synopsis">
              {CurrentMovieData.overview}
            </p>
            <div className="movie-head-text-genra">
              <span>Genre:</span>{" "}
              {CurrentMovieData.genres.map((e) => {
                return e.name + ", ";
              })}
            </div>
            <div className="movie-head-text-director">
              <span>Language:</span>{" "}
              {CurrentMovieData.spoken_languages.map((e) => {
                return e.name + ", ";
              })}
            </div>
            <div className="movie-head-text-cast">
              <span>Time:</span> {CurrentMovieData.runtime} Min
            </div>
            <div className="movie-head-text-advisory">
              Release Date: {CurrentMovieData.release_date}
            </div>
            <span
              className="movie-head-text-trailer"
              onClick={() => GetMovieTraller(CurrentMovieData.id)}
            >
              <img src={icon} alt="icon" /> Watch Trailer
            </span>
          </div>
          <div className="movie-head-image">
            <img
              src={`https://image.tmdb.org/t/p/w500/${CurrentMovieData.poster_path}`}
              alt="movie poster"
            />
          </div>
        </div>
      )}
      {trailer && (
        <div className="movie-trailer">
          <span>
            <img src={closeIcon} alt="close" onClick={() => setTrailer(null)} />
          </span>
          <div className="movie-trailer-container">
            <YouTube
              videoId={trailer}
              opts={{
                playerVars: {
                  autoplay: 1,
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
