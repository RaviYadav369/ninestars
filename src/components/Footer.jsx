import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import {BiLogoTwitter,BiLogoFacebook,BiLogoInstagram,BiLogoLinkedin,BiLogoSkype} from 'react-icons/bi'

const Footer = () => {
  return (
    <>
      <section className=" bg-orange-50/70 lg:pb-10" id="footer">
        <section className="w-11/12 flex flex-col m-auto py-5 ">
          <div className="flex flex-col py-5 justify-center items-center mt-3">
            <h2 className="text-2xl font-bold text-black/70">
              Join Our Newsletter
            </h2>
            <p className="text-md py-2 font-normal text-center text-black/70">
              Lorem ipsum dolor sit amet, conser adiping elit. Veniam quia
              adipisci cumque.
            </p>
            <div className="lg:w-1/2 w-full m-auto my-4">
              <input className="shadow-lg  bg-white w-3/5 lg:w-4/5 p-2" />
              <button className="bg-orange-600 text-white px-5 text-lg py-2 rounded">
                Subcribe
              </button>
            </div>
          </div>
        </section>
      </section>
      <section className="py-10 px-5">
        <div className="w-11/12 m-auto bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 lg:gap-4">
            <div className="pb-5">
              <div className="w-3/5 p-5">
                <h1 className="text-4xl tracking-wider text-black/90 ">
                  Ninestars
                </h1>
                <p className="leading-relaxed py-2 text-black/70">
                  A310 Adam Street, New York, NY 54224 United States
                </p>
              </div>
              <div className="px-5 ">
                <p className="text-black/70">
                  <span className="font-bold">Phone: </span>+12 4522 65882
                </p>
                <p className="text-black/70">
                  <span className="font-bold">Email: </span>info@example.com
                </p>
              </div>
            </div>
            <div className="px-4 py-2 lg:py-5">
              <h2 className="font-extrabold text-md text-black">
                Useful Links
              </h2>
              <ul className="py-4">
                <li className="align-middle text-black/70 py-[6px] hover:text-orange-500/80 ">
                  <span className="mx-1 ">
                    <RiArrowRightSLine className="inline text-orange-500/70 w-5 h-5" />
                  </span>
                  Home
                </li>
                <li className="align-middle text-black/70 py-[6px] hover:text-orange-500/80 ">
                  <span className="mx-1 ">
                    <RiArrowRightSLine className="inline text-orange-500/70 w-5 h-5" />
                  </span>
                  About Us
                </li>
                <li className="align-middle text-black/70 py-[6px] hover:text-orange-500/80 ">
                  <span className="mx-1 ">
                    <RiArrowRightSLine className="inline text-orange-500/70 w-5 h-5" />
                  </span>
                  Sevices
                </li>
                <li className="align-middle text-black/70 py-[6px] hover:text-orange-500/80 ">
                  <span className="mx-1 ">
                    <RiArrowRightSLine className="inline text-orange-500/70 w-5 h-5" />
                  </span>
                  Terms of service
                </li>
                <li className="align-middle text-black/70 py-[6px] hover:text-orange-500/80 ">
                  <span className="mx-1 ">
                    <RiArrowRightSLine className="inline text-orange-500/70 w-5 h-5" />
                  </span>
                  Private policy
                </li>
              </ul>
            </div>
            <div className="px-4 py-2 lg:py-5">
              <h2 className="font-extrabold text-md text-black">
                Our Sevices
              </h2>
              <ul className="py-4">
                <li className="align-middle text-black/70 py-[6px] hover:text-orange-500/80 ">
                  <span className="mx-1 ">
                    <RiArrowRightSLine className="inline text-orange-500/70 w-5 h-5" />
                  </span>
                  Web Design
                </li>
                <li className="align-middle text-black/70 py-[6px] hover:text-orange-500/80 ">
                  <span className="mx-1 ">
                    <RiArrowRightSLine className="inline text-orange-500/70 w-5 h-5" />
                  </span>
                  Web Development
                </li>
                <li className="align-middle text-black/70 py-[6px] hover:text-orange-500/80 ">
                  <span className="mx-1 ">
                    <RiArrowRightSLine className="inline text-orange-500/70 w-5 h-5" />
                  </span>
                  Product Mangement
                </li>
                <li className="align-middle text-black/70 py-[6px] hover:text-orange-500/80 ">
                  <span className="mx-1 ">
                    <RiArrowRightSLine className="inline text-orange-500/70 w-5 h-5" />
                  </span>
                  Marketing
                </li>
                <li className="align-middle text-black/70 py-[6px] hover:text-orange-500/80 ">
                  <span className="mx-1 ">
                    <RiArrowRightSLine className="inline text-orange-500/70 w-5 h-5" />
                  </span>
                  Graphic Design
                </li>
              </ul>
            </div>
            <div className="px-4 py-2 lg:py-5">
              <div>
                <h2 className="text-md text-black font-extrabold">
                  Our Socials Networks
                </h2>
                <p className="text-black/80 text-sm lg:text-md py-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque quisq
                </p>
                <div className="flex justify-between pb-10 w-4/5">
                  <div className="bg-orange-600 p-2 rounded-full" >
                  <BiLogoTwitter className="w-5 h-5 text-white " />
                  </div>
                  <div className="bg-orange-600 p-2 rounded-full" >
                  <BiLogoFacebook className="w-5 h-5 text-white " />
                  </div>
                  <div className="bg-orange-600 p-2 rounded-full" >
                  <BiLogoInstagram className="w-5 h-5 text-white " />
                  </div>
                  <div className="bg-orange-600 p-2 rounded-full" >
                  <BiLogoSkype className="w-5 h-5 text-white " />
                  </div>
                  <div className="bg-orange-600 p-2 rounded-full" >
                  <BiLogoLinkedin className="w-5 h-5 text-white " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
