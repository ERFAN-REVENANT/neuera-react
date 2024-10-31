import React from "react";
import { arrowuprightblue, like, target2 } from "../constants";

const PreFooter = () => {
  return (
    <section
      className=" p-[100px] mx-[70px] my-[50px] font-barlow font-black text-white bg-customBlue uppercase flex justify-between text-[5rem] rounded-[20px]"
      style={{ lineHeight: 0.8 }}
    >
      <div className="flex flex-col text-justify">
        <p>
          READY To <span className="text-[#d1b7ff]">boost</span> YOUR
        </p>
        <div className="flex items-center gap-[100px]">
          BRAND'S{" "}
          <img
            src={like}
            className="absolute left-[410px] -mt-10"
            width={150}
            alt=""
          />
          <span className="text-[#d1b7ff]">STRATEGIC</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#d1b7ff]">impact and</span>
          <img src={target2} className="mt-3" width={50} alt="" /> achieve
        </div>
        <p>
          SIGNIFICANT <span className="text-[#d1b7ff]">growth</span>?
        </p>
      </div>
      <div className="bg-[#ff8f27] p-10 items-center justify-center flex w-[20%] h-auto rounded-[70px]">
        <img src={arrowuprightblue} className="w-[80%]" alt="" />
      </div>
    </section>
  );
};

export default PreFooter;
