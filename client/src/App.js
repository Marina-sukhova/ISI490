import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import TitleSearch from "./pages/TitleSearch";
import ShowPostPage from "./pages/ShowPostPage";
import AboutUsPage from "./pages/AboutUsPage";
import Details from "./pages/Details";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import AuthButton from "./components/AuthButton";


import "./App.css";

function Navigation(props) {
  return (
    
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Media Compass
        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts/new">
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about-us">
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mb-3">
        <AuthButton />
      </div>
      
    </nav>
  );
}

function App() {
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
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/" element={<TitleSearch />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </AuthProvider>
    <br></br>
    </div>
    </div> 
    <footer>
        <h2>Media Compass</h2>
        <div>
        Cuny Tech Prep,<br />
        RREM <br />
        https://github.com/rodjean1234/project-starter
        </div>
    </footer>
    </body>
  );
}

export default App;
