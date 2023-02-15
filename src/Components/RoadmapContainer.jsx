import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { Dropwdown } from "./Dropwdown";
import { Notfound } from "./Notfound";
import { SearchBar } from "./SearchBar";
import RoadMap from "./Roadmap/Roadmap";

export const RoadmapContainer = (props) => {
  const params = useParams();
  const roadmapId = params.id;
  return (
    // <div>{params.id}</div>
    <>
      <nav className="mt-3 ml-6 w-screen">
        <div className="text-2xl font-bold text-gray-800 md:text-3xl">
          <a href="/" className="text-red-400">
            WomenWiseUp.com
          </a>
        </div>
      </nav>
      <RoadMap id={roadmapId} />
    </>
  );
};
