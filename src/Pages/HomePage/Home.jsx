import Contact from "../../Components/Contact";
import Introduce from "../../Components/Introduce";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills";

const Home = () => {

  const handleClick = (sectionID) => {
    const element = document.getElementById(sectionID);
    if(element){
      element.scrollIntoView({behavior: 'smooth'})
    }
  }
    

  const navItem = (
    <>
      <li>
        <button onClick={()=>handleClick('introduce')}>Introduce</button>
      </li>
      <li>
        <button onClick={()=>handleClick('project')}>Project</button>
      </li>
      <li>
        <button onClick={()=>handleClick('skill')}>Skill</button>
      </li>
      <li>
        <button onClick={()=>handleClick('contact')}>Contact</button>
      </li>
    </>
  );
  return (
    <div>
      <div className=" md:fixed z-10 max-w-[calc(1152px-296px)] md:w-full">
        <div className="navbar bg-black rounded-2xl bg-opacity-20">
          <div className="navbar-start"></div>
          <div className="navbar-center">
            <ul className="menu menu-horizontal px-1">{navItem}</ul>
          </div>
          <div className="navbar-end"></div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <Introduce></Introduce>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
