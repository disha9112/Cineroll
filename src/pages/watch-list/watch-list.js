import React from "react";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import MovieList from "../../components/movie-list/movie-list.component";
import "./watch-list.css";

function WatchList() {
  return (
    <div className="home-body">
      <Header />
      <MovieList />
      <Footer />
    </div>
  );
}

export default WatchList;
