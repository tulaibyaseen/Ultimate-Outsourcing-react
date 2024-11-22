import { Link } from "react-router-dom";
import ArrowImage from "../../assets/svg/navbar/arrow.svg";
import NavbarLogo from "../../assets/images/navbar/NavbarLogo.svg";
import ArrowLogoBlue from "../../assets/svg/navbar/arrowBluecopy.svg";

import { LuMenuSquare } from "react-icons/lu";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const NavbarLi = [
    "Find Jobs",
    "Career Advice",
    "Resume Help",
    "Job Alters",
    "Upload Resume",
    "Apply For Me",
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <section className="w-full h-full border">
        <div className="border bg-brand-gray-navbar h-12 gap-1 sm:gap-3 flex items-center justify-center ">
          <p className="text-white sm:text-lg font-lato  font-normal text-[11px] ">
            Recruit top talent starting at only $ 000
          </p>
          <div className="h-6 sm:h-8 w-[1.5px] sm:w-[2px]  bg-white"></div>
          <p className="text-white underline sm:text-sm text-[10px] font-lato  font-normal ">
            Are You Recruiting?
          </p>
        </div>
        <div className="w-full hidden md:block">
          <div className="flex items-center justify-between px-2 sm:px-10 py-2 ">
            <img src={NavbarLogo} alt="NavbarLogo" className="w-40 sm:w-auto" />
            <div className="flex items-center gap-1 sm:gap-3">
              <button className="md:w-24 rounded md:h-11 w-16 h-8 text-xs md:text-sm font-lato font-semibold tracking-wide border-none bg-brand-skyBlue-navbar text-white ">
                Sign Up
              </button>
              <button className="md:w-24 rounded md:h-11 w-16 h-8 text-xs md:text-sm font-lato font-semibold tracking-wide border-2 border-brand-skyBlue-navbar text-brand-skyBlue-navbar ">
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse md:flex-row items-center justify-between px-2 md:px-10  bg-brand-skyBlue-navbar w-full h-[51px]">
          <div className="md:w-[70%] hidden md:block ">
            <ul className="flex items-center justify-between w-full  ">
              {NavbarLi.map((navbar, index) => {
                return (
                  <li
                    key={index}
                    className="text-brand-white-navbarli  font-medium hover:py-[2px] hover:border-b-2 md:text-xs lg:text-[16px]  hover:border-white   ease-in-out duration-100 "
                  >
                    {navbar}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" block md:hidden" onClick={toggleSidebar}>
            <LuMenuSquare className="text-4xl text-brand-white" />
          </div>
          <div className="flex  items-center justify-center gap-2 ">
            <Link className="text-white font-lato font-medium  md:text-xs lg:text-[16px] ">
              Our RPO Services
            </Link>
            <img
              src={ArrowImage}
              alt="ArrowImage"
              className="text-black h-4 w-4 text-center mt-1 "
            />
          </div>
        </div>
      </section>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 md:hidden`}
      >
        <div className="p-4 flex flex-col  justify-around gap-28 font-lato  ">
          {/* Close button */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <img src={NavbarLogo} alt="Navbar Logo" className="w-40 h-auto " />
            <img
              src={ArrowLogoBlue}
              alt=""
              className=" w-6 "
              onClick={toggleSidebar}
            />
            {/* <button className="text-black text-xl font-bold mb-4">×</button> */}
          </div>
          {/* Navigation Links */}
          <ul className="flex flex-col gap-4  ">
            {NavbarLi.map((navbar, index) => (
              <li
                key={index}
                className="text-gray-700 text-lg border-b  font-medium hover:text-brand-skyBlue-navbar"
              >
                {navbar}
              </li>
            ))}
          </ul>
          {/* Buttons */}
          <div className="flex flex-col gap-4">
            <button className="w-full py-2 text-white bg-brand-skyBlue-navbar rounded-md font-semibold">
              Sign Up
            </button>
            <button className="w-full py-2 border-2 border-brand-skyBlue-navbar text-brand-skyBlue-navbar rounded-md font-semibold">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
