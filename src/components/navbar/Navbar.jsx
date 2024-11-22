import { Link } from "react-router-dom";
import ArrowImage from "../../assets/svg/navbar/arrow.svg";
import NavbarLogo from "../../assets/images/navbar/NavbarLogo.svg";
import { LuMenuSquare } from "react-icons/lu";

const Navbar = () => {
  const NavbarLi = [
    "Find Jobs",
    "Career Advice",
    "Resume Help",
    "Job Alters",
    "Upload Resume",
    "Apply For Me",
  ];
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
        <div className="flex items-center justify-between px-2 sm:px-10 py-2">
          <img
            src={NavbarLogo}
            alt="NavbarLogo"
            className="w-40 sm:w-auto"
          />
          <div className="flex items-center gap-1 sm:gap-3">
            <button className="md:w-24 rounded md:h-11 w-16 h-8 text-xs md:text-sm font-lato font-semibold tracking-wide border-none bg-brand-skyBlue-navbar text-white ">
              Sign Up
            </button>
            <button className="md:w-24 rounded md:h-11 w-16 h-8 text-xs md:text-sm font-lato font-semibold tracking-wide border-2 border-brand-skyBlue-navbar text-brand-skyBlue-navbar ">
              Login
            </button>
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
          <div className=" block md:hidden  ">
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
    </>
  );
};

export default Navbar;
