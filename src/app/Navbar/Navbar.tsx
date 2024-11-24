import React from "react";
import Image from "next/image";
import navbar from "../public/assets/navbar.png";
const Navbar = () => {
  return (
    <div>
      <header className="w-[1280px] h-[72px]text-gray-600 body-font bg-[#F7F7F7]">
        <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-[#F7F7F7]">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 bg-[#F7F7F7]">
            <div className="gap-0 h-[41px] w-[130.6px]  flex space-x-4 bg-[#F7F7F7] ml-11 ">
              <Image src={navbar} alt="Hero Image" height={41} width={130.6} />
            </div>
          </a>
          <div className="md:ml-auto  items-center hidden sm:flex space-x-10">
            <nav className="md:ml-auto md:mr-auto h-[44px] w-[687px] flex flex-wrap items-center text-base justify-center font-roboto space-x-10 bg-white">
              <a className="mr-5 hover:text-gray-900 hover:bg-gray-200  text-black ">
                Home
              </a>
              <a className="mr-5 hover:text-gray-900 hover:bg-gray-200 text-black">
                Courses
              </a>
              <a className="mr-5 hover:text-gray-900 hover:bg-gray-200 text-black">
                Service
              </a>
              <a className="mr-5 hover:text-gray-900 hover:bg-gray-200 text-black">
                Achievement
              </a>
              <a className="mr-5 hover:text-gray-900 hover:bg-gray-200 text-black">
                About Us{" "}
              </a>
              <a className="mr-5 hover:text-gray-900 hover:bg-gray-200 text-black">
                Testinomial
              </a>
            </nav>
            <div className="flex space-x-4 ml-10">
              <button className=" inline-flex items-center bg-white space-x-6 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black border-2 border-black  ">
                Login
              </button>
              <button className="inline-flex items-center bg-black  space-x-4 py-2 px-3  focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-white border-2 border-black ">
                Sign Up
              </button>
            </div>
          </div>

          <div className="sm:hidden flex items-center ml-auto">
            <button className="border-2  px-4 py-2 text-black">
              <div className="w-6 h-0.5 bg-black mb-2"></div>
              <div className="w-6 h-0.5 bg-black mb-2"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
