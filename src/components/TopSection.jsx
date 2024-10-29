import React from "react";
import {
  camera,
  colorLogo,
  image11,
  container1,
  arrowupright,
} from "../constants";

import arrowuprightwhite from "../assets/arrowwhite.svg";

const TopSection = () => {
  return (
    <section className="bg-customRed px-[70px] w-full font-barlow font-black text-white text-[12rem] leading-[12rem]">
      <div className="flex items-center justify-between  gap-8">
        <p className="flex gap-8">
          WE<span className="text-[#ffc4c4]">CRAFT</span>
        </p>
        <div
          className="w-full h-[140px] bg-cover bg-center rounded-full mt-6"
          style={{
            backgroundImage: `url(${image11})`,
            backgroundSize: "130%",
            backgroundPosition: "90% 35%",
          }}
        ></div>
      </div>
      <div className="flex items-center justify-between gap-8">
        <img src={camera} className="w-auto h-[200px] rotate-12" alt="" />
        <p>THE</p>
        <img src={colorLogo} className="mt-6" width={140} alt="" />
        <p className="text-[#ffc4c4]">DIGITAL</p>
      </div>
      <div className="flex items-center justify-between gap-8">
        <p className="text-[#ffc4c4]">EXPERIENCE</p>
        <div className="w-full gap-8 flex">
          <div
            className="w-1/2 h-[150px] bg-contain bg-no-repeat bg-center mt-6 px-4 py-4 font-mulish text-customRed "
            style={{ backgroundImage: `url(${container1})` }}
          >
            <div className="flex justify-end mt-3 mb-2">
              <img
                src={arrowupright}
                style={{ fill: `customRed` }}
                width={20}
                alt=""
              />
            </div>
            <div className="font-bold text-[3rem] leading-[40px] mb-1">
              120M
            </div>
            <p className="text-xs font-semibold">
              Social Media Audience Engagement
            </p>
          </div>
          <div
            className="w-1/2 h-[150px] bg-contain bg-no-repeat bg-center mt-6 px-4 py-4 font-mulish text-customRed "
            style={{ backgroundImage: `url(${container1})` }}
          >
            <div className="flex justify-end mt-3 mb-2">
              <img
                src={arrowupright}
                style={{ fill: `customRed` }}
                width={20}
                alt=""
              />
            </div>
            <div className="font-bold text-[3rem] leading-[40px] mb-1">
              320+
            </div>
            <p className="text-xs font-semibold">
              Global Network <br></br>Of Clients
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start mt-8  ">
        <button className="bg-white w-[260px] rounded-full text-customRed p-3 font-mulish font-semibold text-[24px] flex items-center leading-normal justify-between mr-[150px]">
          <p className="px-5">Get Started</p>
          <img
            src={arrowuprightwhite}
            className="bg-customRed rounded-full w-[50px] h-[50px] "
            alt=""
          />
        </button>

        <p className="font-mulish  font-medium text-[16px] leading-normal text-justify w-3/6">
          Neuera exists to revolutionize the way brands connect and engage with
          their audiences in the digital era by leveraging innovative strategies
          and cutting-edge technology. We strive to redefine digital experiences
          by crafting tailored solutions that not only capture attention.
        </p>
      </div>
    </section>
  );
};

export default TopSection;
