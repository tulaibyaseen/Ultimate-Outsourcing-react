import { useState } from "react";
import LinkdinIcon from "../../assets/svg/footer/Group 36.svg";
import TwitterIcon from "../../assets/svg/footer/Shape (1).svg";
import FaceBookIcon from "../../assets/svg/footer/Shape.svg";
import SslLogo from "../../assets/svg/footer/image 14.svg";
import GoogleSafe from "../../assets/svg/footer/image 15.svg";
import Blindo from "../../assets/svg/footer/image 16.svg";

const Footer = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null); // Track the currently open section

  const toggleSection = (sectionName) => {
    setOpenSection((prev) => (prev === sectionName ? null : sectionName)); // Toggle specific section
  };
  const SocialIcons = [
    {
      id: "1",
      icons: LinkdinIcon,
    },
    {
      id: "2",
      icons: FaceBookIcon,
    },
    {
      id: "3",
      icons: TwitterIcon,
    },
  ];
  const SitesLogo = [
    {
      id: "1",
      icons: GoogleSafe,
    },
    {
      id: "2",
      icons: SslLogo,
    },
    {
      id: "3",
      icons: Blindo,
    },
  ];
  const candidateLi = [
    "Find Job",
    "Career Advice",
    "Resume Help",
    "Job Alters",
    "Upload Resume",
    "Apply for me",
    "Sign Up",
  ];
  const RPOServices = [
    "CV Sourcing",
    "Pre Qualification",
    "Virtual Assistance Service",
    "Dedicated Recruiter",
    "Data Entry Specialist",
    "Market Mapping",
    "Lead Generation",
    "Research Specialist",
  ];
  const RecutorLi = [
    "HR Outsourcing",
    "Executive Search",
    "Permanent Recruitment",
    "Temporary Recruitment",
  ];
  const ResourcesLi = [
    "HR Outsourcing",
    "Executive Search",
    "Permanent Recruitment",
    "Temporary Recruitment",
  ];
  const DataSafetyLi = [
    "HR Outsourcing",
    "Executive Search",
    "Permanent Recruitment",
    "Temporary Recruitment",
  ];

  return (
    <section className="w-full h-full bg-brand-gray-footer-bg ">
      <div className="flex flex-col gap-14 w-full px-6 lg:px-0 lg:w-[75%]  mx-auto py-14 ">
        <div className="flex flex-col gap-3 lg:flex-row items-center lg:items-center justify-between w-full ">
          <div className="flex flex-col gap-3 lg:flex-row items-start lg:items-center justify-between w-full">
            <h1 className="font-lato font-medium text-lg text-white tracking-wide ">
              Newsletter
            </h1>
            <div className="flex items-center justify-start lg:justify-center gap-2 w-full">
              <input
                type="text"
                placeholder="Email Address"
                className="p-2 rounded xl:w-96 md:w-80 w-full"
              />
              <button className="py-2 px-3 text-white bg-brand-footer-button rounded font-lato font-medium">
                Subscribe
              </button>
            </div>
            <div className="flex items-center justify-start gap-3">
              {SocialIcons.map((icon) => {
                const { id, icons } = icon;
                return (
                  <div
                    key={id}
                    className="border-2  border-gray-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-brand-skyBlue-navbar hover:border-white duration-500 transition-all hover:border-2 ease-in-out "
                  >
                    <img src={icons} alt="" className=" " />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex  justify-between text-white">
          {/* Contact */}
          <div className="flex flex-col gap-6 w-48 relative">
            {/* Heading */}
            <div className="w-full text-sm md:text-2xl font-medium font-lato ">
              <h1
                className="cursor-pointer   md:cursor-default md:pointer-events-none "
                onClick={() => toggleSection("Contact Us")}
              >
                Contact Us
              </h1>
            </div>

            {/* Content */}
            <div
              className={` text-[1rem] font-lato font-normal tracking-wide text-wrap absolute top-10 left-0  z-10 md:relative md:top-0    ${
                openSection === "Contact Us"
                  ? "block bg-brand-skyBlue-navbar rounded py-1 px-2 "
                  : "hidden"
              } md:block`}
            >
              <div className="flex flex-col gap-4  ">
                <div className=" ">
                  <p>+ 44 20 3833 0307</p>
                  <p>+ 1 347 480 4177</p>
                </div>
                <div className="text-wrap ">
                  <h1 className="font-medium">Email</h1>
                  <p>info@ultimateoutsourcing.co.uk</p>
                </div>
                <div className="">
                  <h1 className="font-medium">Address</h1>
                  <p>124 city road, London, EC1V 2NX</p>
                </div>
              </div>
            </div>
          </div>
          {/* candidate */}
          <div className="flex flex-col gap-6 w-48 relative">
            {/* Heading */}
            <div className="w-full text-sm  md:text-2xl font-medium font-lato self-start">
              <h1
                className="cursor-pointer md:cursor-default md:pointer-events-none"
                onClick={() => toggleSection("Candidate")}
              >
                Candidate
              </h1>
            </div>

            {/* List */}
            <div className="absolute md:relative md:top-0 top-10 left-0   z-10 ">
              <ul
                className={`flex flex-col text-[1rem] font-lato font-normal relative  tracking-wide md:flex md:gap-2 ${
                  openSection === "Candidate"
                    ? "block  rounded bg-brand-skyBlue-navbar    "
                    : "hidden"
                } md:block`}
              >
                {candidateLi.map((candidate, index) => (
                  <li
                    key={index}
                    className={`py-1 px-2   rounded md:py-0 md:px-0 ${
                      openSection === "Candidate" ? "border-b " : ""
                    }`}
                  >
                    {candidate}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Rpo Service */}
          <div className="flex flex-col gap-6 w-48 relative">
            {/* Heading */}
            <div className="w-full text-sm  md:text-2xl font-medium font-lato self-start">
              <h1
                className="cursor-pointer md:cursor-default md:pointer-events-none"
                onClick={() => toggleSection("RPO Services")}
              >
                RPO Services
              </h1>
            </div>

            {/* List */}
            <div className="absolute top-10 left-0  z-10 md:relative md:top-0 ">
              <ul
                className={`flex flex-col text-[1rem] font-lato font-normal relative  tracking-wide md:flex md:gap-2 ${
                  openSection === "RPO Services"
                    ? "block  rounded bg-brand-skyBlue-navbar    "
                    : "hidden"
                } md:block`}
              >
                {RPOServices.map((rpoService, index) => (
                  <li
                    key={index}
                    className={`py-1 px-2   rounded md:py-0 md:px-0 ${
                      openSection === "RPO Services" ? "border-b " : ""
                    }`}
                  >
                    {rpoService}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex  justify-between  text-white">
          <div className="flex flex-col gap-6 w-48 relative">
            {/* Heading */}
            <div className="w-full text-sm  md:text-2xl font-medium font-lato self-start">
              <h1
                className="cursor-pointer md:cursor-default md:pointer-events-none  md:text-nowrap"
                onClick={() => toggleSection("Are you recruiting")}
              >
                Are you recruiting?
              </h1>
            </div>

            {/* List */}
            <div className="absolute top-10 left-0  z-10 md:relative md:top-0 w-full ">
              <ul
                className={`flex flex-col text-[1rem] font-lato font-normal relative w-full  tracking-wide md:flex md:gap-2 ${
                  openSection === "Are you recruiting"
                    ? "block  rounded bg-brand-skyBlue-navbar    "
                    : "hidden"
                } md:block`}
              >
                {RecutorLi.map((recutor, index) => (
                  <li
                    key={index}
                    className={`py-1 px-2   rounded md:py-0 md:px-0 w-full ${
                      openSection === "Are you recruiting" ? "border-b " : ""
                    }`}
                  >
                    {recutor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Resources */}
          <div className="flex flex-col gap-6 w-48 relative">
            {/* Heading */}
            <div className="w-full text-sm  md:text-2xl font-medium font-lato self-start">
              <h1
                className="cursor-pointer md:cursor-default md:pointer-events-none"
                onClick={() => toggleSection("Resources")}
              >
                Resources
              </h1>
            </div>

            {/* List */}
            <div className="absolute top-10 left-0  z-10 md:relative md:top-0 ">
              <ul
                className={`flex flex-col text-[1rem] font-lato font-normal relative  tracking-wide md:flex md:gap-2 ${
                  openSection === "Resources"
                    ? "block  rounded bg-brand-skyBlue-navbar    "
                    : "hidden"
                } md:block`}
              >
                {ResourcesLi.map((resources, index) => (
                  <li
                    key={index}
                    className={`py-1 px-2   rounded md:py-0 md:px-0 ${
                      openSection === "Resources" ? "border-b " : ""
                    }`}
                  >
                    {resources}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-48 relative">
            {/* Heading */}
            <div className="w-full text-sm md:text-2xl  font-medium font-lato self-start">
              <h1
                className="cursor-pointer md:cursor-default md:pointer-events-none"
                onClick={() => toggleSection("Data Safety")}
              >
                Data Safety
              </h1>
            </div>

            {/* List */}
            <div className="absolute top-10 left-0  z-10 md:relative md:top-0 ">
              <ul
                className={`flex flex-col text-[1rem] font-lato font-normal relative  tracking-wide md:flex md:gap-2 ${
                  openSection === "Data Safety"
                    ? "block  rounded bg-brand-skyBlue-navbar    "
                    : "hidden"
                } md:block`}
              >
                {DataSafetyLi.map((dataSaftey, index) => (
                  <li
                    key={index}
                    className={`py-1 px-2   rounded md:py-0 md:px-0 ${
                      openSection === "Data Safety" ? "border-b " : ""
                    }`}
                  >
                    {dataSaftey}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full bg-white gap-10 py-2 ">
        {SitesLogo.map((sitelogo) => {
          const { id, icons } = sitelogo;
          return (
            <div key={id} className=" flex items-center justify-center">
              <img src={icons} alt={icons} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center text-center md:text-sm text-xs  gap-1 tracking-wide font-lato font-normal py-12 text-white">
        <p>
          Copyright © 2023 Ultimate Outsourcing LTD, Ultimate Outsourcing LLC
          All Rights Reserved.
        </p>
        <p>Registered in England and Wales Under Company Number: 12980312.</p>
        <p>Registered in Wyoming USA Under Filling ID: 2023-001264578.</p>
      </div>
    </section>
  );
};

export default Footer;
