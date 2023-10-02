import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

import client_1 from "../assets/client-1.png";
import client_2 from "../assets/client-2.png";
import client_3 from "../assets/client-3.png";
import client_4 from "../assets/client-4.png";
import client_5 from "../assets/client-5.png";
import client_6 from "../assets/client-6.png";
import client_7 from "../assets/client-7.png";
import client_8 from "../assets/client-8.png";

const Client = () => {
  const settingslg = {
    infinite: true,
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const settingssm = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className=" bg-orange-50/70 lg:pb-10  " id="client">
      <section className="w-11/12 flex flex-col m-auto py-5 ">
        <div className="flex flex-col py-5 justify-center items-center mt-3">
          <h2 className="text-2xl font-bold text-black/40">Clients</h2>
          <p className="lg:text-4xl text-xl py-2 font-bold text-black/70">
            They trusted us
          </p>
          <div className="w-[70px]  h-[2.5px]  bg-orange-400  m-auto my-2" />
        </div>
        <div>
          <div className="imgslider hidden lg:block py-5 -z-1 pb-10">
            <Slider {...settingslg}>
              <div>
                <img src={client_1} alt="client-1" className="opacity-40" />
              </div>
              <div>
                <img src={client_2} alt="client-1" className="opacity-40" />
              </div>
              <div>
                <img src={client_3} alt="client-1" className="opacity-40" />
              </div>
              <div>
                <img src={client_4} alt="client-1" className="opacity-40" />
              </div>
              <div>
                <img src={client_5} alt="client-1" className="opacity-40" />
              </div>
              <div>
                <img src={client_6} alt="client-1" className="opacity-40" />
              </div>
              <div>
                <img src={client_7} alt="client-1" className="opacity-40" />
              </div>
              <div>
                <img src={client_8} alt="client-1" className="opacity-40" />
              </div>
            </Slider>
          </div>
          <div className="imgslider lg:hidden -z-10 py-5 pb-10">
            <Slider {...settingssm}>
              <div>
                <img src={client_1} alt="client-1" className="opacity-40" />
              </div>
              <div>
                <img src={client_2} alt="client-1" className="opacity-40" />
              </div>
              <div>
                <img src={client_3} alt="client-1" className="opacity-40" />
              </div>
              <div>
                <img src={client_4} alt="client-1" className="opacity-40" />
              </div>
              <div>
                <img src={client_5} alt="client-1" className="opacity-40" />
              </div>
              <div>
                <img src={client_6} alt="client-1" className="opacity-40" />
              </div>
              <div>
                <img src={client_7} alt="client-1" className="opacity-40" />
              </div>
              <div>
                <img src={client_8} alt="client-1" className="opacity-40" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Client;
