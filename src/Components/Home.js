import React from "react";
import Footer from "./Footer";
import { Hero } from "./Hero";
import About from "./About";
import Hero2 from "./Hero2";
import TrendingPage from "./Trending/TrendingPage";
import NavBar from "./NavBar";

export const Home = () => {
  return (
    <>
      <NavBar />

      <Hero />
      <About />
      <TrendingPage />
      <Hero2 />
      <Footer />
    </>
  );
};
