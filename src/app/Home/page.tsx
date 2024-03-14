"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import HomeBody from '@/components/homeBody';
import Pizza from '@/components/graficPercentage';
import SalineRejection from '@/components/salineRejection';
import AcidReplacement from '@/components/acidReplacement';
import Desinfection from '@/components/disinfection';
import FilterReplacement from '@/components/filterReplacement';

function Home() {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-lg">
      <div className=" mt-10  sm:mt-150 text-center md:text-left">
        <h1>Water Plus</h1>
        <h6>Monitoramento de Tratamento de Água</h6>
      </div>

      <div className="sm:grid sm:grid-cols-2 md:grid-cols-2 mt-10 justify-between">
          <Pizza />
          <SalineRejection />
      </div>



      <Container className="d-flex justify-content-center align-items-center">
        <HomeBody />
      </Container>

      <div className="d-flex justify-content-center align-items-center flex-row w-60 md:w-auto  mt-10 md:mt-50 mb-30">
        <FilterReplacement />
        <AcidReplacement />
        <Desinfection />
      </div>
    </div>
  );
}

export default Home;

