
import CountUp from 'react-countup';
// import "./styles.css";
import { AiFillHome } from "react-icons/ai";

const Introduce = () => {
  return (
    <div>
      <div className="flex justify-end pt-20">
        <div>
          <h3 className="flex gap-2 max-w-fit text-xs uppercase border-[1px] rounded-3xl border-yellow-800 p-2">
            <AiFillHome className="text-sm"></AiFillHome>Introduce
          </h3>
          <h1
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-offset="300"
          data-aos-easing="ease-in-sign"
          className="text-6xl mt-10">
            Say Hi from <span className="text-red-600">Fahim</span>, <br /> <span className="text-5xl">Web
            Developer</span>
          </h1>
          <h1
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sign"
          className=" mt-10">
          I am an enthusiastic JavaScript developer with knowing some framework for the frontend and the backend. I work comfortably in ReactJS and and basic in NextJS. For designing comfortable in tailwind Css and MaterialUI. In backend i know ExpressJS and MongoDB.
          </h1>
          <h1 className='text-2xl text-red-500 mt-4'>
          <span className='font-bold text-6xl italic'><CountUp end={10} duration={2} /></span>+ Projects
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
