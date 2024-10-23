import React from "react";
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import InfiniteScroll from "./components/InfiniteScroll";

const App = () => {
  return (
    <div>
      <Header></Header>
      <TopSection></TopSection>
      <InfiniteScroll></InfiniteScroll>
    </div>
  );
};

export default App;
