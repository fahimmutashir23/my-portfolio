import project_2 from "../../assets/project-2.jpg";


const Project2 = () => {
  return (
    <div>
      <div data-aos="fade-up" data-aos-duration="2000" className=" mt-10">
        <div className="mt-10 relative rounded-2xl border-2 border-red-500 overflow-hidden">
          <img src={project_2} alt="" className="w-full h-full object-cover" />
          <div className="bg-gradient-to-b from-transparent to-black h-28 absolute w-full bottom-0 flex items-end p-5">
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="btn bg-red-600 btn-sm rounded-md"
            >
              Important links
            </button>
          </div>
        </div>
        <h1 className="text-2xl font-medium">Job Heaven</h1>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl text-center">Job Heaven</h3>
          <ul className="text-blue-500 flex justify-evenly my-4">
            <li className="hover:underline hover:text-red-500">
              <a href="https://nauseating-beginner.surge.sh/">Live Link</a>
            </li>{" "}
            |
            <li className="hover:underline hover:text-red-500">
              <a href="https://github.com/fahimmutashir23/Job-Haven">
                Client Site Github
              </a>
            </li>{" "}
            |
            <li className="hover:underline hover:text-red-500">
              <a href="https://github.com/fahimmutashir23/job-heaven-server">
                Server Site Github
              </a>
            </li>
          </ul>
          <h1 className="text-xl mb-3">Technology :</h1>
          <div className=" space-y-2">
            <p>
              <strong className="text-red-500">Frontend : </strong> Using
              ReactJS, TailwindCSS and for component library using DaisyUI most
              of the cases.
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

export default Project2;
