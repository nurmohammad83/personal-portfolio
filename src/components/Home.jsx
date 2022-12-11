import React from "react";
import HeroImage from "../assets/profile.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div
      name="home"
      className="md:h-screen px-0 p-28 w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center md:h-full px-4 md:flex-row">
        <div className="flex md:w-1/2 flex-col justify-center md:h-full">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
          <Typewriter
                options={{
                  strings: ["I'm a Frontend Developer"],
                  autoStart: true,
                  loop: true,
                  pauseFor: 4000,
                }}
              />
          </h2>
          <p className="text-gray-500 py-2 max-w-md">
          I am a passionate developer who is always enthusiastic about learning new technologies.
          </p>

          <div>
            <a
              href="https://drive.google.com/file/d/1EatS22omOFd4aREyhJIx_992bNHCI-jU/view?usp=share_link"
              smooth
              target='_blank'
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Resume
              <span className=" duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div className="md:w-1/2">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-full md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
