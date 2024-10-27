import React from "react";
import { footerLinks, footerTitles, logo, logoblue } from "../constants";

const Footer = () => {
  return (
    <footer className=" font-mulish font-medium pt-5 mx-[70px] text-customBlue">
      <div className="flex justify-between w-full mb-[60px]">
        <div className="flex flex-col w-1/3">
          <div className="gap-3 flex items-center mb-2">
            <img src={logoblue} width={40} alt="Neuera Logo" />
            <h1 className="font-bold text-3xl tracking-[2px]">NEUERA</h1>
          </div>
          <p>
            Follow us on social media to stay updated with the latest tips,
            trends, and insights in digital marketing.
          </p>
          <span className="mt-3">hello@neuera.com</span>
        </div>

        <div className="flex w-full pl-[200px]">
          {footerTitles.map((title, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start gap-0 "
            >
              <h3 className="mx-10 mb-3 text-left">{title}</h3>

              <ul className="flex flex-col items-center md:items-start gap-1">
                {footerLinks[index].map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className={`mb-2 mx-10 ${linkIndex === 0 ? "gap-2" : ""}`}
                  >
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between border-t-customBlue border-t-[0.5px] pt-3 pb-10">
        <p>©️ 2024 Neuera</p>
        <div className="flex gap-10">
          <p>Privacy Policy</p>
          <p>Term of Services</p>
        </div>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
