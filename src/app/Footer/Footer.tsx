import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Column from "../public/assets/Column.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[1280px] h-[684px] text-white bg-white mt-6">
      {/* Flex container to center the white div */}
      <div className="flex justify-center mt-20">
        {/* The white div is centered horizontally */}
        <div className="h-[524px] w-[1120px] bg-white gap-[80px] mt-20">
          <div className="flex justify-start px-72 space-x-4">
            {/* Input and button aligned as per requirement */}
            <Input
              className="h-[48px] w-[265px] rounded-[5px] ml-96 mt-4 border border-black"
              placeholder="Enter your Email"
            />{" "}
            <Button
              className="h-[48px] mt-4 bg-white text-black border border-black hover:bg-gray-200"
              variant="default"
            >
              Subscribe
            </Button>
          </div>
          <div className="w-[500px] h-[51px] font-bold bg-white -mt-12 text-black">
            Subscribe to our newsletter
            <div className="font-roboto text-black text-lg font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          /{/* Privacy Policy line */}
          <div className=" mt-1 text-sm  text-gray-600 text-right mr-36">
            By subscribing you agree to our{" "}
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Privacy Policy
            </a>
          </div>
          <footer className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
              <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <Image
                  className="text-3xl" // Moves the image slightly to the left by 1rem
                  src={Column}
                  alt=""
                  height={80}
                  width={261.2}
                />
              </div>
              <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                <div className="lg:w-1/4 md:w-1/2 w-full mr-10">
                  <h2 className="title-font text-lg text-black font-bold tracking-widest  mb-3">
                    Courses
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-black font-light hover:text-gray-800">
                        Business
                      </a>
                    </li>
                    <li>
                      <a className="text-black font-light hover:text-gray-800">
                        Development
                      </a>
                    </li>
                    <li>
                      <a className="text-black font-light hover:text-gray-800">
                        Technology
                      </a>
                    </li>
                    <li>
                      <a className="text-black font-light hover:text-gray-800">
                        Design
                      </a>
                    </li>
                    <li>
                      <a className="text-black font-light hover:text-gray-800">
                        Programming
                      </a>
                    </li>
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4 md:mr-12">
                  <h2 className="title-font text-lg text-black font-bold tracking-widest  mb-3">
                    Resourses
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-black font-light hover:text-gray-800">
                        Career
                      </a>
                    </li>
                    <li>
                      <a className="text-black font-light hover:text-gray-800">
                        Resume
                      </a>
                    </li>
                    <li>
                      <a className="text-black font-light hover:text-gray-800">
                        Learning
                      </a>
                    </li>
                    <li>
                      <a className="text-black font-light hover:text-gray-800 whitespace-nowrap">
                        Interview Preparation
                      </a>
                    </li>
                    <li>
                      <a className="text-black font-light hover:text-gray-800">
                        Jobs
                      </a>
                    </li>
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-12 md:mr-10">
                  <h2 className="title-font text-lg text-black font-bold tracking-widest  mb-3">
                    About us
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-black font-light hover:text-gray-800">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a className="text-black font-light hover:text-gray-800">
                        Help/Support
                      </a>
                    </li>
                    <li>
                      <a className="text-black font-light hover:text-gray-800">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a className="text-black font-light hover:text-gray-800 whitespace-nowrap">
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a className="text-black font-light hover:text-gray-800">
                        Partners
                      </a>
                    </li>
                  </nav>
                </div>
              </div>
            </div>
            <div className="bg-white border-t border-black">
              <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-black  bg-white text-sm text-center sm:text-left">
                  © 2023 Ddsgnr. All rights reserved.
                  <span className="ml-4">
                    <a
                      href="#"
                      className="text-sm border-b border-black hover:text-gray-400"
                    >
                      Privacy Policy
                    </a>
                    <span className="mx-2">|</span>
                    <a
                      href="#"
                      className="text-sm border-b border-black hover:text-gray-400"
                    >
                      Terms of Service
                    </a>
                    <span className="mx-2">|</span>
                    <a
                      href="#"
                      className="text-sm border-b border-black hover:text-gray-400"
                    >
                      Cookies Settings
                    </a>
                  </span>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                  <a className="text-black">
                    <FaFacebookF />
                  </a>
                  <a className="ml-3 text-black">
                    <FaInstagram />
                  </a>
                  <a className="ml-3 text-black">
                    <FaTwitter />
                  </a>
                  <a className="ml-3 text-black">
                    <FaLinkedin />
                  </a>
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
