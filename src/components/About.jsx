import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
        I am Nur Mohammad based in Comilla, Bangladesh. I am a passionate Web Developer. I am always enthusiastic about new technologies. My expertise is in frontend development. I love to develop frontend functionalities with React, Javascript, Tailwind, etc. 
        <br />
Though I am a technological person, I am confident about my communication skill. Moreover, I love to do teamwork. I consider myself as a quick learner and punctual, dedicated person.

        </p>

        
      </div>
    </div>
  );
};

export default About;
