import React from "react";
import portfolio_1 from "../assets/portfolio-1.jpg";
import portfolio_2 from "../assets/portfolio-2.jpg";
import portfolio_3 from "../assets/portfolio-3.jpg";
import portfolio_4 from "../assets/portfolio-4.jpg";
import portfolio_5 from "../assets/portfolio-5.jpg";
import portfolio_6 from "../assets/portfolio-6.jpg";
import portfolio_7 from "../assets/portfolio-7.jpg";
import portfolio_8 from "../assets/portfolio-8.jpg";
import portfolio_9 from "../assets/portfolio-9.jpg";

const Portflio = () => {
  return (
    <section className="lg:mb-10" id="portfolio">
      <section className="w-11/12 flex flex-col m-auto py-5 ">
        <div className="flex flex-col py-5 justify-center items-center mt-3">
          <h2 className="text-2xl font-bold text-black/40">Portflio</h2>
          <p className="lg:text-4xl text-xl py-2 font-bold text-black/70">
            Check out our beautifull portflio
          </p>
          <div className="w-[70px]  h-[2.5px]  bg-red-400  m-auto my-3" />
          <div>
            <div className="flex py-4 mt-2 gap-2">
              <ol className="flex justify-evenly">
                <li className="px-4 py-2 text-lg font-bold text-orange-600/70 ">
                  All
                </li>
                <li className="px-4 py-2 text-lg text-black/70 font-bold">
                  App
                </li>
                <li className="px-4 py-2 text-lg text-black/70 font-bold">
                  Card
                </li>
                <li className="px-4 py-2 text-lg text-black/70 font-bold">
                  Web
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-6 grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-4 lg:gap-8 px-6">
          <div className="">
            <img src={portfolio_1} alt="portflio-1" className="rounded-lg" />
          </div>
          <div className="">
            <img src={portfolio_2} alt="portflio-1" className="rounded-lg" />
          </div>
          <div className="">
            <img src={portfolio_3} alt="portflio-1" className="rounded-lg" />
          </div>
          <div className="">
            <img src={portfolio_4} alt="portflio-1" className="rounded-lg" />
          </div>
          <div className="">
            <img src={portfolio_5} alt="portflio-1" className="rounded-lg" />
          </div>
          <div className="">
            <img src={portfolio_6} alt="portflio-1" className="rounded-lg" />
          </div>
          <div className="">
            <img src={portfolio_7} alt="portflio-1" className="rounded-lg" />
          </div>
          <div className="">
            <img src={portfolio_8} alt="portflio-1" className="rounded-lg" />
          </div>
          <div className="">
            <img src={portfolio_9} alt="portflio-1" className="rounded-lg" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Portflio;
