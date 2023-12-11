import Contact from "../../Components/Contact";
import Introduce from "../../Components/Introduce";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills";
import { IoMdPerson } from "react-icons/io";
import { FaProjectDiagram } from "react-icons/fa";
import { FaGraduationCap, FaPhone, FaUserGear } from "react-icons/fa6";
import Education from "../../Components/Education";


const Home = () => {
  const handleClick = (sectionID) => {
    const element = document.getElementById(sectionID);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItem = (
    <>
      <li>
        <button
          className="hover:rounded-full rounded-full"
          onClick={() => handleClick("introduce")}
        >
          <IoMdPerson className="text-red-600"></IoMdPerson>
        </button>
      </li>
      <li>
        <button
          className="hover:rounded-full rounded-full"
          onClick={() => handleClick("project")}
        >
          <FaProjectDiagram className="text-red-600"></FaProjectDiagram>
        </button>
      </li>
      <li>
        <button
          className="hover:rounded-full rounded-full"
          onClick={() => handleClick("skill")}
        >
          <FaUserGear className="text-red-600"></FaUserGear>
        </button>
      </li>
      <li>
        <button
          className="hover:rounded-full rounded-full"
          onClick={() => handleClick("contact")}>
          <FaPhone className="text-red-600"></FaPhone>
        </button>
      </li>
      <li>
        <button
          className="hover:rounded-full rounded-full"
          onClick={() => handleClick("education")}>
          <FaGraduationCap className="text-red-600"></FaGraduationCap>
        </button>
      </li>
    </>
  );
  return (
    <div className="flex">
      
      <div className="md:fixed md:top-44 md:-left-[58px]  max-w-[calc(1152px-296px)] md:w-full"
      data-aos="fade-right"
      data-aos-duration="2000"
      >
        <div className="navbar bg-transparent border-r-[1px] border-t-[1px] border-b-[1px] border-yellow-800 rounded-xl rounded-tl-none rounded-bl-none max-w-fit mx-auto">
          <div className="navbar-start"></div>
          <div className="navbar-center">
            <ul className="menu menu-vertical menu-sm px-0 space-y-7">
              {navItem}
            </ul>
          </div>
          <div className="navbar-end"></div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <Introduce></Introduce>
        <Projects></Projects>
        <Skills></Skills>
        <Education></Education>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
