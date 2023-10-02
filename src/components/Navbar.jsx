import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

import AnchorLink from "react-anchor-link-smooth-scroll";

const NavbarSm = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isActive, setisActive] = useState("home");

  const onClick = () => {
    setisOpen(!isOpen);
  };
  console.log(isOpen);

  return (
    <>
      <div className="w-3/5">
        {isOpen ? (
          <section className="flex flex-col top-0 fixed z-100 bg-white shadow-lg  w-3/5 h-screen p-5">
            <div className="py-4 flex justify-end" onClick={onClick}>
              <RxCross1 className="w-6 h-6" />
            </div>
            <div className="px-4 ">
              <ol className="flex flex-col justify-evenly">
                <li
                  className={`px-4 py-2 text-md ${
                    isActive === "home" ? "text-orange-400 " : "text-black/60"
                  } font-semibold`}
                  onClick={() => setisActive("home")}
                >
                  <AnchorLink href="#home">Home</AnchorLink>
                </li>
                <li
                  className={`px-4 py-2 text-md ${
                    isActive === "about" ? "text-orange-400 " : "text-black/60"
                  } font-semibold`}
                  onClick={() => setisActive("about")}
                >
                  <AnchorLink href="#about">About Us</AnchorLink>
                </li>
                <li
                  className={`px-4 py-2 text-lg ${
                    isActive === "services"
                      ? "text-orange-400 "
                      : "text-black/60"
                  } font-semibold`}
                  onClick={() => setisActive("services")}
                >
                  <AnchorLink href="#services">Services</AnchorLink>
                </li>
                <li
                  className={`px-4 py-2 text-md ${
                    isActive === "portfolio"
                      ? "text-orange-400 "
                      : "text-black/60"
                  } font-semibold`}
                  onClick={() => setisActive("portfolio")}
                >
                  <AnchorLink href="#portfolio">Portfolio</AnchorLink>
                </li>
                <li
                  className={`px-4 py-2 text-md ${
                    isActive === "team" ? "text-orange-400 " : "text-black/60"
                  } font-semibold`}
                  onClick={() => setisActive("team")}
                >
                  <AnchorLink href="#team">Team</AnchorLink>
                </li>
                <li
                  className={`px-4 py-2 text-md ${
                    isActive === "contact"
                      ? "text-orange-400 "
                      : "text-black/60"
                  } font-semibold`}
                  onClick={() => setisActive("contact")}
                >
                  <AnchorLink href="#contact">Contact</AnchorLink>
                </li>
              </ol>
            </div>
          </section>
        ) : (
          <div className="absolute left-5 top-2" onClick={onClick}>
            <AiOutlineMenu className=" w-6 h-6 " />
          </div>
        )}
      </div>
    </>
  );
};

const NavbarLg = () => {
  const [isActive, setisActive] = useState("home");

  return (
    <section className="w-full fixed bg-white shadow-lg z-10 ">
      <div className="w-11/12 flex justify-between mx-auto py-4">
        <div className="pl-4">
          <h1 className="text-3xl tracking-wider text-black/70">Ninestars</h1>
        </div>
        <div className="flex gap-2">
          <ol className="flex justify-evenly">
            <li
              className={`px-4 py-2 text-lg ${
                isActive === "home" ? "text-orange-400 " : "text-black/60"
              } font-semibold`}
              onClick={() => setisActive("home")}
            >
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li
              className={`px-4 py-2 text-lg ${
                isActive === "about" ? "text-orange-400 " : "text-black/60"
              } font-semibold`}
              onClick={() => setisActive("about")}
            >
              <AnchorLink href="#about">About Us</AnchorLink>
            </li>
            <li
              className={`px-4 py-2 text-lg ${
                isActive === "services" ? "text-orange-400 " : "text-black/60"
              } font-semibold`}
              onClick={() => setisActive("services")}
            >
              <AnchorLink href="#services">Services</AnchorLink>
            </li>
            <li
              className={`px-4 py-2 text-lg ${
                isActive === "portfolio" ? "text-orange-400 " : "text-black/60"
              } font-semibold`}
              onClick={() => setisActive("portfolio")}
            >
              <AnchorLink href="#portfolio">Portfolio</AnchorLink>
            </li>
            <li
              className={`px-4 py-2 text-lg ${
                isActive === "team" ? "text-orange-400 " : "text-black/60"
              } font-semibold`}
              onClick={() => setisActive("team")}
            >
              <AnchorLink href="#team">Team</AnchorLink>
            </li>
            <li className="px-4 py-2 text-lg text-black/60 font-semibold">
              Drop Down{" "}
              <span className="inline ">
                <IoIosArrowDown className="w-4 h-4 inline" />{" "}
              </span>{" "}
            </li>
            <li
              className={`px-4 py-2 text-lg ${
                isActive === "contact" ? "text-orange-400 " : "text-black/60"
              } font-semibold`}
              onClick={() => setisActive("contact")}
            >
              <AnchorLink href="#contact">Contact</AnchorLink>
            </li>
          </ol>
          <button className="bg-orange-600 text-white px-5 text-lg py-2 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="lg:hidden relative">
        <div className="fixed left-0 top-3 z-10">
          
            <NavbarSm />
         
        </div>
      </nav>
      <nav className="lg:flex hidden lg:relative">
        <NavbarLg />
      </nav>
    </>
  );
};

export default Navbar;
