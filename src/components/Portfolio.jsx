import React from "react";
import { Link } from "react-router-dom";
import car from "../assets/portfolio/car.png";
import doctor from "../assets/portfolio/doctor.png";
import lawyer from "../assets/portfolio/lawyer.png";

const Portfolio = () => {

  return (
    <section className="py-12 min-h-screen">
      <div class="bg-white w-11/12 mx-auto py-12">
        <h3 class="text-5xl text-center text-secondary font-BebasNeue pb-12">
          Projects
        </h3>
        <div class="grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-3">
          <div class="font-Poppins">
            <div class="card max-w-xs h-[500px] bg-base-100 shadow-xl rounded-md">
              <figure>
                <img
                  src={car}
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="text-xl font-BebasNeue">Car Resale</h2>
                <hr class="border-b-2 border-t-0 mb-4 border-neutral" />
                <ul class="list-disc text-sm leading-6">
                  <li>Sealer can add a car.</li>
                  <li>
                    Upon login/signUp, a jsonwebtoken is issued from the server.
                  </li>
                  <li>implemented admin &amp; user level functionalities.</li>
                </ul>
                <div class="card-actions justify-end">
                  <div>
                    <div>
                      <Link to='/car'>
                      <button class="btn btn-primary undefined rounded-sm text-white font-Poppins font-medium tracking-wider">
                        Details
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="font-Poppins">
            <div class="card max-w-xs h-[500px] bg-base-100 shadow-xl rounded-md">
              <figure>
                <img
                  src={doctor}
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="text-xl font-BebasNeue">Doctor Portal</h2>
                <hr class="border-b-2 border-t-0 mb-4 border-neutral" />
                <ul class="list-disc text-sm leading-6">
                  <li className="">The patient will be able to take an appointment.</li>
                  <li>
                  Implemented email-password authentication.
                  </li>
                  <li>All vital information is saved in the database</li>
                </ul>
                <div class="card-actions justify-end">
                  <div>
                    <div>
                     <Link to='/doctor'>
                     <button class="btn btn-primary undefined rounded-sm text-white font-Poppins font-medium tracking-wider">
                        Details
                      </button>
                     </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="font-Poppins">
            <div class="card max-w-xs h-[500px] bg-base-100 shadow-xl rounded-md">
              <figure>
                <img
                  src={lawyer}
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="text-xl font-BebasNeue">Lawyer Service</h2>
                <hr class="border-b-2 border-t-0 mb-4 border-neutral" />
                <ul class="list-disc text-sm leading-6">
                  <li>Independent service provider website.</li>
                  <li>implemented email-password authentication.</li>
                  <li>Vital information is saved via protected variables.</li>
                </ul>
                <div class="card-actions justify-end">
                  <div>
                    <div>
                    <Link to='/lawyer'>
                    <button class="btn btn-primary undefined rounded-sm text-white font-Poppins font-medium tracking-wider">
                        Details
                      </button>
                    </Link>   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
