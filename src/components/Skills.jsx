import React from "react";
import html from "../../public/html.webp";
import css from "../../public/css.webp";
import c from "../../public/c.webp"
import javascript from "../../public/javascript.png";
import sql from "../../public/sql.webp";
import cpp from "../../public/cpp.jpeg";
import react from "../../public/react.png"
import python from "../../public/python.webp";

function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: c,
      name: "C Lang.",
    },
    {
      id: 5,
      logo: cpp,
      name: "C++",
    },
    {
        id: 6,
        logo: react,
        name: "React",
      },
    {
      id: 7,
      logo: python,
      name: "Python",
    },
    {
      id: 8,
      logo: sql,
      name: "SQL",
    },
  ];
  return (
    <div
      name="Skills & Languages"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills & Languages</h1>
        <p className="  ">
          I have a good experience in below languages and technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full bg-transparent" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;