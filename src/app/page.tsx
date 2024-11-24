import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <div className="w-[1280px] h-[7678px] top-[100px] left-[100px] gap-0 relative ">
      {/* Add Google Fonts Link in the Head section */}

      <div className=" hidden sm:flex w-[1280px] h-[54px] px-[62px] pr-[64px] gap-0 bg-white shadow-[inset_0_-1px_0_0px_#000000] relative items-center border-t-[1px] border-b-[2px] border-[#676767] ">
        {/* phone number */}
        <div className="w-auto h-[21px] gap-0 bg-white font-roboto text-[14px] font-normal leading-[21px] text-left text-black none ">
          Phone Number: 956 742 455 678
        </div>
        {/* vertical line */}
        <div className="w-[30px] h-0 gap-0 border-t-[1px] border-t-solid border-[#676767] opacity-100 rotate-90 mx-4"></div>
        {/* email */}
        <div className="w-[205px] h-[21px] bg-white font-roboto text-[14px] font-normal leading-[21px] text-left text-black">
          Email: info@ddsgnr.com
        </div>
        {/* right section with logos */}
        <div className="flex items-center ml-auto gap-4">
          <FaFacebookF className="text-2xl" />
          <FaInstagram className="text-2xl" />
          <FaTwitter className="text-2xl" />
          <ImLinkedin className="text-2xl" />
        </div>
      </div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
