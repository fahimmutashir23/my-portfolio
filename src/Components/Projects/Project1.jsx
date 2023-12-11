import img1 from "../../assets/Project1/img1.jpg";
import img2 from "../../assets/Project1/img2.jpg";
import img3 from "../../assets/Project1/img3.jpg";
import img4 from "../../assets/Project1/img4.jpg";
import img5 from "../../assets/Project1/img5.jpg";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperBtn from "../Utils/SwiperBtn";

const Project1 = () => {
  const displayImg = [img1, img2, img3, img4, img5];

  return (
    <div>
      <div data-aos="fade-up" data-aos-duration="2000" className="mt-10">
        <div className="mt-10 relative rounded-2xl border-2 border-red-500 overflow-hidden">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={50}
            loop={true}
            slidesPerView={1}
          >
            {displayImg?.map((img) => (
              <SwiperSlide key={img} className="relative">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
            <div className="bg-gradient-to-b from-transparent to-black h-28 absolute w-full bottom-0 flex items-end p-5 z-10">
              <button
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
                className="btn bg-red-600 btn-sm rounded-md"
              >
                Important links
              </button>
            </div>
            <div className="absolute bottom-5 z-10 right-5">
              <SwiperBtn></SwiperBtn>
            </div>
          </Swiper>
        </div>
        <h1 className="text-2xl font-medium">FM Diagnostic Center</h1>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box backdrop-blur-xl rounded-2xl bg-transparent">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl text-center">
            FM Diagnostic Center
          </h3>
          <ul className="text-blue-300 flex justify-evenly my-4">
            <li className="hover:underline hover:text-red-500">
              <a href="https://impossible-help.surge.sh/">Live Link</a>
            </li>{" "}
            |
            <li className="hover:underline hover:text-red-500">
              <a href="https://github.com/fahimmutashir23/FM-Diagnostic-center">
                Client Site Github
              </a>
            </li>{" "}
            |
            <li className="hover:underline hover:text-red-500">
              <a href="https://github.com/fahimmutashir23/FM-Diagnostic-server">
                Server Site Github
              </a>
            </li>
          </ul>
          <h1 className="text-xl mb-3">Technology :</h1>
          <div className=" space-y-2">
            <p>
              <strong className="text-red-500">Frontend : </strong> Using
              ReactJS, Material UI
            </p>
            <p>
              <strong className="text-red-500">Backend : </strong> Using MongoDB
              for Database and ExpressJS.
            </p>
            <p>
              <strong className="text-red-500">Authentication : </strong>{" "}
              Firebase.
            </p>
            <p>
              <strong className="text-red-500">Deploying : </strong> Deploy
              Frontend in surge and Backend in vercel.
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Project1;
