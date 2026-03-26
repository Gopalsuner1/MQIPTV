import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import ShowPage from "./pages/ShowPage";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie" element={<MoviePage/>}/>
      <Route path="/tv" element={<ShowPage/>}/>
    </Routes>
  );
};

export default App;
