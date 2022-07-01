import React from "react";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import WatchList from "../../components/watch-list/watch-list.component";
import "./list.css";

function List() {
  return (
    <div className="list-body">
      <Header />
      <WatchList />
      <Footer />
    </div>
  );
}

export default List;
