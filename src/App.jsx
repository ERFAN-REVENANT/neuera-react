import React from "react";
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import InfiniteScroll from "./components/InfiniteScroll";
import Benefits from "./components/Benefits";
import Points from "./components/Points";

const App = () => {
  return (
    <div>
      <Header></Header>
      <TopSection></TopSection>
      <InfiniteScroll></InfiniteScroll>
      <Benefits></Benefits>
      <Points></Points>
    </div>
  );
};

export default App;
