import React from "react";
import {CgFileDocument} from 'react-icons/cg'
import {RiBasketballLine} from 'react-icons/ri'
import {BiTachometer} from 'react-icons/bi'
import {GiEarthAmerica} from 'react-icons/gi'

const Services = () => {
  return (
    <section className=" bg-orange-50/70 lg:pb-10 " id="services">
      <section className="w-11/12  flex flex-col m-auto py-5 ">
        <div className="flex flex-col py-5 justify-center items-center mt-3">
          <h2 className="text-2xl font-bold text-black/40">Services</h2>
          <p className="lg:text-4xl text-center text-xl py-2 font-bold text-black/70">Check out the great services we offer</p>
          <div className="w-[70px]  h-[2.5px]  bg-red-400  m-auto my-2" />
        </div>
        <div className="py-4 flex lg:flex-row flex-col justify-between px-4 gap-4 w-full pb-6 ">
          <div className="bg-white flex rounded-xl items-center flex-col shadow-lg p-4 lg:w-[23%]">
            <RiBasketballLine className='w-11 h-11 text-orange-500/70 my-2' />
            <h2 className="text-lg font-bold py-1">Loream Ispium</h2>
            <p className="text-black/70 p-2 text-center text-md leading-relaxed font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hiac,
              similique vel sapiente inci
             
            </p>
          </div>
          <div className="bg-white flex rounded-xl items-center flex-col shadow-lg p-4 lg:w-[23%]">
            <CgFileDocument className='w-11 h-11 text-orange-500/70 my-2' />
            <h2 className="text-lg font-bold py-1">Loream Ispium</h2>
            <p className="text-black/70 p-2 text-center text-md leading-relaxed font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              similique vel sapiente incidunt nam quidem 
             
            </p>
          </div>
          <div className="bg-white flex rounded-xl items-center flex-col shadow-lg p-4 lg:w-[23%]">
            <BiTachometer className='w-11 h-11 text-orange-500/70 my-2' />
            <h2 className="text-lg font-bold py-1">Loream Ispium</h2>
            <p className="text-black/70 p-2 text-center text-md leading-relaxed font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              similique vel sapiente incidunt 
             
            </p>
          </div>
          <div className="bg-white flex rounded-xl items-center flex-col shadow-lg p-4 lg:w-[23%]">
            <GiEarthAmerica className='w-11 h-11 text-orange-500/70 my-2' />
            <h2 className="text-lg font-bold py-1">Loream Ispium</h2>
            <p className="text-black/70 p-2 text-center text-md leading-relaxed font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              simil
             
            </p>
          </div>
    
        </div>
      </section>
    </section>
  );
};

export default Services;
