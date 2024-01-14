import profile from "../../assets/profile2.png";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
// import CV from "../../assets/resume/Resume of Fahim Muntashir-Frontend.pdf"
const resumeLink = 'https://drive.google.com/file/d/1sSJCsFktZ9yF766Z1zAtAwz42OwXVHLu/view?usp=drive_link'

const Sidebar = () => {
  return (
    <div 
    data-aos="fade-right"
    data-aos-duration="2000"
    className="border-[1px] border-yellow-800 p-6 rounded-2xl md:fixed md:min-h-[calc(100vh-32px)]">
      
      <div>
        <h1 className="font-semibold text-xl uppercase">md Fahim Muntashir</h1>
        <h1 className="text-red-500 text-base">Web Developer</h1>
      </div>
      <div className="h-72 md:h-60 overflow-hidden rounded-2xl my-3">
        <img
          src={profile}
          alt="profile Image"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-xs flex">
          <AiOutlineMail className="text-red-500 text-lg mr-2"></AiOutlineMail>
          mdfahim.muntashir28@gamil.com
        </h3>
        <h3 className="text-xs flex">
          <MdOutlineLocationOn className="text-red-500 text-lg mr-2"></MdOutlineLocationOn>
          Dhanmondi, Dhaka-1205, Bangladesh
        </h3>
      </div>
      <div className="flex justify-evenly my-4">
        <a href="https://www.linkedin.com/in/md-fahim-muntashir-22408b2a1/">
          <AiOutlineLinkedin className="text-2xl text-red-500"></AiOutlineLinkedin>
        </a>
        <a href="https://github.com/fahimmutashir23">
        <AiOutlineGithub className="text-2xl text-red-500"></AiOutlineGithub>
        </a>
        <a href="https://www.facebook.com/fahim.mmuntasir/">
        <AiOutlineFacebook className="text-2xl text-red-500"></AiOutlineFacebook>
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <a href={resumeLink} target="blank">
          <button className="btn rounded-3xl w-full bg-zinc-900 text-red-500 shadow-md shadow-black uppercase">
          see / download resume
        </button>
        </a>
        <a href="tel:+880 1581 868984" className="md:hidden">
        <button className="btn rounded-3xl w-full bg-zinc-900 text-red-500 shadow-md shadow-black uppercase">
          Direct Call
        </button>
        </a>
        <a href="https://api.whatsapp.com/send?phone=01759530743" target="blank">
        <button className="btn rounded-3xl w-full bg-zinc-900 text-red-500 shadow-md shadow-black uppercase">
          Contact with Whats App
        </button>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
