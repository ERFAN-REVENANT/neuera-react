import React from "react";
import { headerButtons, logo } from "../constants";

const Header = () => {
  return (
    <div className="flex w-full py-[50px] px-[70px] bg-customRed font-mulish items-center justify-between text-white">
      <div className="gap-3 flex items-center">
        <img src={logo} width={40} alt="" />
        <h1 className=" font-bold text-3xl tracking-wider">NEUERA</h1>
      </div>
      <div className="flex gap-[50px] font-medium  ">
        {headerButtons.map((items) => (
          <div key={items.id}>{items.title}</div>
        ))}
      </div>
      <div className="flex gap-5 ">
        <button className="w-[91px] rounded-full border border-1 border-white px-4 py-2 hover:bg-white hover:text-customRed transition-all">
          Sign Up
        </button>
        <button className="w-[91px] rounded-full border border-1 border-white px-4 py-2 hover:bg-white hover:text-customRed transition-all">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Header;
