import Introduce from "../../Components/Introduce";
import Navbar from "../../Components/Navbar";
import Project2 from "../../Components/Projects/Project2"
import Project3 from "../../Components/Projects/Project3";


const Home = () => {
  return (
    <div>
      <div className="fixed z-10 max-w-[calc(1152px-296px)] w-full">
        <Navbar></Navbar>
      </div>
      <div className="max-w-2xl mx-auto">
      <Introduce></Introduce>
      <Project2></Project2>
      <Project3></Project3>
    </div>

      </div>
  );
};

export default Home;
