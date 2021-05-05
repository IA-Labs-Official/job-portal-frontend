import rectangle1 from "../assets/icons/Rectangle1.png";
import rectangle2 from "../assets/icons/Rectangle2.png";
import rectangle3 from "../assets/icons/Rectangle3.png";
import rectangle4 from "../assets/icons/Rectangle4.png";
import vector from "../assets/icons/Vector.png";
const Jobs = () => {
  return (
    <div className="h-screen bg-gray-300 bg-scrol bg-cover">
 
      <div className="bg-white h-56 w-100 rounded border-t-2">
        <lable className="font-semibold pt-4 pl-5">Add A Job</lable>
        <div className="flex justify-between mr-4 ml-4 ">
          <div className="h-36 w-96 mt-10 rounded">
            <img
              className="h-full w-full rounded-sm"
              src={rectangle1}
              alt="display"
            />
          </div>

          <div className="h-36 w-96 mt-10 rounded">
            <img
              className="h-full w-full rounded-sm"
              src={rectangle4}
              alt="display"
            />
          </div>
          <div className="h-36 w-96 mt-10 rounded">
            <img
              className="h-full w-full rounded-sm"
              src={rectangle3}
              alt="display"
            />
          </div>
          <div className="h-36 w-96 mt-10 rounded">
            <img
              className="h-full w-full rounded-sm"
              src={rectangle2}
              alt="display"
            />
          </div>
        </div>
        <div className="bg-white h-screen mt-5">
          <div className="flex pt-5 ">
            <lable className="font-semibold pt-3 ml-10">Job Title</lable>
            <input
              className="bg-gray-50 h-16 rounded shadow w-2/5 ml-52 text-center text-lg text-gray-300 "
              type="text"
              value="UX Designer, Python Developer, Business Developer  etc."
            />
          </div>
          <div className="flex pt-8 justify-bet ">
            <div className="font-semibold pt-5 ml-10">
              <lable>Employee Type</lable>
            </div>
            <div className="ml-40 space-x-12">
              <input
                className="bg-gray-50 h-16 rounded shadow  w-52 text-center  "
                value="Full Time Employee"
              />
              <input
                className="bg-gray-50 h-16 rounded shadow  w-52 text-center "
                value="Contract Based"
              />
              <input
                className="bg-gray-50 h-16 rounded shadow  w-52 text-center "
                value="Internship"
              />
              <input
                className="bg-gray-50 h-16 rounded shadow  w-52 text-center "
                value="Freelancer"
              />
            </div>
          </div>
          <div className="flex pt-8">
            <lable className="font-semibold pt-2 ml-10">Skills Requried</lable>
            <div className="bg-gray-50 h-32 rounded shadow w-3/5 text-xs  ml-40 text-center ">
            <div></div>
            </div>
          </div>
          <div className="pt-8 flex">
            <lable className="font-semibold ml-10 pt-5">
              Experience Required
            </lable>
            <div className="flex space-x-7 ml-28">
              <input
                className="bg-gray-50 h-16 rounded shadow w-44 text-center text-gray-300"
                value="Minimum"
              />
              <p className="pt-4">to</p>
              <input
                className="bg-gray-50 h-16 rounded shadow w-44 text-center text-gray-300 "
                value="Maximum"
              />
              <p className="pt-4">years</p>
            </div>
          </div>
          <div className="pt-8 flex">
            <lable className="font-semibold ml-10 pt-5">Annual Salary</lable>
            <div className="flex space-x-7 ml-40 pl-1">
              <input
                className="bg-gray-50 h-16 rounded shadow  w-44 text-center text-gray-300"
                value="Minimum"
              />
              <p className="pt-4">to</p>
              <input
                className="bg-gray-50 h-16 rounded shadow  w-44 text-center text-gray-300 "
                value="Maximum"
              />
              <p className="pt-4">per annum</p>
            </div>
          </div>
          <div className="flex pt-8 ">
            <lable className="font-semibold pt-2 ml-10">Job Description</lable>
            <div className="bg-gray-50 h-28 rounded shadow w-1/2 ml-36">
              <div className="h-14 pt-2 pl-4 pr-32">
                <p className="text-left text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra urna mattis egestas vitae sem. Porttitor sed enim,
                  convallis risus purus sit amet. Mauris, id interdum
                  pellentesque nunc aenean massa arcu.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="ml-80 mt-5 flex">
            <img className="pt-1" src={vector} alt="display" />
            <p className="ml-4">
              Share this Job Post on all of your social media platforms?
            </p>
          </div>
          <button className="bg-red-400 hover:bg-red-400 text-white font-bold py-3 px-16 rounded ml-72 mt-10 capitalize">
            submit
          </button>
        </div>
      </div>
    </div>
    
  );
};
export default Jobs;
