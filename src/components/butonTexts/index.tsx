import React from "react";
import { Thema } from "../../../thema";

interface Props {
  buttonTexts: (string | null | undefined)[];
  getBayIndex: (index: number) => void;
}

const ButtonList: React.FC<Props> = ({ buttonTexts, getBayIndex }) => {
  return (
    <div className="overflow-x-auto ">
      <div className="flex gap-2 p-2">
        {buttonTexts.map((text, index) => (
          <div
            key={index}
            style={{ background: Thema.Colors.blue3 }}
            className="flex-shrink-0 rounded mb-2"
            onClick={() => getBayIndex(index)}
          >
            <button className="whitespace-nowrap p-2 max-[580px]:text-lg">
              {text}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
