import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="text-sm md:text-base">
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
        Hi, I'm Ritik Kumar, a fourth-year Computer Science student at KCC Institute of Technology & Management. I'm currently learning the MERN stack (MongoDB, Express.js, React.js, Node.js) to build dynamic web applications. My academic and project experiences have strengthened my skills in coding and problem-solving. I'm passionate about web development and always eager to learn more.
        </p>
        <br />
        <h1 className="text-red-700 font-semibold text-xl">
          Education
        </h1>
        <div className="flex flex-col">
          <div className=" flex md:space-x-28">
            <div>Bachelor of Computer Science, with 8 CGPA, KCCITM, AKTU</div>
            <div>2021 - Present</div>
          </div>
          <div className="flex md:space-x-72">
            <div>Class 12, CBSE BOARD, with 90 percent</div>
            <div> 2020 - 2021 </div>
          </div>
          <div className="flex md:space-x-72">
            <div>Class 10, CBSE BOARD, with 86 percent</div>
            <div>2018 - 2019</div>
          </div>
        </div>

        <br />
        <h1 className="text-red-700 font-semibold text-xl">
          Skills
        </h1>
        <div>
          <div className="underline">Technical Skills</div>
          <div className="text-xsm md:text-sm">HTML, CSS, Tailwind CSS, JavaScript, React JS, C, C++, Python, SQL</div>
        </div>
        <div>
          <div className="underline">Soft Skills</div>
          <div className="text-xsm md:text-sm">Problem Solving, Communication, Team Work, Active Listening, Time Management</div>
        </div>
        <div>
          <div className="underline">Version Control Tool</div>
          <div className="text-xsm md:text-sm">Git, Github</div>
        </div>
        <br />
        <h1 className="text-red-700 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <h3>
          HACKATHON (First Runner-Up) in the KCC HACKATHON ly, 2022.
        </h3>
        <span>Demonstrated problem-solving skills and teamwork by securing the first runner-up position in a competitive
          hackathon event.</span>

        <br />
        <br />
        <h1 className="text-red-700 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative Development solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons .
        </p>
      </div>
    </div>
  );
}

export default About;