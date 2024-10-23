import React from "react";

const Points = () => {
  return (
    <section>
      <div className=" mx-auto grid grid-cols-2 ">
        <div className="text-right flex flex-col justify-end items-end">
          <p className="text-lg text-justify font-mulish">
            We transform innovative ideas into <br></br> captivating and
            memorable digital <br></br> experiences that engage and inspire.
          </p>
        </div>

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
      </div>
    </section>
  );
};

export default Points;
