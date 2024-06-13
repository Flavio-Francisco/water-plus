"use client";
import React from "react";
import HomeBody from "@/components/homeBody";
import GraficPizzaProduction from "@/components/GraficPizzaProduction";
import GraficPizzaRegection from "@/components/GraficPizzaRegection";


function Home() {
  return (
    <div className="w-full  conteiner flex flex-col justify-center items-center  max-sm:w-7/12 max-sm:m-auto ">
      <div className=" max-sm:mt-10 sm:mt-[50px] text-center md:text-left ">
        <h1 className="text-3xl font-bold whitespace-nowrap">Water Plus</h1>
      </div>

      <div className=" conteiner md:gap-10 md:mb-10  grid sm:grid-cols-2 md:grid-cols-2 mt-10 justify-between">
        <GraficPizzaProduction />
        <GraficPizzaRegection />
      </div>
      <div className="flex justify-center items-center ">
        <HomeBody />
      </div>
    </div>
  );
}

export default Home;
