import { FaReact, FaUserGear } from "react-icons/fa6";
import javaScript from "../assets/Icons/javascript.png";
import MongoDB from "../assets/Icons/mongodb.png";
import materialUI from "../assets/Icons/materialUI.png";
import expressJs from "../assets/Icons/icons8-express-js-50.png";
import tailwind from "../assets/Icons/icons8-tailwind-css-48.png";
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  return (
    <div className="pt-20" id="skill" data-aos="fade-up" data-aos-duration="2000">
      <h3 className="flex gap-2 max-w-fit text-xs uppercase border-[1px] rounded-3xl border-red-500 px-4 py-1 mb-2">
        <FaUserGear className="text-sm"></FaUserGear>Skills
      </h3>
      <h1 className="text-3xl">
        My <span className="text-yellow-600">Advantage</span>
      </h1>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center" data-aos="fade-right" data-aos-duration="2000">
          <div className="border-2 border-red-500 rounded-full px-7 py-8 max-w-fit flex flex-col justify-center items-center">
            <FaReact className="text-5xl mb-2"></FaReact>
            <p className="text-2xl text-yellow-600 font-medium">80%</p>
          </div>
          <h1>React</h1>
        </div>
        <div className="flex flex-col items-center" data-aos="fade-down" data-aos-duration="2000">
          <div className="border-2 border-red-500 rounded-full px-7 py-8 max-w-fit flex flex-col justify-center items-center">
            <img src={javaScript} alt="icon" className="h-12 w-12 mb-2" />
            <p className="text-2xl text-yellow-600 font-medium">60%</p>
          </div>
          <h1 className="text-center">JavaScript</h1>
        </div>
        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="2000">
          <div className="border-2 border-red-500 rounded-full px-7 py-8 max-w-fit flex flex-col justify-center items-center">
            <img src={tailwind} alt="icon" className="h-12 w-12 mb-2" />
            <p className="text-2xl text-yellow-600 font-medium">90%</p>
          </div>
          <h1 className="text-center">Tailwind CSS</h1>
        </div>
        <div className="flex flex-col items-center" data-aos="fade-left" data-aos-duration="2000">
          <div className="border-2 border-red-500 rounded-full px-7 py-8 max-w-fit flex flex-col justify-center items-center">
            <img src={materialUI} alt="icon" className="h-12 w-12 mb-2" />
            <p className="text-2xl text-yellow-600 font-medium">50%</p>
          </div>
          <h1 className="text-center">Material UI</h1>
        </div>
        <div className="flex flex-col items-center" data-aos="fade-right" data-aos-duration="2000">
          <div className="border-2 border-red-500 rounded-full px-7 py-8 max-w-fit flex flex-col justify-center items-center">
            <img src={MongoDB} alt="icon" className="h-12 w-12 mb-2" />
            <p className="text-2xl text-yellow-600 font-medium">50%</p>
          </div>
          <h1 className="text-center">MongoBD</h1>
        </div>
        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="2000">
          <div className="border-2 border-red-500 rounded-full px-7 py-8 max-w-fit flex flex-col justify-center items-center">
            <img src={expressJs} alt="icon" className="h-12 w-12 mb-2" />
            <p className="text-2xl text-yellow-600 font-medium">50%</p>
          </div>
          <h1 className="text-center">Express JS</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
