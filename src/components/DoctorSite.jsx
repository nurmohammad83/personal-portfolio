import React from 'react';
import doc from '../assets/doctor.png'
import doc1 from '../assets/doc1.png'
import doc2 from '../assets/doc2.png'
import doc3 from '../assets/doc3.png'
import doc4 from '../assets/doc4.png'
import doc5 from '../assets/doc5.png'
const DoctorSite = () => {
    return (
        <section className="min-h-screen mx-6 lg:mx-20">
      <h3 class="text-4xl text-secondary text-center font-BebasNeue">
        Doctor Portal
      </h3>
      <div class=" font-Poppins my-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <img
            src={doc}
            alt="banner"
          />
          <img
            src={doc1}
            alt="review"
          />
          <img src={doc2} alt="login" />
          <img
            src={doc3}
            alt="order"
          />

          <img src={doc4} alt="pay" />
          <img src={doc5} alt="pay" />
        </div>
        
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
            Admin can delete any user.
          </li>
          <li>
            Email : ana@gmail.com <br />
            Password : 123456A@2
          </li>
        </ul>
        <p>
          <a
            class="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
            href="https://doctor-protal-cc252.web.app/"
          >
            Live site
          </a>{" "}
          <br />
          <a
            class="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/nurmohammad83/doctor-portal-client"
          >
            Frontend Code
          </a>
          <br />
          <a
            class="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/nurmohammad83/doctor-portal-server"
          >
            Backend Code
          </a>
        </p>
      </div>
    </section>
    );
};

export default DoctorSite;