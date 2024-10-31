import React from "react";
import { plus, scrollContent } from "../constants";

const InfiniteScroll = () => {
  const generateInfiniteContent = (items, repeatCount) => {
    let repeatedContent = [];
    let count = 0;

    do {
      repeatedContent = [...repeatedContent, ...items];
      count++;
    } while (count < repeatCount);

    return repeatedContent;
  };

  const infiniteContent = generateInfiniteContent(scrollContent, 20);

  return (
    <div className="bg-customRed w-full h-full py-[80px] ">
      <div className=" w-full flex gap-5 overflow-hidden">
        <div className="scroll-content flex animate-RightToLeft items-center t gap-[90px]">
          {infiniteContent.map((item, index) => (
            <React.Fragment key={index}>
              <img src={item.icon} width={160} alt="" />
              <img src={plus} width={15} alt="" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
