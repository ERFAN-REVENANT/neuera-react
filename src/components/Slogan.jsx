import React from "react";
import { sticker, arrowuprightwhite } from "../constants";

const Slogan = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-[70px] uppercase bg-customBlue font-barlow font-black text-white text-[13rem]"
      style={{ lineHeight: 0.8 }}
    >
      <div className="flex items-center gap-7">
        be <img className="mt-5" src={sticker} width={150} alt="" /> Bold
      </div>
      <p className="text-[#d1b7ff]">be brilliant</p>
      <p className="text-[12.75rem]">with neuera</p>
      <button className="mt-10 bg-white w-[260px] rounded-full text-customBlue p-3 font-mulish font-semibold text-[24px] flex items-center leading-normal justify-between">
        <p className="px-8">Start Now!</p>
        <img
          src={arrowuprightwhite}
          className="bg-customBlue rounded-full w-[50px] h-[50px] "
          alt=""
        />
      </button>
    </section>
  );
};

export default Slogan;
