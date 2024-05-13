"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import HomeBody from "@/components/homeBody";
import AcidReplacement from "@/components/acidReplacement";
import Desinfection from "@/components/disinfection";
import FilterReplacement from "@/components/filterReplacement";
import GraficPizzaProduction from "@/components/GraficPizzaProduction";
import GraficPizzaRegection from "@/components/GraficPizzaRegection";

function Home() {
  return (
    <div className=" bg-white container ">
      <div className=" mt-10  sm:mt-150 text-center md:text-left">
        <h1>Water Plus</h1>
        <h6>Monitoramento de Tratamento de Água</h6>
      </div>

      <div className="sm:grid sm:grid-cols-2 md:grid-cols-2 mt-10 justify-between">
        <GraficPizzaProduction />
        <GraficPizzaRegection />
      </div>

      <Container className="d-flex justify-content-center align-items-center">
        <HomeBody />
      </Container>

      <div className="d-flex flex-wrap justify-content-center mt-10 md:mt-50 mb-30">
        <div className="d-flex flex-wrap justify-content-evenly w-100">
          <div className="mb-3">
            <FilterReplacement />
          </div>
          <div className="mb-3">
            <AcidReplacement />
          </div>
          <div className="mb-3">
            <Desinfection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
