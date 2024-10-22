import React, { useState } from "react";

interface Props {
  buttonTexts: (string | null | undefined)[];
  getBayIndex: (title: string) => void;
}

const ButtonList: React.FC<Props> = ({ buttonTexts, getBayIndex }) => {
  // Estado para armazenar o índice do botão selecionado
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number, text: string | null | undefined) => {
    setSelectedIndex(index); // Atualiza o índice do botão selecionado
    getBayIndex(text || ""); // Chama a função com o título do botão
  };

  return (
    <div className="sm:fixed sm:top-4 sm:left-16 sm:h-full sm:w-60 bg-gray-100 overflow-y-auto shadow-lg max-w-xs md:max-w-sm lg:max-w-md">
      <div className="flex sm:flex-col max-sm:flex-row gap-2 p-2">
        {buttonTexts.map((text, index) => (
          <div
            key={index}
            // Aplica uma cor diferente se o botão estiver selecionado
            className={`rounded mb-2 cursor-pointer ${
              selectedIndex === index ? "bg-[#199ed2]" : "bg-[#ADD8E6]"
            } hover:bg-[#199ed2]`}
            onClick={() => handleClick(index, text)}
          >
            <button className="whitespace-nowrap text-xs max-sm:text-base p-2 w-full text-left">
              {text}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
