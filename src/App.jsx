import React from "react";
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import InfiniteScroll from "./components/InfiniteScroll";
import Benefits from "./components/Benefits";
import Points from "./components/Points";
import Projects from "./components/Projects";
import Slogan from "./components/Slogan";

const App = () => {
  return (
    <div>
      <Header></Header>
      <TopSection></TopSection>
      <InfiniteScroll></InfiniteScroll>
      <Benefits></Benefits>
      <Points></Points>
      <Projects></Projects>
      <Slogan></Slogan>
    </div>
  );
};

export default App;
