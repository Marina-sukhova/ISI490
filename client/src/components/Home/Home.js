import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import "./home.css";

const Home = (props) => {
  const { movie } = props;
  const { setSelectedMovie } = useContext(MovieContext);

  return (
    <div className="home">
      <ul className="home-list">
        {movie &&
          movie.map((e, el) => {
            if (e.poster_path) {
              return (
                <li onClick={() => setSelectedMovie(e)} key={e.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                    alt={e.original_title}
                  />
                  <span>{e.original_title}</span>
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
};

export default Home;
