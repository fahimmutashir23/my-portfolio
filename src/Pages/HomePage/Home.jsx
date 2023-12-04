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
      <div className="fixed z-10 max-w-[calc(1152px-296px)] w-full">
        <div className="navbar bg-black rounded-2xl bg-opacity-20">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItem}
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItem}</ul>
          </div>
          <div className="navbar-end"></div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <Introduce></Introduce>
        <Projects></Projects>
        <Skills></Skills>
      </div>
    </div>
  );
};

export default Home;
