import React from "react";
import car1 from '../assets/car1.png'
import car2 from '../assets/car2.png'
import car3 from '../assets/car3.png'
import car4 from '../assets/car4.png'
import car5 from '../assets/car5.png'
import car6 from '../assets/car6.png'
const CarSite = () => {
  return (
    <section className="min-h-screen mx-6 lg:mx-20">
      <h3 class="text-4xl text-secondary text-center font-BebasNeue">
        Car Resale
      </h3>
      <div class=" font-Poppins my-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <img
            src={car1}
            alt="banner"
          />
          <img
            src={car2}
            alt="review"
          />
          <img src={car3} alt="login" />
          <img
            src={car4}
            alt="order"
          />

          <img src={car5} alt="pay" />
          <img src={car6} alt="pay" />
        </div>
        <hr class="border-b-2 border-t-0 pt-2 border-neutral" />
        <h5 class="text-2xl text-primary mt-4">Homepage</h5>
        <ul class="list-disc">
          <li>Home page has seven sections.</li>
          <li>Review section displays the latest customer review.</li>
        </ul>
        <hr class="border-b-2 border-t-0 pt-2 border-neutral" />
        <h5 class="text-2xl text-primary mt-4">Authentication</h5>
        <ul class="list-disc">
          <li>Firebase Authentication implemented.</li>
        </ul>
        <hr class="border-b-2 border-t-0 pt-2 border-neutral" />
        <h5 class="text-2xl text-primary mt-4">Order &amp; Payment</h5>
        <ul class="list-disc">
          <li>
            Payment gateway is done via{" "}
            <span class="font-semibold">stripe</span>
          </li>
          <li>
            After completing an order user can complete payment or delete an
            unpaid order on Dashboard - My Orders
          </li>
          <li>Upon payment completion transaction id is given to the user</li>
        </ul>
        <hr class="border-b-2 border-t-0 pt-2 border-neutral" />
        <h5 class="text-2xl text-primary mt-4">Admin Credentials</h5>
        <ul class="list-disc">
          <li>
            Admin can delete any order unpaid, ship any paid order, make any
            user admin
          </li>
          <li>
            Email : nur@gmail.com <br />
            Password : 123456
          </li>
        </ul>
        <p>
          <a
            class="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
            href="https://car-resale-d6efe.web.app/"
          >
            Live site
          </a>{" "}
          <br />
          <a
            class="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/nurmohammad83/car-resale-client"
          >
            Frontend Code
          </a>
          <br />
          <a
            class="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/nurmohammad83/car-resale-server"
          >
            Backend Code
          </a>
        </p>
      </div>
    </section>
  );
};

export default CarSite;
