import React from "react";
import aboutImg from "../assets/about-img.svg";
import {CgFileDocument} from 'react-icons/cg'
import {BiCubeAlt} from 'react-icons/bi'

const About = () => {
  return (
    <section className="flex justify-between lg:py-16 py-4 w-11/12 mx-auto" id="about">
      <div className="w-1/2">
        <img src={aboutImg} alt="about-img" className="w-4/5 ml-4" />
      </div>
      <div className="w-1/2 ">
        <div className="pr-8">
          <h1 className="lg:text-4xl text-xl font-bold text-black/70">Voluptatem dignissimos provident quasi</h1>
          <p className="lg:text-base text-xs py-2 text-black/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            perspiciatis a cupiditate ullam vitae sunt? Unde nostrum iusto
            corporis, iure reprehenderit
          </p>
        </div>
        <div className="lg:flex hidden  justify-between">
          <div className="py-5">
            <CgFileDocument className="w-11 h-11 my-[10px] text-orange-500/70" />
            <h2 className="lg:text-2xl text-black/70 text-xl py-1 font-semibold">Corpopus Volptutes sit</h2>

            <p className="p-1 pt-2 text-xs lg:text-base font-normal text-black/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              ducimus 
            </p>
          </div>
          <div className="py-5">
            <BiCubeAlt className="w-12 h-12 my-[10px] text-orange-500/70" />
            <h2 className="lg:text-2xl text-xl font-semibold text-black/70">Corpopus Volptutes sit</h2>

            <p className="p-1 pt-3 lg:text-base text-xs font-normal text-black/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              ducimus 
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
