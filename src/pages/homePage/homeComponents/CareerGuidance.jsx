// import React from 'react'
import { Link } from "react-router-dom";
import Image1 from "../../../assets/svg/homePage/careerGuidance/Rectangle 199.svg";
import Image2 from "../../../assets/svg/homePage/careerGuidance/Rectangle 201.svg";
import Image3 from "../../../assets/svg/homePage/careerGuidance/Rectangle 203.svg";
import Image4 from "../../../assets/svg/homePage/careerGuidance/Rectangle 205.svg";
import ArrowBlue from "../../../assets/svg/homePage/careerGuidance/arrowblue.svg";
const CareerGuidance = () => {
  const cards = [
    {
      image: Image1, // Replace with the actual image URL
      badge: "Assessments",
      badgeColor: "bg-blue-600",
      title: "11 great career quizzes you can do for free!",
    },
    {
      image: Image2, // Replace with the actual image URL
      badge: "Job",
      badgeColor: "bg-green-500",
      title: "How to begin searching for a job",
    },
    {
      image: Image3, // Replace with the actual image URL
      badge: "Resume",
      badgeColor: "bg-yellow-500",
      title: "Example of a Resume",
    },
    {
      image: Image4, // Replace with the actual image URL
      badge: "Interview",
      badgeColor: "bg-red-500",
      title: "Get ready for 100 important interview questions.",
    },
  ];
  return (
    <>
      <div className="w-full bg-white h-full py-20  lg:h-[100dvh] px-4 flex flex-col items-center justify-evenly ">
        <div className="w-full  flex flex-col items-center justify-center ">
          {/* Main Heading */}
          <h2 className="text-brand-career-guidance-gray text-2xl font-lato tracking-wide   md:text-3xl font-medium">
            Expert Career Guidance
          </h2>

          {/* Subheading with Link */}
          <div className="flex items-center mt-4">
            <Link
              to="#"
              className="text-black text-sm md:text-lg border-b border-black font-light flex items-center group"
            >
              Explore Tips
              <span className="ml-2  text-lg  transition-transform transform group-hover:translate-x-1 ">
                <img src={ArrowBlue} alt="" />
              </span>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="xl:w-[90%]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border  border-gray-200  "
            >
              {/* Image */}
              <div className="h-52 overflow-hidden px-5 ">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover "
                />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Badge */}
                <span
                  className={`inline-block px-4 py-[2px] text-sm font-semibold text-white rounded ${card.badgeColor}`}
                >
                  {card.badge}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-black text-lg font-light">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CareerGuidance;
