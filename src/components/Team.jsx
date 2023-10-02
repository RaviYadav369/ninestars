import React from "react";
import team_1 from '../assets/team-1.jpg'
import team_2 from '../assets/team-2.jpg'
import team_3 from '../assets/team-3.jpg'
import team_4 from '../assets/team-4.jpg'


const Team = () => {
  return (
    <section className=" lg:pb-10 " id="team">
      <section className="w-11/12 flex flex-col m-auto py-5 ">
        <div className="flex flex-col py-5 justify-center items-center mt-3">
          <h2 className="text-2xl font-bold text-black/40">Team</h2>
          <p className="lg:text-4xl text-xl py-2 font-bold text-black/80">
            Our Team is always here to helps
          </p>
          <div className="w-[70px]  h-[2.5px]  bg-red-400  m-auto my-2" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 py-5 px-6">
          <div className="">
            <img src={team_1} alt="portflio-1" className="rounded-sm" />
          </div>
          <div className="">
            <img src={team_2} alt="portflio-1" className="rounded-sm" />
          </div>
          <div className="">
            <img src={team_3} alt="portflio-1" className="rounded-sm" />
          </div>
          <div className="">
            <img src={team_4} alt="portflio-1" className="rounded-sm" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Team;
