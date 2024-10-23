import React from "react";

const Benefits = () => {
  return (
    <section className="bg-customRed text-white px-[70px]">
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
      <div className="bg-[#ffc4c4] w-full px-5 py-5 flex mt-[50px]"></div>
    </section>
  );
};

export default Benefits;
