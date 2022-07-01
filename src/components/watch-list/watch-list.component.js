import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setList } from "../../redux/watch-list/watchListActions";
import MovieCard from "../movie-card/movie-card.component";

function WatchList() {
  const dispatch = useDispatch();
  let watchList = useSelector((state) => state.allListMovies.watchList);

  async function fetchWatchListMovies() {
    dispatch(setList(watchList));
  }

  useEffect(() => {
    fetchWatchListMovies();
  }, []);

  return (
    <div>
      <Row s={3} md={4} lg={5} xl={6} className="p-4 mb-5 text-center">
        <MovieCard />
      </Row>
    </div>
  );
}

export default WatchList;
