import React from "react";
import pic from "../../public/photo.avif";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Projects",
    },
    {
      id: 4,
      text: "Skills & Languages",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto  h-16 px-4 shadow-sm shadow-white md:px-20 fixed left-0 right-0 top-0 z-50 bg-black ">
        <div className="flex items-center p-2 h-16 justify-between border-b-1 border-white">
        <Link 
        to="Home"
        smooth={true}
        duration={500}
        offset={-70}
        activeClass="active"
        >
          <div className="flex space-x-2">
            <img
              src={pic}
              className="h-12 w-12 cursor-pointer rounded-full"
            ></img>
            <h1 className="font-semibold cursor-pointer text-xl">
              Riti<span className="text-red-700">k</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          </Link>
          <div>
            <ul className=" hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="md:hidden" onClick={() => setMenu(!menu)}>
              {menu ? <IoMdClose size={30} /> : <FiMenu size={30} />}
            </div>
          </div>
        </div>
        {menu && (
          <div>
            <ul className="md:hidden bg-black flex flex-col h-screen items-center justify-center font-semibold space-x-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
