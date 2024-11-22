// import React from 'react'
import Image12 from "../../../assets/svg/homePage/search icon.svg";
import Image13 from "../../../assets/svg/homePage/flower.svg";
import Image14 from "../../../assets/svg/homePage/smart.svg";
const CareerSection = () => {
  const searches = [
    "Work remotely",
    "Part Time",
    "Customer Service",
    "Data Analyst",
    "Delivery Driver",
    "Engineering",
    "IT",
    "Marketing",
    "Medical",
    "Nurse",
    "Project Manager",
    "Sales",
    "Warehouse",
    "Welder",
  ];

  const items = [
    {
      icon: Image13, // Replace this with the actual trophy image/icon
      title: "FIRST",
      description:
        "Create your goal and get ahead to apply for the important jobs before anyone else.",
      button: "Enable Job Alerts",
    },
    {
      icon: Image14, // Replace this with the actual box image/icon
      title: "FAST",
      description:
        "Apply quickly and access your saved preferences on any device.",
      button: "Get started",
    },
    {
      icon: Image14, // Replace this with the actual speaker image/icon
      title: "SMART",
      description:
        "Don't just search for jobs. Let employers find you. Show your resume to good companies.",
      button: "Apply with Resume",
    },
  ];
  return (
    <>
      <div className="w-full mx-auto bg-white py-12 px-4">
        <div className="xl:w-[70%] lg:w-full mx-auto">
          {/* Title */}
          <h2 className="text-gray-700 text-lg font-normal mb-4">
            Top career searches
          </h2>
          {/* Buttons */}
          <div className="flex flex-wrap items-center lg:justify-center xl:justify-start gap-3">
            {searches.map((search, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-brand-skyBlue-navbar text-white rounded-md shadow hover:bg-blue-600 transition-all duration-200"
              >
                <span className="text-white">
                  <img src={Image12} alt="" />
                </span>
                {search}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-brand-bg-Navi py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-around text-center bg-white rounded-lg shadow-md gap-4 p-6"
            >
              {/* Icon */}
              <div className="h- ">
                <img src={item.icon} alt="" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm px-8 ">
                {item.description}
              </p>

              {/* Button */}
              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200">
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CareerSection;
