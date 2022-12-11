import React from "react";
import { Link } from "react-router-dom";

import Experience from "./Experience";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <section className="bg-base-200">
      <section className="">
        <div class="grid grid-cols-1 bg-base-200 lg:order-last lg:grid-cols-2 max-w-7xl items-center justify-items-center py-24">
          <img
            src="https://i.ibb.co/rk3BJ7J/pngtree-children-s-software-programming-image-2230759.jpg"
            class="w-80 md:w-2/4 hover:shadow-2xl duration-300 hover:scale-105 rounded-full animate-bounce"
            alt="avatar"
          />
          <div class=" md:max-w-2xl">
            <div class="w-80 md:w-96 pt-12 lg:pt-2">
              <h1 class="text-6xl font-BebasNeue">
                Nur Mohammad
              </h1>
              <h2 class="text-2xl font-Poppins">Junior Web Developer</h2>
              <hr class="border-b-2 border-t-0 pt-2 border-neutral" />
              <p class="py-6 font-Poppins">
                I am a passionate developer who is always enthusiastic about
                learning new technologies.
              </p>
              <div class="flex">
                <a
                  href="https://drive.google.com/file/d/1-_YFUfudpb2ZKspA9HUmmYQHNASOncBn/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <button class="btn btn-primary undefined rounded-sm text-white font-Poppins font-medium tracking-wider">
                      Resume
                    </button>
                  </div>
                </a>
                <a class="ml-4" href="/contact">
                  <div>
                    <Link to='/contact'>
                    <button class="btn  btn-secondary rounded-sm text-white font-Poppins font-medium tracking-wider">
                      Contact Me
                    </button>
                    </Link>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <Experience />
      </section>
    </section>
  );
};

export default Home;
