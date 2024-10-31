import React from "react";
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import InfiniteScroll from "./components/InfiniteScroll";
import Benefits from "./components/Benefits";
import Points from "./components/Points";
import Projects from "./components/Projects";
import Slogan from "./components/Slogan";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";

import Comments from "./components/Comments";

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

      <Comments></Comments>
      <PreFooter></PreFooter>
      <Footer></Footer>
    </div>
  );
};

export default App;
