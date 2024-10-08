import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
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
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Ritik's Portfolio. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Ritik</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;