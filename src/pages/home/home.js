import React from "react";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import MovieCard from "../../components/movie-card/movie-card.component";
import MovieList from "../../components/movie-list/movie-list.component";
import "./home.css";

function Home() {
  return (
    <div className="home-body">
      <Header />
      <MovieList />
      <Footer />
    </div>
  );
}

export default Home;
