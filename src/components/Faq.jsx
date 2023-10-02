import React, { useState } from "react";

const items = [
  {
    title:
      "Ldolor sit ametctetur adipisicing elit ctetur elit?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nulla sequi impedit! Adipisci, illo nam.",
  },
  {
    title: "Sit amet,Autem nulla sequi impedit! Adipisci, consectetur adipisicing?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nulla sequi impedit! Adipisci, illo nam.",
  },
  {
    title: "Autem nulla sequi impedit! Adipisci,elit Autem nulla sequi impedit?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nulla sequi impedit! Adipisci, illo nam.",
  },
  {
    title: "Consectetur adipisicing elit ctetur adipisicing Autem nulla sequi impedit! Adipisci,?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nulla sequi impedit! Adipisci, illo nam.",
  },
  {
    title: "Autem nulla sequi impedit! Adipisci, adipis ctetur adipisicing Autem nulla sequi impedit! Adipisci, elit?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nulla sequi impedit! Adipisci, illo nam.",
  },
  {
    title: "Autem nulla sequi impedit! Adipisci, elit ctetur adipisicing elit?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nulla sequi impedit! Adipisci, illo nam.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [rotate, setRotate] = useState(false);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
    setRotate(true);
  };

  return (
    <>
      <div className="bg-orange-50/50 lg:py-12 px-2 lg:px-10" id="faq">
        <div className="w-11/12 flex flex-col m-auto pb-8">
          <div className="flex flex-col items-center justify-center mb-6">
            <h2 className="font-bold text-2xl text-black/40 align-middle py-1">
              F.A.Q
            </h2>
            <p className="font-bold lg:text-4xl text-xl py-1 text-black/70">
              Frequently Asked Question
            </p>
            <div className="w-[75px]  h-[2.5px]  bg-red-400  m-auto my-2" />
          </div>
          {items.map((item, index) => (
            <div
              className="rounded-none py-1  border border-l-0 border-r-0 border-t-0 border-neutral-200"
              key={item.title}
            >
              <h2 className="mb-0">
                <button
                  className="group relative flex w-full items-center text-black/70 tracking-wide rounded-none border-0 py-4 px-5 text-sm lg:text-lg text-left font-semibold transition"
                  type="button"
                  onClick={() => handleClick(index)}
                >
                  <span
                    className={`mr-2 h-4 w-4 shrink-0 transition-all  duration-[400ms] ease-in-out ${
                      rotate && index === activeIndex
                        ? "rotate-180"
                        : "rotate-0"
                    } `}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                  {item.title}
                </button>
              </h2>
              {index === activeIndex && (
                <div className="py-1 ml-8 px-4 lg:text-lg text-xs text-black/70 font-normal ">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
