import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
  return (
    <div
      className="pt-20"
      id="education"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div>
        <h3 className="flex gap-2 max-w-fit text-xs uppercase border-[1px] rounded-3xl border-red-500 px-4 py-1 mb-2">
          <FaGraduationCap className="text-sm"></FaGraduationCap>Education
        </h3>
        <h1 className="text-3xl">
          My <span className="text-yellow-600">Education</span>
        </h1>
      </div>

      <div className="relative overflow-x-auto mt-10">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs text-yellow-600 uppercase bg-red-950">
            <tr>
              <th scope="col" className="px-6 py-3">
                Degree
              </th>
              <th scope="col" className="px-6 py-3">
                Subject
              </th>
              <th scope="col" className="px-6 py-3">
                Institute
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-transparent text-red-400 border-b border-red-800">
              <th scope="row" className="px-6 py-4 font-medium">
                Bachelor of Arts (current)
              </th>
              <td className="px-6 py-4">Bengali Literature</td>
              <td className="px-6 py-4">Dhaka College</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Education;
