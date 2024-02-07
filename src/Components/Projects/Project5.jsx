import img1 from "../../assets/Project5/img1.jpg";
import img2 from "../../assets/Project5/img2.jpg";
import img3 from "../../assets/Project5/img3.jpg";
import img4 from "../../assets/Project5/img4.jpg";
import img5 from "../../assets/Project5/img5.jpg";
import img6 from "../../assets/Project5/img6.jpg";
import img7 from "../../assets/Project5/img7.jpg";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperBtn from "../Utils/SwiperBtn";

const Project5 = () => {
  const displayImg = [img2, img1, img3, img4, img5, img6, img7];
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
                  document.getElementById("my_modal_5").showModal()
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
        <h1 className="text-2xl font-medium">Stellar Dwellings</h1>
      </div>

      <dialog id="my_modal_5" className="modal">
        <div className="modal-box backdrop-blur-xl rounded-2xl bg-transparent">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl text-center">Stellar Dwellings</h3>
          <ul className="text-blue-500 flex justify-evenly my-4">
            <li className="hover:underline hover:text-red-500">
              <a href="https://sloppy-soap.surge.sh/">Live Link</a>
            </li>{" "}
            |
            <li className="hover:underline hover:text-red-500">
              <a href="https://github.com/fahimmutashir23/stellar-dwellings">
                Client Site Github
              </a>
            </li>{" "}
            |
            <li className="hover:underline hover:text-red-500">
              <a href="https://github.com/fahimmutashir23/stellar-dwellings-server">
                Server Site Github
              </a>
            </li>
          </ul>
          <h1 className="text-xl mb-3">Technology :</h1>
          <div className=" space-y-2">
            <p>
              <strong className="text-red-500">Frontend : </strong> Using
              ReactJS, TailwindCSS for designing.
            </p>
            <p>
              <strong className="text-red-500">Backend : </strong> Using MongoDB
              for Database and ExpressJS for server.
            </p>
            <p>
              <strong className="text-red-500">Authentication : </strong>{" "}
              JWT.
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

export default Project5;
