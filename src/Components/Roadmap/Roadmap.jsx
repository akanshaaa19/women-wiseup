import roadmaps from "../../roadmapdata";
import { Notfound } from "../Notfound";
import { SearchBar } from "../SearchBar";
import ConnectingBorder from "./ConnectingBorder";
import RoadMapSection from "./RoadmapSection";

function Roadmap(props) {
  const selectedRoadmap = roadmaps.filter((roadmap) => {
    return roadmap.courseId === props.id;
  });
  console.log(selectedRoadmap);

  return (
    <>
      {selectedRoadmap.length !== 0 ? (
        <section className="max-w-5xl mx-10 md:mx-auto py-4">
          <SearchBar />

          <h1 className=" text-4xl font-bold mb-8 text-gray-800">
            {selectedRoadmap[0].courseName}
          </h1>
          <div>
            {selectedRoadmap[0].sections.map((section) => {
              return (
                <>
                  <RoadMapSection
                    name={section.name}
                    content={section.links}
                    step={section.step}
                  />
                  <ConnectingBorder />
                </>
              );
            })}
            <RoadMapSection name={"Yay! You've completed this roadmap"} content={[]}/>
          </div>
        </section>
      ) : (
        <Notfound />
      )}
    </>
  );
}

export default Roadmap;
