import React from "react";
import {
  arrowuprightpink,
  BenefitsContent,
  logopink,
  logored,
} from "../constants";
import arrowupright from "../assets/arrowupright.svg";

const Benefits = () => {
  return (
    <section className="bg-customRed text-white px-[70px] pb-10">
      {/* Container for the two columns */}
      <div className=" mx-auto grid grid-cols-2 ">
        {/* Left column - Heading */}
        <div>
          <p className="text-[#ff593e] font-barlow italic font-bold text-2xl uppercase tracking-wide">
            *Let us show you!
          </p>
          <h1 className="text-6xl font-black leading-none font-barlow">
            HOW <span className="text-[#ffc4c4]">WE DRIVE</span> YOUR <br />{" "}
            BRAND
            <span className="text-[#ffc4c4]"> TO NEW HEIGHT</span>
          </h1>
        </div>

        {/* Right column - Description */}
        <div className="text-right flex flex-col justify-end items-end">
          <p className="text-lg text-justify font-mulish">
            We transform innovative ideas into <br></br> captivating and
            memorable digital <br></br> experiences that engage and inspire.
          </p>
        </div>
      </div>
      {BenefitsContent.map((item, index) => (
        <div
          key={item.id || index}
          className={`${
            index === 2 ? "bg-none" : "bg-[#ffc4c4]"
          }  w-full px-10 py-10 flex mt-[50px] rounded-[30px] items-center justify-between`}
        >
          <img className="rotate-45" src={index === 2 ? logopink : logored} />
          <p
            className={`font-barlow font-black uppercase text-[2.5rem] leading-none -ml-10 mr-10 w-1/3 ${
              index === 2 ? "text-[#ffc4c4]" : "text-customRed"
            } text-left`}
          >
            {item.title}
          </p>
          <p
            className={`font-mulish font-medium w-1/3 ${
              index === 2 ? "text-[#ffc4c4]" : "text-customRed"
            }`}
          >
            {item.text}
          </p>
          <img
            width={75}
            className={`p-5 rounded-[70px] ${
              index === 2 ? "bg-[#ffc4c4] rotate-45" : "bg-customRed"
            }`}
            src={index === 2 ? arrowupright : arrowuprightpink}
            alt="Arrow pointing up and right" // Descriptive alt text
          />
        </div>
      ))}
    </section>
  );
};

export default Benefits;
