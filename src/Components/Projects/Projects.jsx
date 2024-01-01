import { FaProjectDiagram } from "react-icons/fa";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project1 from "./Project1";
import Project4 from "./Project4";

const Projects = () => {
  return (
    <div className=" pt-20" id="project">
      <h3 className="flex gap-2 max-w-fit text-xs uppercase border-[1px] rounded-3xl border-red-500 px-4 py-1 mb-2">
        <FaProjectDiagram className="text-sm"></FaProjectDiagram>Projects
      </h3>
      <h1 className="text-3xl">
        Feature <span className="text-yellow-600">Projects</span>
      </h1>
      <Project1 />
      <Project2 />
      <Project4 />
      <Project3 />
    </div>
  );
};

export default Projects;
