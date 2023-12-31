import Contact from "../../Components/Contact";
import Introduce from "../../Components/Introduce";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills";
import { IoMdPerson } from "react-icons/io";
import { FaProjectDiagram } from "react-icons/fa";
import { FaGraduationCap, FaPhone, FaUserGear } from "react-icons/fa6";
import Education from "../../Components/Education";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from "../../Components/Utils/particles.config";

const Home = () => {
  const [init, setInit] = useState(false);

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
          onClick={() => handleClick("contact")}
        >
          <FaPhone className="text-red-600"></FaPhone>
        </button>
      </li>
      <li>
        <button
          className="hover:rounded-full rounded-full"
          onClick={() => handleClick("education")}
        >
          <FaGraduationCap className="text-red-600"></FaGraduationCap>
        </button>
      </li>
    </>
  );

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = () => {};

  return (
    <div className="md:flex">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesConfig}
        />
      )}

      <div
        className="lg:fixed bg-zinc-900 lg:bg-transparent rounded-full -ml-2"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <div className="navbar bg-transparent md:border-[1px] border-l-0 mt-2 lg:mt-[calc(100vh-75vh)] border-yellow-800 rounded-r-xl md:max-w-fit md:mx-auto">
          <div className="navbar-start"></div>
          <div className="navbar-center">
            <ul className="menu menu-horizontal md:menu-vertical menu-sm px-0 md:space-y-7">
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
