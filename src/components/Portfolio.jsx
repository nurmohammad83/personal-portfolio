import React from "react";
import car from "../assets/portfolio/car.png";
import doctor from "../assets/portfolio/doctor.png";
import lawyer from "../assets/portfolio/lawyer.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: car,
      link:'https://car-resale-d6efe.web.app/',
      client:'https://github.com/nurmohammad83/car-resale-client',
      server:'https://github.com/nurmohammad83/car-resale-server'
    },
    {
      id: 2,
      src: doctor,
      link:'https://doctor-protal-cc252.web.app/',
      client:'https://github.com/nurmohammad83/doctor-portal-client',
      server:'https://github.com/nurmohammad83/doctor-portal-server'
    },
    {
      id: 3,
      src: lawyer,
      link:'https://lawyer-service-cb0ae.web.app/',
      client:'https://github.com/nurmohammad83/lawyer-client',
      server:'https://github.com/nurmohammad83/lawyer-server'
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,link ,client,server}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-between">
                <a href={link} target='_blank'  className=" bg-orange-500 rounded-md font-semibold p-1 px-2 m-2 text-center  duration-200 hover:scale-105">Live</a>
                <a href={client} target='_blank' className=" text-center bg-blue-600 rounded-md font-semibold p-1 m-2 duration-200 hover:scale-105">
                  Client
                </a>
                <a href={server} target='_blank' className=" text-center bg-blue-600 rounded-md font-semibold p-1 m-2 duration-200 hover:scale-105">
                  Server
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
