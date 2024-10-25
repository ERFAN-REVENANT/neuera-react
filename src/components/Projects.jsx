import React from "react";
import { arrowlong, image4, image5 } from "../constants";

const Projects = () => {
  return (
    <section className="w-full mb-[120px]">
      <div className=" text-customBlue flex items-end justify-between mb-[60px] px-[70px]">
        <div>
          <p className="text-[#ff593e] font-barlow italic font-bold text-2xl uppercase tracking-wide">
            *CURIOUS ABOUT WHAT WE'VE CREATED?
          </p>
          <h1 className="text-7xl font-black leading-none font-barlow ">
            EXPLORE OUR MOST <br /> SUCCESSFUL PROJECT
          </h1>
        </div>

        <div className="text-right flex flex-col font-mulish">
          <p className="text-md text-justify font-mulish mb-5">
            We connect your brand with the right <br /> influencers, forging
            authentic partner <br /> that amplify your message.
          </p>
          <div className="flex justify-between items-center font-bold">
            <p className="text-lg">See all services</p>
            <img src={arrowlong} alt="" />
          </div>
        </div>
      </div>
      <div className="relative flex gap-5 w-full pl-[70px] overflow-hidden text-white">
        <div
          style={{
            backgroundImage: `url(${image4})`,
            backgroundSize: "120%",
            backgroundPosition: "10% 5%",
          }}
          className="w-[56%] h-[500px] rounded-[30px] px-[70px] py-[40px] flex flex-col justify-end"
        >
          <h1 className="font-barlow font-black text-5xl mb-3">IPHONE XR</h1>
          <span className="font-mulish italic font-light mb-2">
            Digital Marketing Campaign
          </span>
          <p className="font-mulish">April 2024</p>
        </div>

        <div
          style={{
            backgroundImage: `url(${image5})`,
            backgroundSize: "120%",
            backgroundPosition: "90% 5%",
          }}
          className="absolute top-0 right-[-15.5%] w-[56%] h-[500px] rounded-[30px] px-[70px] py-[40px] flex flex-col justify-end"
        >
          <h1 className="font-barlow font-black text-5xl mb-3">
            VICTORIA SECRET
          </h1>
          <span className="font-mulish italic font-light mb-2">
            Branding & Identity Design
          </span>
          <p className="font-mulish">June 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
