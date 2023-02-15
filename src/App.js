import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { Hero } from "./Components/Hero";
import { Roadmap } from "./Components/Roadmap";
import { LoginStudent } from "./Components/LoginStudent";
import { SearchBar } from "./Components/SearchBar";
import TrendingNow from "./Components/TrendingNow";
// import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import TrendingPage from "./Components/Trending/TrendingPage";
import NavBar from "./Components/NavBar";
// import Carousel from './Components/carousel/Carousel'

function App() {
  return (
    <div>
      <Routes>
        <Route element={<LoginStudent />} path={"/login"} />
        <Route element={<Home />} path={"/"} exact />
        <Route element={<Roadmap />} path={"/roadmap/:id"} />
        {/* <Route element={<Carousel />} path={"/qwerty/yuo/hgh"} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
