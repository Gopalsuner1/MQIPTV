import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import ShowPage from "./pages/ShowPage";
import LivePage from "./pages/LivePage";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<MoviePage/>}/>
      <Route path="/live" element={<LivePage/>}/>
      <Route path="/shows" element={<ShowPage/>}/>
    </Routes>
  );
};

export default App;
