import React from "react";
import heroImg from '../assets/hero-img.svg'

const HeroSection = () => {
  return (
    <section className=" bg-orange-50/70 border-b-2 border-orange-100" id="home">
      <div className="lg:py-10" />
      <div className="flex w-11/12 mx-auto justify-between">
        <div className=" w-1/2 lg:py-20 py-2 mt-5 lg:my-20 px-5">
          <h1 className="lg:text-6xl text-lg text-black/70 py-4 font-normal ">
            Better digital experience With Ninestars
          </h1>
          <p className="lg:text-2xl text-xs font-semibold text-black/40 pb-4">
            We are team of talented designes making websites with Bootstrap
          </p>
          <button className="bg-orange-600 text-white lg:px-8 px-2 text-xs lg:text-lg py-2 rounded-md">
            Get Started
          </button>
        </div>
        <div className="w-1/2 py-10">
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
