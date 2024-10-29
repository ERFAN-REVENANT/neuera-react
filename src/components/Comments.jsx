import React from "react";
import { commentsContent, quote } from "../constants";

const Comments = () => {
  return (
    <section className="pl-[70px] my-[70px] w-full h-full overflow-hidden">
      <div className="text-customBlue flex items-end justify-start mb-[60px]">
        <div>
          <p className="text-[#ff593e] font-barlow italic font-bold text-2xl uppercase tracking-wide">
            *SPOILER: THEY LOVE IT!
          </p>
          <h1 className="text-7xl font-black leading-none font-barlow">
            HERE'S WHAT PEOPLE <br />
            SAY ABOUT OUR WORK
          </h1>
        </div>
      </div>
      <div className="flex relative overflow-hidden w-full">
        {commentsContent.map((item, i) => (
          <div
            key={i}
            className={`px-10 py-10 flex-col items-center font-mulish h-full w-[33%] text-white ${
              i === 1 || i === 2 ? "absolute" : "block"
            } ${i === 1 ? "left-[35vw]" : ""} ${
              i === 2 ? "left-[70vw] overflow-hidden" : ""
            }`}
            style={{
              backgroundImage: `url(${item.bg})`,
              backgroundSize: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img src={quote} width={60} className="-ml-2 mb-3" alt="" />
            <p className="text-md">{item.text}</p>
            <div className="flex mt-5">
              <img src={item.icn} className="rounded-full" width={50} alt="" />
              <div className="flex flex-col ml-3">
                <p className="text-lg">{item.user}</p>
                <span className="text-xs">{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
