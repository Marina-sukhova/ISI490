import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import TitleSearch from "./components/Search/TitleSearch";
import ShowPostPage from "./pages/ShowPostPage";
import AboutProject from "./pages/AboutProject";
import Details from "./pages/Details";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
//----------gluetv
import AuthButton from "./components/AuthButton";
import RegiButton from "./components/RegisterButton";
import Home from "./components/Home/Home";
import Movie from "./components/Movie/Movie";
import { MovieProvider } from "./components/context/MovieContext";
import "./App.css";
import { useEffect, useState } from "react";
import Axios, { keyurl } from "./components/axios";

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <div className="navbar-nav me-auto">
        <Link className="navbar-brand" to="/">
          ArtHouse Tix
        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts/new">New
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about-arthouse_tix">
              Project Doc
            </NavLink>
          </li>
          <li className="nav-search">
            <TitleSearch />
          </li>
        </ul>
      </div>
      <div >
       
          <AuthButton />
          {/*<RegiButton/>*/}
       
      </div>
    </nav>
  );
}

function App() {
  const [movies, setMovies] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    CallApi();
  }, []);
  const CallApi = async () => {
    const res = await Axios.get(`movie/upcoming?${keyurl}`)
    setMovies(res.data.results);
  };
  return (

    <body>
      <div id="page-container">
        <div id="content-wrap">
          <AuthProvider>
            <BrowserRouter>
              <Navigation />
              <div className="container-xl text-center">
                <div className="row justify-content-center">
                  <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/posts/new" element={<PostsListPage />} />
                    <Route path="/posts/:id" element={<ShowPostPage />} />
                    <Route path="/about-arthouse_tix" element={<AboutProject />} />
                    <Route path="/register" element={<RegisterPage />} />
                  </Routes>
                </div>
              </div>
            </BrowserRouter>
          </AuthProvider>
          <br></br>
        </div>
        <div className="App">

          <MovieProvider value={{ selectedMovie, setSelectedMovie }}>
            {selectedMovie ? <Movie /> : <Home movie={movies} />}
          </MovieProvider>
        </div>
      </div>
      <footer>
        <h2>The ArtHouse Tickets</h2>
        <div> &copy; Copyright 2023
        </div>
      </footer>
    </body>
  );
}

export default App;
