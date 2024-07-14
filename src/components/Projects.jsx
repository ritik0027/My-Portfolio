import React from "react";
import currconvert from "../../public/currconvert.png";
import todo from "../../public/todo.png";
import blog from "../../public/blog.png";
import paytm from "../../public/paytm.png";
import tic from "../../public/tic.png";
import amazon from "../../public/amazon.png";
import password from "../../public/password.jpeg";

 

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: blog,
      link:"https://my-blogs-app-sigma.vercel.app/",
      src:"https://github.com/ritik0027/My-Blogs-App",
      name: "My Blogs App",
      text: "A blog app with React frontend and Appwrite backend."
    },
    {
      id: 2,
      logo: todo,
      link:"https://todo-app-dusky-alpha.vercel.app/",
      src:"https://github.com/ritik0027/Todo-App",
      name: "Todo App",
      text: "A blog app with React frontend and Appwrite backend."
    },
    {
      id: 3,
      logo: currconvert,
      link:"https://currency-converter-app-bice.vercel.app/",
      src:"https://github.com/ritik0027/Currency-Converter-App",
      name:"Currency Converter App",
      text: "Accurate currency converter with real-time exchange rates."
    },
    {
      id: 4,
      logo: paytm,
      link:"https://paytm-clone-4f6u1usf8-ritik-kumars-projects-caf99850.vercel.app/",
      src:"https://github.com/ritik0027/Paytm-Clone",
      name: "Paytm Clone",
      text: "Paytm clone UI styled using Tailwind CSS."
    },
    {
      id: 5,
      logo: tic,
      link:"https://tic-tac-toe-game-pi-lyart.vercel.app/",
      src:"https://github.com/ritik0027/Web-Development/tree/main/Tic%20Tac%20Toe%20Game",
      name: "Tic Tac Toe Game",
      text: "Interactive Tic Tac Toe game with HTML, Tailwind, JavaScript."
    },
    {
      id: 6,
      logo: password,
      link:"https://password-generator-git-master-ritik-kumars-projects-caf99850.vercel.app/",
      src:"https://github.com/ritik0027/Password-Generator",
      name: "Password Generator",
      text: "Generates unique passwords with letters and numbers."
    },
    {
      id: 7,
      logo: amazon,
      link:"https://amazon-frontend-clone-gules.vercel.app/",
      src:"https://github.com/ritik0027/Amazon-Frontend-Clone",
      name: "Amazon Frontend Clone",
      text: "Amazon clone made with HTML and CSS."
    },
  ];
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className=" underline font-semibold text-red-700">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-5">
          {cardItem.map(({ id, logo,link,src,name,text}) => (
            <div
              className="md:w-[290px] md:h-[290px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  {text}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <a href={link} target="_blank">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Demo
                </button>
                </a>
                <a href={src} target="_blank" >
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;