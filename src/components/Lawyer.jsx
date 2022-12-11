import React from "react";
import lawyer from "../assets/lawyer.png";
import law1 from "../assets/law1.png";
import law2 from "../assets/law2.png";
import law3 from "../assets/law3.png";
import law4 from "../assets/law4.png";
const Lawyer = () => {
  return (
    <section class="min-h-screen mx-6 lg:mx-20">
      <h3 class="text-4xl text-secondary text-center font-BebasNeue">
        Lawyer Service
      </h3>
      <div class=" font-Poppins my-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <img
            src={lawyer}
            alt="banner"
          />
          <img
            src={law1}
            alt="review"
          />
          <img
            src={law2}
            alt="login"
          />
          <img
            src={law3}
            alt="order"
          />
          <img
            src={law4}
            alt="pay"
          />
        </div>
        <h5 class="text-2xl text-primary mt-4">Features</h5>
        <ul class="list-disc">
          <li>This app is a Single Page Application.</li>
          <li>
            It gives the user a smooth UX to explore as it does not reload when
            navigating through different routes
          </li>
          <li>
            There is an authentication system.
          </li>
          <li>Authentication is done with email-password and google.</li>
          <li>
            I also used React Toastify to notify the user about password reset
            email sent.
          </li>
          <li>
            There is a protected route when user click on checkout button on
            services.
          </li>
        </ul>
        <p>
          <a
            class="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
            href="https://lawyer-service-cb0ae.web.app/"
          >
            Live site
          </a>{" "}
          <br />
          <a
            class="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/nurmohammad83/lawyer-client"
          >
            Frontend Code
          </a>
          <br />
          <a
            class="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/nurmohammad83/lawyer-server"
          >
           Backend Code
          </a>
        </p>
      </div>
    </section>
  );
};

export default Lawyer;
