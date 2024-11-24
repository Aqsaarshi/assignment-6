import Girl from "../public/assets/Girl.png";
import Image from "next/image";
import React from "react";
import Logos from "../public/assets/Logos.png";
import microphone from "../public/assets/microphone.png";
import pen from "../public/assets/pen.png";
import volume from "../public/assets/volume.png";
import group from "../public/assets/group.png";
import Link1 from "../public/assets/Link1.png";
import Arrow from "../public/assets/Arrow.png";
import briefcase from "../public/assets/briefcase.png";
import book1 from "../public/assets/book1.png";
import book from "../public/assets/book.png";
import codding from "../public/assets/codding.png";
import pcpic from "../public/assets/pcpic.png";
import paint from "../public/assets/paint.png";
import tech from "../public/assets/tech.png";
import graph from "../public/assets/graph.png";
import law from "../public/assets/law.png";
import Star from "../public/assets/Star.png";
import Categories from "../public/assets/Categories.png";
import { Button } from "@/components/ui/button";
import james from "../public/assets/james.png";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import eric from "../public/assets/eric.png";
import joseph from "../public/assets/joseph.png";
import stephen from "../public/assets/stephen.png";
import ngumbau from "../public/assets/ngumbau.png";

import Card from "../public/assets/Card.png";
import Content from "../public/assets/Content.png";
import Stars from "../public/assets/Stars.png";
import c2 from "../public/assets/c2.png";
import Content3 from "../public/assets/Content3.png";
import sliderdots from "../public/assets/sliderdots.png";
import Footer from "../Footer/Footer";
const Hero = () => {
  return (
    <div>
      {/* Content with girl image to the right */}
      <div className="flex justify-between items-center ">
        {/* Text content */}
        <div className="w-[580px] h-[239px] px-[60px] py-0 gap-[24px] ">
          <div className="w-[580px] h-[134px] text-black text-[56px] font-bold leading-[67.2px] text-left  decoration-none ">
            Learn new skills online with ease
          </div>
          <div className="w-[580px] h-[81px] mt-4 gap-0 text-black font-roboto text-[18px] font-normal leading-[27px] text-left  decoration-skip-none">
            Discover a wide range of courses covering a variety of
            <br />
            subjects,taught by expert instructors.
            <div className="flex gap-4">
              <div className="w-[208px] h-[64px] pt-[16px]  mt-20 flex space-x-4">
                <div className=" inline-flex items-center w-[178px] h-[48px] p-3 gap-12 rounded-lg border-2 bg-black text-white  whitespace-nowrap">
                  Start Learn now
                  <div className="inline-flex items-center w-[178px] h-[48px]  p-3  rounded-lg border-2 border-black  bg-white text-black  border-current	whitespace-nowrap mr-10">
                    Explore Courses
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="ml-auto mt-4 md:mt-0 w-[640px] h-[900px] ">
          <Image src={Girl} alt="Girl Image" height={900} width={640} />
        </div>
      </div>

      <div className="w-[1280px] h-[228px] absolute top-[1038px] p-4 bg-[#F7F7F7] flex items-center">
        {/* Text and Logo in the same line */}
        <div className="font-roboto h-[56px] text-[24px] font-bold leading-[33.6px]">
          <div className="flex flex-col">
            <span className="text-left">Trusted by 2000+ companies</span>
            <span className="text-left">worldwide</span>
          </div>
        </div>
        <div className="ml-auto">
          <Image src={Logos} alt="Logos" height={56} width={880} />
        </div>
      </div>
      <div className="w-[1280px] h-[1049px] absolute top-[1266px]  gap-[80px] bg-white">
        <div className=" w-[768px] h-[109px] justify-center ml-64 mt-32">
          <div className="w-[768px] h-[109px] gap-0 font-roboto text-[48px] font-bold leading-[57.6px] text-center">
            Explore Courses By Category
          </div>
        </div>
        <div className="-mt-5  gap-0 font-roboto text-[18px] font-normal leading-[27px] text-left ml-80">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </div>
        <section className="text-gray-600 body-font">
          <div className=" container mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center"></div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 sm:w-1/1 p-4">
                <div className="w-[410.67px] h-[132px] p-[16px_0_0_0] gap-[32px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none bg-[#F7F7F7]">
                  <div className="w-[100px] h-[100px] p-[34px_0_0_0] gap-[10px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none  bg-white ml-2">
                    <Image
                      className="ml-9"
                      src={pen}
                      alt=""
                      height={32}
                      width={32}
                    />
                  </div>
                  <div className=" w-[246.67px] h-[57px]  ml-32 -mt-20">
                    <h2 className="text-lg text-gray-900 font-bold title-font mb-2 ">
                      Design And Development
                    </h2>
                    <p className="leading-relaxed text-base -mt-3 text-black text-[19px]">
                      50+ Courses Available
                    </p>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="w-[410.67px] h-[132px] p-[16px_0_0_0] gap-[32px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none  bg-[#F7F7F7]">
                  <div className="inline-flex items-center justify-center w-[100px] h-[100px] p-[34px_0_0_0] gap-[10px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none bg-white ml-2">
                    <Image
                      className="ml-10 mr-5 -mt-8 "
                      src={volume}
                      alt=""
                      height={32}
                      width={32}
                    />
                  </div>
                  <div className=" w-[246.67px] h-[57px]  ml-32 -mt-20">
                    <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
                      Marketing
                    </h2>
                    <p className="leading-relaxed text-base -mt-3 text-black text-[19px]">
                      50+ Courses Available
                    </p>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="w-[410.67px] h-[132px] p-[16px_0_0_0] gap-[32px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none  bg-[#F7F7F7]">
                  <div className="inline-flex items-center justify-center w-[100px] h-[100px] p-[34px_0_0_0] gap-[10px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none bg-white ml-2">
                    <Image
                      className="ml-10 mr-5 -mt-8 "
                      src={group}
                      alt=""
                      height={32}
                      width={32}
                    />
                  </div>
                  <div className=" w-[246.67px] h-[57px]  ml-32 -mt-20">
                    <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
                      Development
                    </h2>
                    <p className="leading-relaxed text-base -mt-3 text-black text-[19px]">
                      50+ Courses Available
                    </p>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="w-[410.67px] h-[132px] p-[16px_0_0_0] gap-[32px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none  bg-[#F7F7F7] mt-10">
                  <div className="inline-flex items-center justify-center w-[100px] h-[100px] p-[34px_0_0_0] gap-[10px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none bg-white ml-2">
                    <Image
                      className="ml-2 -mt-10"
                      src={microphone}
                      alt=""
                      height={32}
                      width={32}
                    />
                  </div>
                  <div className=" w-[246.67px] h-[57px]  ml-32 -mt-20">
                    <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
                      Communication
                    </h2>
                    <p className="leading-relaxed text-base -mt-3 text-black text-[19px]">
                      50+ Courses Available
                    </p>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="w-[410.67px] h-[132px] p-[16px_0_0_0] gap-[32px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none  bg-[#F7F7F7] mt-10">
                  <div className="inline-flex items-center justify-center w-[100px] h-[100px] p-[34px_0_0_0] gap-[10px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none bg-white ml-2">
                    <Image
                      className="ml-2 -mt-10"
                      src={Link1}
                      alt=""
                      height={32}
                      width={32}
                    />
                  </div>
                  <div className=" w-[246.67px] h-[57px]  ml-32 -mt-20">
                    <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
                      Digital Marketing
                    </h2>
                    <p className="leading-relaxed text-base -mt-3 text-black text-[19px]">
                      50+ Courses Available
                    </p>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="w-[410.67px] h-[132px] p-[16px_0_0_0] gap-[32px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none  bg-[#F7F7F7] mt-10">
                  <div className="inline-flex items-center justify-center w-[100px] h-[100px] p-[34px_0_0_0] gap-[10px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none bg-white ml-2">
                    <Image
                      className="ml-2 -mt-10"
                      src={Arrow}
                      alt=""
                      height={32}
                      width={32}
                    />
                  </div>
                  <div className=" w-[246.67px] h-[57px]  ml-32 -mt-20">
                    <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
                      Self Development
                    </h2>
                    <p className="leading-relaxed text-base -mt-3 text-black text-[19px]">
                      50+ Courses Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className=" container mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center"></div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="w-[410.67px] h-[132px] p-[16px_0_0_0] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none bg-[#F7F7F7] -mt-5 ">
                  <div className="w-[100px] h-[100px] p-[34px_0_0_0] gap-[10px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none bg-white ml-2">
                    <Image
                      className="ml-8 -mt-2"
                      src={briefcase}
                      alt=""
                      height={32}
                      width={32}
                    />
                  </div>
                  <div className=" w-[246.67px] h-[57px]  ml-32 -mt-20">
                    <h2 className="text-lg text-gray-900 font-bold title-font mb-2 ">
                      Business
                    </h2>
                    <p className="leading-relaxed text-base -mt-3 text-black text-[19px]">
                      50+ Courses Available
                    </p>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="w-[410.67px] h-[132px] p-[16px_0_0_0] gap-[32px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none  bg-[#F7F7F7] -mt-5">
                  <div className="inline-flex items-center justify-center w-[100px] h-[100px] p-[34px_0_0_0] gap-[10px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none bg-white ml-2">
                    <Image
                      className="-mt-10"
                      src={book1}
                      alt=""
                      height={32}
                      width={32}
                    />
                  </div>
                  <div className=" w-[246.67px] h-[57px]  ml-32 -mt-20">
                    <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
                      Finance
                    </h2>
                    <p className="leading-relaxed text-base -mt-3 text-black text-[19px]">
                      50+ Courses Available
                    </p>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="w-[410.67px] h-[132px] p-[16px_0_0_0] gap-[32px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none  bg-[#F7F7F7] -mt-5">
                  <div className="inline-flex items-center justify-center w-[100px] h-[100px] p-[34px_0_0_0] gap-[10px] rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none bg-white ml-2">
                    <Image
                      className="-mt-10"
                      src={book}
                      alt=""
                      height={32}
                      width={32}
                    />
                  </div>
                  <div className=" w-[246.67px] h-[57px]  ml-32 -mt-20">
                    <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
                      Consulting
                    </h2>
                    <p className="leading-relaxed text-base -mt-3 text-black text-[19px]">
                      50+ Courses Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-black bg-white border-black border-2 py-2 px-8 focus:outline-none  rounded text-lg">
            View All Courses
          </button>
        </section>
        <div className="w-[1280px] h-[488px] absolute top-[1266px]  gap-[80px] bg-white -mt-40">
          <div className=" w-[768px] h-[488px] justify-center ml-64 -mt-48">
            <div className="w-[768px] h-[488px] gap-0 font-roboto text-[48px] font-bold leading-[57.6px] text-center mt-52">
              Our Achivements
            </div>
          </div>
          <div className="-mt-96 gap-0 font-roboto text-[18px] font-normal leading-[27px] text-left whitespace-nowrap ml-32">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra
            <br />
            <div className="  gap-0 font-roboto text-[18px] font-normal leading-[27px] text-left whitespace-nowrap ml-52">
              viverra ornare, eros dolor interdum nulla, ut commodo diam libero
              vitae erat.
            </div>
          </div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-bold sm:text-4xl text-3xl text-gray-900">
                    200+
                  </h2>
                  <p className="leading-relaxed">Courses</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-bold sm:text-4xl text-3xl text-gray-900">
                    50K
                  </h2>
                  <p className="leading-relaxed">Mentors</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-bold sm:text-4xl text-3xl text-gray-900">
                    370k
                  </h2>
                  <p className="leading-relaxed">Students</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-bold sm:text-4xl text-3xl text-gray-900">
                    100+
                  </h2>
                  <p className="leading-relaxed">Recognition</p>
                </div>
              </div>
            </div>
          </section>
          <div className="w-[1280px] h-[488px] absolute   gap-[80px] bg-white right-16 mt-20 ">
            <div className=" w-[768px] h-[488px] justify-center ml-80">
              <div className="w-[768px] h-[488px] gap-0 font-roboto text-[48px] font-bold leading-[57.6px] text-center">
                Our Achivements
              </div>
            </div>
            <div className="-mt-96 gap-0 font-roboto text-[18px] font-normal leading-[27px] text-left whitespace-nowrap ml-44">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra
              <br />
              <div className="  gap-0 font-roboto text-[18px] font-normal leading-[27px] text-left whitespace-nowrap ml-52">
                viverra ornare, eros dolor interdum nulla, ut commodo diam
                libero vitae erat.
              </div>
            </div>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto ml-16">
                <div className="flex flex-wrap -m-4 text-center">
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-bold sm:text-4xl text-3xl text-gray-900">
                      200+
                    </h2>
                    <p className="leading-relaxed">Courses</p>
                  </div>
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-bold sm:text-4xl text-3xl text-gray-900">
                      50K
                    </h2>
                    <p className="leading-relaxed">Mentors</p>
                  </div>
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-bold sm:text-4xl text-3xl text-gray-900">
                      370k
                    </h2>
                    <p className="leading-relaxed">Students</p>
                  </div>
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-bold sm:text-4xl text-3xl text-gray-900">
                      100+
                    </h2>
                    <p className="leading-relaxed">Recognition</p>
                  </div>
                </div>
              </div>
            </section>
            <div className=" gap-[80px] bg-white right-16 mt-40">
              <div className=" w-[768px] h-[488px] justify-center ml-64 ">
                <div className="w-[768px] h-[488px] gap-0 font-roboto text-[48px] font-bold leading-[57.6px] text-center -mt-28">
                  Courses
                </div>{" "}
                <div className="-mt-96 gap-0 font-roboto text-[18px] font-normal leading-[27px] text-left whitespace-nowrap ml-64  ">
                  {" "}
                  Your Ultimate Guide to learning
                </div>
                <Image
                  className="h-[40px] w-[336px] ml-52"
                  src={Categories}
                  alt="image"
                  height={40}
                  width={336}
                />
              </div>{" "}
            </div>

            <section className="text-gray-600 body-font ">
              <div className="w-[1312px] h-auto gap-[32px]  container px-5 py-24 mx-auto -mt-96 ml-14">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-1/3 w-[416px] h-auto gap-[24px] rounded-tl-[5px]   ">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-[#F7F7F7]">
                      <Image
                        className=" w-full object-cover object-center"
                        src={pcpic}
                        alt="image"
                        height={300}
                        width={416}
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-bold text-black  mb-1">
                          Design
                        </h2>
                        <Image
                          className="flex items-center flex-wrap ml-72 -mt-5"
                          src={Star}
                          alt=""
                          width={48}
                          height={28}
                        />
                        <h1 className="title-font text-lg font-roboto font-extrabold text-gray-900 mb-3">
                          UX/UI Design 201
                        </h1>
                        <p className="leading-relaxed mb-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros.
                        </p>
                        <div className="flex items-center flex-wrap ">
                          <a className="text-black inline-flex items-center md:mb-2 lg:mb-0  py-2 px-8 focus:outline-none border border-black rounded">
                            Enroll Now
                          </a>
                          <span className="text-black ml-10">$400</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/3 w-[416px] h-auto gap-[24px] rounded-tl-[5px] ">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-[#F7F7F7]">
                      <Image
                        className=" w-full object-cover object-center"
                        src={codding}
                        alt="blog"
                        height={300}
                        width={416}
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-bold text-black  mb-1">
                          Programming
                        </h2>
                        <Image
                          className="flex items-center flex-wrap ml-72 -mt-5"
                          src={Star}
                          alt=""
                          width={48}
                          height={28}
                        />
                        <h1 className="title-font text-lg font-roboto font-extrabold text-gray-900 mb-3">
                          Introduction to Python
                        </h1>
                        <p className="leading-relaxed mb-3">
                          Photo booth fam kinfolk cold-pressed sriracha leggings
                          jianbing microdosing tousled waistcoat.
                        </p>
                        <div className="flex items-center flex-wrap">
                          <a className="text-black inline-flex items-center md:mb-2 lg:mb-0  py-2 px-8 focus:outline-none border border-black rounded mt-4">
                            Enroll Now
                          </a>
                          <span className="text-black ml-10 mt-4">$400</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/3 w-[416px] h-auto gap-[24px] rounded-tl-[5px]  ">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-[#F7F7F7]">
                      <Image
                        className="w-full object-cover object-center"
                        src={graph}
                        alt="blog"
                        height={300}
                        width={416}
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-bold text-black  mb-1">
                          CATEGORY
                        </h2>
                        <Image
                          className="flex items-center flex-wrap ml-72 -mt-5"
                          src={Star}
                          alt=""
                          width={48}
                          height={28}
                        />
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          Shooting Stars
                        </h1>
                        <p className="leading-relaxed mb-3">
                          Photo booth fam kinfolk cold-pressed sriracha leggings
                          jianbing microdosing tousled waistcoat.
                        </p>
                        <div className="flex items-center flex-wrap ">
                          <a className="text-black inline-flex items-center md:mb-2 lg:mb-0  py-2 px-8 focus:outline-none border border-black rounded">
                            Enroll Now
                          </a>
                          <span className="text-black ml-10">$400</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="text-gray-600 body-font ">
              <div className="w-[1312px] h-auto gap-[32px]  container px-5 py-24 mx-auto -mt-40 ml-14">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-1/3  w-[416px] h-auto gap-[24px] rounded-tl-[5px]   ">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-[#F7F7F7]">
                      <Image
                        className=" w-full object-cover object-center"
                        src={paint}
                        alt="image"
                        height={300}
                        width={416}
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-bold text-black  mb-1">
                          Art
                        </h2>
                        <Image
                          className="flex items-center flex-wrap ml-72 -mt-5"
                          src={Star}
                          alt=""
                          width={48}
                          height={28}
                        />
                        <h1 className="title-font text-lg font-roboto font-extrabold text-gray-900 mb-3">
                          Art Specialization
                        </h1>
                        <p className="leading-relaxed mb-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros.
                        </p>
                        <div className="flex items-center flex-wrap ">
                          <a className="text-black inline-flex items-center md:mb-2 lg:mb-0  py-2 px-8 focus:outline-none border border-black rounded">
                            Enroll Now
                          </a>
                          <span className="text-black ml-10">$400</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/3 w-[416px] h-auto gap-[24px] rounded-tl-[5px] ">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-[#F7F7F7]">
                      <Image
                        className=" w-full object-cover object-center"
                        src={law}
                        alt="blog"
                        height={300}
                        width={416}
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-bold text-black  mb-1">
                          Programming
                        </h2>
                        <Image
                          className="flex items-center flex-wrap ml-72 -mt-5"
                          src={Star}
                          alt=""
                          width={48}
                          height={28}
                        />
                        <h1 className="title-font text-lg font-roboto font-extrabold text-gray-900 mb-3">
                          Introduction to Python
                        </h1>
                        <p className="leading-relaxed mb-3">
                          Photo booth fam kinfolk cold-pressed sriracha leggings
                          jianbing microdosing tousled waistcoat.
                        </p>
                        <div className="flex items-center flex-wrap">
                          <a className="text-black inline-flex items-center md:mb-2 lg:mb-0  py-2 px-8 focus:outline-none border border-black rounded mt-4">
                            Enroll Now
                          </a>
                          <span className="text-black ml-10 mt-4">$400</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/3 w-[416px] h-auto gap-[24px] rounded-tl-[5px] ">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-[#F7F7F7]">
                      <Image
                        className="w-full object-cover object-center"
                        src={tech}
                        alt="blog"
                        height={300}
                        width={416}
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-bold text-black  mb-1">
                          CATEGORY
                        </h2>
                        <Image
                          className="flex items-center flex-wrap ml-72 -mt-5"
                          src={Star}
                          alt=""
                          width={48}
                          height={28}
                        />
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          Shooting Stars
                        </h1>
                        <p className="leading-relaxed mb-3">
                          Photo booth fam kinfolk cold-pressed sriracha leggings
                          jianbing microdosing tousled waistcoat.
                        </p>
                        <div className="flex items-center flex-wrap ">
                          <a className="text-black inline-flex items-center md:mb-2 lg:mb-0  py-2 px-8 focus:outline-none border border-black rounded">
                            Enroll Now
                          </a>
                          <span className="text-black ml-10">$400</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="flex justify-center border-black ml-28">
              {" "}
              <Button variant="outline">View All Courses </Button>
            </div>
            {/**joseph  */}
            <div className="w-[1280px] h-[895px] absolute ml-16 p-[112px_64px] gap-[80px] bg-[#F7F7F7]">
              <div className="w-[768px] h-auto gap-[16px] flex justify-center ml-48 text-[48px] font-roboto font-extrabold">
                Our team
              </div>
              <div className="flex justify-center mb-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="w-[1280px] h-[482px] -ml-16 bg-[#F7F7F7]">
                {/*ya phela div ha  james wala */}
                <div className="w-[1280px] h-[209px]  bg-[#F7F7F7] mb-20 font-roboto font-extrabold  text-[20px] align-bottom">
                  {" "}
                  <Image
                    className="ml-40 "
                    src={james}
                    alt="james"
                    height={80}
                    width={80}
                  />
                  <div className="font-bold text-[20px] align-bottom ml-36">
                    James Nduku
                  </div>
                  <div className="font-thin text-[18px] ml-28">
                    Marketing Coordinator
                  </div>{" "}
                  <FaLinkedin className="ml-36 mt-14 gap-4" />
                  <FaTwitter className="-mt-5 ml-48 gap-4" />
                  <FaDribbble className="-mt-5 ml-60 gap-4" />
                  <div className=" ml-10 -mt-52">
                    {/*<!-- Image -->*/}
                    <Image
                      className="w-[80px] h-[80px] mx-auto"
                      src={joseph}
                      alt="joseph"
                      height={80}
                      width={80}
                    />

                    {/*<!-- Text Content -->*/}
                    <div className="text-center">
                      <div className="font-bold text-[20px]">
                        Joseph Munyambu
                      </div>
                      <div className="font-thin text-[18px]">
                        Nursing Assistant
                      </div>
                    </div>

                    {/*<!-- Social Icons -->*/}
                    <div className="flex justify-center gap-4 mt-12">
                      <FaLinkedin />
                      <FaTwitter />
                      <FaDribbble />
                    </div>
                    <div className=" ml-96 -mr-96 -mt-52">
                      {/*<!-- Image -->*/}
                      <Image
                        className="w-[80px] h-[80px] mx-auto"
                        src={ngumbau}
                        alt="ngumbau"
                        height={80}
                        width={80}
                      />

                      {/*<!-- Text Content -->*/}
                      <div className="text-center">
                        <div className="font-bold text-[20px]">
                          Joseph Ngumbau
                        </div>
                        <div className="font-thin text-[18px]">
                          Medical Assistant
                        </div>
                      </div>

                      {/*<!-- Social Icons -->*/}
                      <div className="flex justify-center gap-4 mt-12">
                        <FaLinkedin />
                        <FaTwitter />
                        <FaDribbble />
                      </div>
                    </div>
                  </div>
                  <div className="w-[1280px] h-[209px] my-20 bg-[#F7F7F7]  font-roboto font-extrabold  text-[20px] align-bottom  mb-28">
                    {" "}
                    <Image
                      className="ml-40 "
                      src={eric}
                      alt="eric"
                      height={80}
                      width={80}
                    />
                    <div className="font-bold text-[20px] align-bottom ml-36 mt-2 ">
                      Erick Kipkemboi
                    </div>
                    <div className="font-thin text-[18px] ml-36">
                      Web Designer
                    </div>{" "}
                  </div>
                  {/*<!-- Social Icons -->*/}
                  <div className="flex justify-start  gap-4 ml-40 -mt-24">
                    <FaLinkedin className="-mt-14" />
                    <FaTwitter className="-mt-14" />
                    <FaDribbble className="-mt-14" />
                  </div>
                  {/*<!-- Image -->*/}
                  <div className="-mt-60 ml-10">
                    <Image
                      className="w-[80px] h-[80px] mx-auto "
                      src={stephen}
                      alt="stephen"
                      height={80}
                      width={80}
                    />
                    {/*<!-- Text Content -->*/}
                    <div className="text-center">
                      <div className="font-bold text-[20px]">
                        Stephen Kerubo
                      </div>
                      <div className="font-thin text-[18px]">
                        President of Sales
                      </div>
                    </div>
                    {/*<!-- Social Icons -->*/}
                    <div className="flex justify-center gap-4   mt-12">
                      <FaLinkedin />
                      <FaTwitter />
                      <FaDribbble />
                    </div>

                    <div className="flex justify-end -mt-52 mr-10">
                      <Image src={Card} alt="" height={209} width={394.67} />
                    </div>
                    <div className="w-[1280px] h-[830px] -ml-10 -mt-24 bg-[#F7F7F7]">
                      {/* Your content goes here */}
                      <div
                        className="flex w-[560px] h-[109px] mb-20 mt-52 gap-[24px] bg-[#F7F7F7] ml-28
    font-['Roboto'] text-[48px] font-bold leading-[57.6px] text-left"
                      >
                        Customer testimonials
                      </div>
                      <div className="w-[560px] h-[100px] gap-0  font-['Roboto'] ml-28 -mt-24 text-[18px] font-normal leading-[27px] text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                      <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto bg-[#F7F7F7] ">
                          {/* Flex container for horizontal alignment */}
                          <div className="flex justify-between flex-wrap gap-4">
                            {/* First Box */}
                            <div className="p-4 w-[362.67px]">
                              <div className="h-[321.89px] bg-[#F7F7F7] border border-black  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <Image
                                  className="absolute -mt-8"
                                  src={Stars}
                                  alt=""
                                  height={1900}
                                  width={116}
                                />
                                <Image
                                  src={Content}
                                  alt=""
                                  height={215}
                                  width={298.67}
                                />
                              </div>
                            </div>

                            {/* Second Box */}
                            <div className="p-4 w-[362.67px]">
                              <div className="h-[321.89px] bg-[#F7F7F7] border border-black  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <Image
                                  className="absolute -mt-8"
                                  src={Stars}
                                  alt=""
                                  height={1900}
                                  width={116}
                                />
                                <Image
                                  src={c2}
                                  alt=""
                                  height={215}
                                  width={298.67}
                                />
                              </div>
                            </div>

                            {/* Third Box */}
                            <div className="p-4 w-[362.67px]">
                              <div className="h-[321.89] bg-[#F7F7F7] border border-black px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <Image
                                  className="absolute -mt-8"
                                  src={Stars}
                                  alt=""
                                  height={1900}
                                  width={116}
                                />
                                <Image
                                  src={Content3}
                                  alt=""
                                  height={215}
                                  width={298.67}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <div className="flex justify-end space-x-5 -mt-24 mr-10">
                        {/*<!-- Backward Button -->*/}
                        <button className="bg-gray-200  hover:bg-gray-300 p-2   border border-black rounded-full ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>

                        {/*<!-- Forward Button -->*/}
                        <button className="bg-gray-200 hover:bg-gray-300 p-2 border border-black rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="relative">
                        <Image
                          className="absolute left-10" // Moves the image slightly to the left by 1rem
                          src={sliderdots}
                          alt=""
                          height={8}
                          width={72}
                        />
                      </div>
                      <Footer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
