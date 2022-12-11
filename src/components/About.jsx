import React from "react";
import hello from '../assets/hello.png'
const About = () => {
  return (
    <section class="min-h-screen bg-base-200">
      <div>
        <img
          src={hello}
          class="max-w-xs block mx-auto"
          alt="hello"
        />
      </div>
      <div class="font-Poppins mx-4 md:mx-32">
        <p class="text-justify">
          {" "}
          I am Nur Mohammad based in Cumilla, Bangladesh. I am a
          passionate Web Developer. I am always enthusiastic about new
          technologies. My expertise is in frontend development. I love to
          develop frontend functionalities with React, Javascript, Tailwind,
          etc. I am eager about machine learning as its name bombers curiosity
          to new programmers.
          <br /> <br />
          Though I am a technological person, I am confident about my
          communication skill. Moreover, I love to do teamwork. I consider
          myself as a quick learner and punctual, dedicated person.
          <br /> <br />
          My hobby is watching  Tom & Jerry Carton and reading islamic books.
        </p>
      </div>
    </section>
  );
};

export default About;
