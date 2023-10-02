import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { BsPhone } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="lg:pb-10" id="contact">
      <section className="lg:w-11/12 w-full flex flex-col m-auto py-5 ">
        <div className="flex flex-col py-5 justify-center items-center mt-3">
          <h2 className="text-2xl font-bold text-black/40">Contacts</h2>
          <p className="lg:text-4xl text-xl py-2 font-bold text-black/70">
            Contact us the get started
          </p>
          <div className="w-[70px]  h-[2.5px]  bg-red-400  m-auto my-2" />
        </div>

        <div className="lg:px-10 px-2 py-4 flex justify-between g-4">
          <div className="bg-white lg:block hidden shadow-lg p-5 px-8 w-2/5 border-orange-600/80 border-t-[3.5px] border-b-[3.5px]">
            <div className="flex items-center py-1">
              <div className="bg-orange-500/10 p-3 rounded-full">
                <SlLocationPin className="text-orange-500/90 w-5 h-5 " />
              </div>
              <div className="p-2 ml-3">
                <h1 className="text-2xl font-bold text-black/60 py-1">
                  Location
                </h1>
                <p className="text-lg text-black/50">
                  A301 Adam Street, New York, NY 550533
                </p>
              </div>
            </div>
            <div className="flex items-center py-1">
              <div className="bg-orange-500/10 p-3 rounded-full">
                <TfiEmail className="text-orange-500/90 w-5 h-5 " />
              </div>
              <div className="p-2 ml-3">
                <h1 className="text-2xl font-bold text-black/60 py-1">Email</h1>
                <p className="text-lg text-black/50">info@example.com</p>
              </div>
            </div>
            <div className="flex items-center py-1">
              <div className="bg-orange-500/10 p-3 rounded-full">
                <BsPhone className="text-orange-500/90 w-5 h-5 " />
              </div>
              <div className="p-2  ml-3">
                <h1 className="text-2xl font-bold text-black/60 py-1">Call</h1>
                <p className="text-lg text-black/50">+12 45288 54624</p>
              </div>
            </div>
            <div className="w-full mt-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648255.346694168!2d78.68686515114283!3d26.752373208680655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1696171992035!5m2!1sen!2sin" width="460" height="320" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="bg-white shadow-lg  lg:p-5 p-2 w-full lg:px-8 lg:w-[57%] border-orange-600/80 border-t-[3.5px] border-b-[3.5px]">
            <div>
              <div className="flex lg:flex-row flex-col g-4 py-2">
                <div className="flex flex-col lg:w-1/2 lg:mr-8">
                  <label className="lg:text-2xl text-xl font-semibold py-1 text-black/70">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-2 w-full rounded border-2 hover:border-black/60 "
                  />
                </div>
                <div className="flex flex-col lg:w-1/2">
                  <label className="lg:text-2xl text-xl font-semibold py-1 text-black/70">
                    Your Email
                  </label>
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="p-2 rounded w-full border-2 hover:border-black/60"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full py-2">
                <label className="lg:text-2xl text-xl font-semibold py-1 text-black/70">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="p-2 rounded w-full border-2 hover:border-black/60"
                />
              </div>
              <div className="flex flex-col w-full py-2">
                <label className="lg:text-2xl text-xl font-semibold py-1 text-black/70">
                  Message
                </label>
                <textarea
                  rows={10}
                  className="p-2 rounded w-full border-2 hover:border-black/60"
                />
              </div>
              <div className="flex items-center justify-center pt-4 mt-3">
                <button className="bg-orange-600 text-white px-5 text-xl py-2 rounded">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
