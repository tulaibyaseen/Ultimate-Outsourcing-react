import Image2 from "../../../assets/images/homePage/Rectangle 266.png";
import Image3 from "../../../assets/images/homePage/Rectangle 267.png";
import Image4 from "../../../assets/images/homePage/Rectangle 260.png";
import Image5 from "../../../assets/images/homePage/Rectangle 261.png";
import Image6 from "../../../assets/images/homePage/Rectangle 262.png";
import Image7 from "../../../assets/images/homePage/Rectangle 263.png";
import Image8 from "../../../assets/images/homePage/Rectangle 264.png";
import Image9 from "../../../assets/images/homePage/Rectangle 256.png";
import Image10 from "../../../assets/images/homePage/Rectangle 257.png";
import Image11 from "../../../assets/images/homePage/Rectangle 259.png";
import Image12 from "../../../assets/svg/homePage/search icon.svg";

const HeroSection = () => {
  return (
    <>
      <div className="w-full h-full relative">
        <div className="grid grid-cols-12 gap-2 items-stretch w-full h-full">
          {/* First Column */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-2">
            <div className="flex items-center justify-center shadow h-full font-lato md:text-sm lg:text-lg xl:text-2xl">
              <div>
                <p className="font-semibold">
                  Unlock Your{" "}
                  <span className="text-brand-skyBlue-navbar">Dream Job</span>,
                  No Need To Fear,
                </p>
                <p className="font-semibold">
                  Discover Your{" "}
                  <span className="text-brand-skyBlue-navbar">Freedom</span>,
                  Your{" "}
                  <span className="text-brand-skyBlue-navbar">
                    Career Path Clear
                  </span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <img src={Image2} alt="" className="w-full h-auto object-cover" />
              <img src={Image3} alt="" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Second Column */}
          <div className="col-span-12 md:col-span-2 h-[30vh] md:h-auto relative">
            <img src={Image4} alt="" className="w-full h-full object-cover" />
          </div>

          {/* Third Column */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2 h-full">
              <img src={Image5} alt="" className="w-full h-full object-cover" />
              <img src={Image6} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-2 h-full">
              <img src={Image7} alt="" className="w-full h-full object-cover" />
              <img src={Image8} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Grid 2 images */}
        <div className="w-full h-full mt-2">
          <div className="grid grid-cols-12 gap-2 w-full h-full">
            {/* First Image */}
            <div className="col-span-12 md:col-span-4">
              <img
                src={Image9}
                alt="Firefighter"
                className="w-full h-full object-cover "
              />
            </div>

            {/* Second Image */}
            <div className="col-span-12 md:col-span-4">
              <img
                src={Image10}
                alt="Building"
                className="w-full h-full object-cover "
              />
            </div>

            {/* Third Image */}
            <div className="col-span-12 md:col-span-4">
              <img
                src={Image11}
                alt="Chef"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>

        {/* Search Bar Section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-9/12 gap-2  -translate-y-1/2 bg-brand-skyBlue-navbar bg-opacity-50  shadow-lg rounded-lg  flex  items-center justify-evenly py-8 px-4">
          <input
            type="text"
            placeholder="Job Title / Keywords"
            className="border border-gray-300 rounded-md p-2 w-1/3 "
          />
          <input
            type="text"
            placeholder="Location"
            className="border border-gray-300 rounded-md p-2 w-1/3"
          />
          <select className="border border-gray-300 rounded-md p-2 w-1/6">
            <option>20 miles</option>
            <option>10 miles</option>
            <option>30 miles</option>
          </select>
          <button className="bg-brand-skyBlue-navbar  w-1/6 text-white shadow-md  font-lato text-lg  py-2 rounded-md flex items-center  justify-center gap-2">
            <span> Find Jobs</span>
            <span>
              <img src={Image12} alt="" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
