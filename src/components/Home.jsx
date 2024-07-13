import React from "react";
import pic from "../../public/photo.avif";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";

import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto my-20 px-4">
        <div className="flex flex-col md:flex-row md:mx-20">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome in my feed</span>
            <div className="flex text-2xl md:text-4xl space-x-1">
              <h1>Hello, I'm a </h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-base text-justify">
              Hello! I'm Ritik Kumar, a fourth-year student at KCC Institute of Technology & Management pursuing a Bachelor's degree in Computer Science .
              <br />
              Seeking to leverage
              strong technical skills and academic knowledge in software development, algorithms, and data structures. Eager to
              apply classroom learning to real-world challenges, while continuously learning and growing in a dynamic professional
              environment
            </p>
            <br />
            <div className="flex justify-between flex-col items-center md:flex-row space-y-6 md:space-y-0 ">
              <div className="space-y-3 ">
                <h1 className="font-bold text-center md:text-left">
                  Available on
                </h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ritik-kumar0027/"
                      target="_blank"
                    >
                      <FaLinkedin className="cursor-pointer text-2xl md:text-3xl hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ritik0027" target="_blank">
                      <FaGithub className="cursor-pointer text-2xl md:text-3xl hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/its_ritik.k?igsh=anRtamlyNmV3Njlu" target="_blank">
                      <FaInstagramSquare className="cursor-pointer text-2xl md:text-3xl hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="http://t.me/its_ritik27" target="_blank">
                      <FaTelegram className="cursor-pointer text-2xl md:text-3xl hover:scale-110 duration-200" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3 ">
                <h1 className="font-bold text-center md:text-left">
                  Currently working on
                </h1>
                <ul className="flex space-x-5">
                  <li>
                    {" "}
                    <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200" />
                  </li>
                  <li>
                    {" "}
                    <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200" />
                  </li>
                  <li>
                    {" "}
                    <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200" />
                  </li>
                  <li>
                    {" "}
                    <FaNode className="text-2xl md:text-3xl hover:scale-110 duration-200" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-40 md:mt-14 mt-8 order-1">
            <img src={pic} className="rounded-full md:w-450px md:h-450px"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
