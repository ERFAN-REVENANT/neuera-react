import React from "react";
import { arrowlong, pointsContent, container2, container3 } from "../constants";

const Points = () => {
  return (
    <section className="w-full px-[70px] my-[120px]">
      <div className=" text-customBlue flex items-end justify-between">
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

        <div>
          <p className="text-[#ff593e] font-barlow italic font-bold text-2xl uppercase tracking-wide">
            *YOU KNOW WHAT?!
          </p>
          <h1 className="text-7xl font-black leading-none font-barlow ">
            WE DESIGN NEANINGFUL NOT <br /> JUST WICK IMPRESSIONS
          </h1>
        </div>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 w-full h-full gap-5 my-[70px]">
        {pointsContent.map((item, i) => (
          <div
            key={i}
            style={{
              backgroundImage: `url(${
                i === 0 || i === 3 ? container3 : container2
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="p-[50px] w-full h-[24.1rem] "
          >
            <div className="w-full flex items-center justify-between mt-[20px] mb-[40px]">
              <h2
                className={`text-5xl font-bold font-mulish uppercase ${
                  i === 0 || i === 3 ? "text-white" : "text-customBlue"
                }`}
              >
                {item.title.split(" ").map((word, idx) => (
                  <React.Fragment key={idx}>
                    {word}
                    {idx < item.title.split(" ").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>
              <img src={item.icn} width={75} alt="" />
            </div>
            <p
              className={`${
                i === 0 || i === 3 ? "text-white" : "text-customBlue"
              } text-lg font-semibold`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Points;
