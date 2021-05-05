import { connect } from "react-redux";
import JobCard from "../components/JobCard";
import { SideListItem } from "../components/SideList/SideListItem";
import logo from "../assets/icons/Frame.png";
import image from "../assets/icons/image.png";

const Home = ({ allJobs }) => {
  return (
    <div className="w-screen bg-gray-100 h-screen ">
      <div className="container flex space-x-6 mx-20 mt-20">
        <div className="w-1/5 h-auto ">
          <div className="divide-y-2 divide-gray-300 divide-solid border-gray-300 border-solid border-2 rounded">
            <SideListItem title={"Assesments"} />
            <SideListItem title={"All Jobs"} url="/" />
            <SideListItem title={"Saved"} url="/saved" />
            <SideListItem title={"Applications"} />
          </div>
        </div>
        <div className="w-2/5 h-auto space-y-4">
          {allJobs.map((job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </div>
        <div className="w-2/6 h-auto bg-white rounded flex-col">
          <div className="h-40 mr-10 ">
            <img
              className="w-full h-full rounded-sm"
              src={logo}
              alt="Display"
            />
          </div>

          <div className="bg-white-600 flex justify-between h-28">
            <div class="space-y-4">
              <div className="h-8 w-8 flex items-center justify-center ml-10 -my-3.5">
                <img
                  className="w-full h-full rounded-full"
                  src={image}
                  alt="Display"
                />
              </div>

              <p className="uppercase  mx-3">UI/XI designer</p>

              <p className="text-red-400 mx-3">Clevertech</p>
            </div>
            <div className="space-y-3">
              <div class="flex mt-8 mr-2 space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </div>
              <p className="mr-2">100 Applicants</p>
            </div>
          </div>
          <div className=" grid grid-cols-3 divide-x divide-gray-300  border-t-2 border-b-2">
            <div className=" h-16 pl-2 shadow-sm">
              <p>Experience</p>
              <p className="text-xs mt-4">Minimum 6 months</p>
            </div>
            <div className=" h-16 pl-2 shadow-sm">
              <p>Company</p>
              <p className="text-xs mt-4">Information Tech...</p>
            </div>
            <div className=" h-16 pl-2 shadow-sm">
              <p>Offer Salary</p>
              <p className="text-xs mt-4">RS.5,00,000 P.A</p>
            </div>
          </div>
          <div className="ml-5 flex-col space-y-8 mt-4">
            <p className="h-4">Job Description</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p className="text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              semper in arcu facilisi elementum laoreet. Nisi pellentesque
              luctus turpis morbi mauris donec. Amet leo sed ipsum, mi. Velit
              tellus, mattis diam ipsum in sed mi.{" "}
            </p>
            <p className="text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              semper in arcu facilisi elementum laoreet. Nisi pellentesque
              luctus turpis morbi mauris donec.{" "}
            </p>
            <div className="h-">
              <button className="bg-red-400 hover:bg-red-400 text-white font-bold py-2 px-4 rounded ml-44 mt-10">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ allJobs }) => ({ allJobs });

export default connect(mapStateToProps)(Home);
