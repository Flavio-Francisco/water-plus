import React from "react";
import { Thema } from "../../../thema";

interface Props {
  buttonTexts: (string | null | undefined)[];
  getBayIndex: (index: number) => void;
}

const ButtonList: React.FC<Props> = ({ buttonTexts, getBayIndex }) => {
  return (
    <div className="sm:fixed sm:top-4 sm:left-16 sm:h-full sm:w-40 bg-gray-100 overflow-y-auto shadow-lg max-w-xs md:max-w-sm lg:max-w-md">
      <div className="flex sm:flex-col max-sm:flex-row gap-2 p-2">
        {buttonTexts.map((text, index) => (
          <div
            key={index}
            style={{ background: Thema.Colors.blue3 }}
            className="rounded mb-2 cursor-pointer"
            onClick={() => getBayIndex(index)}
          >
            <button className="whitespace-nowrap text-xs p-2 w-full text-left">
              {text}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;




