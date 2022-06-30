import React from "react";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import MovieList from "../../components/movie-list/movie-list.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import "./home.css";

function Home() {
  return (
    <div className="home-body">
      <Header />
      <SearchBar />
      <MovieList />
      <Footer />
    </div>
  );
}

export default Home;
