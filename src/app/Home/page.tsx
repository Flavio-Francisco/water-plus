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
    <div style={{marginTop:150}}>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '60%', marginLeft: 150, marginTop: 50, marginBottom: 30 }}>
        <h1 style={{ textAlign: 'center' }}>Water   Plus</h1>
        <h6 style={{ textAlign: 'center' }}>Monitoramento de Tratamento de Água</h6>
      </div>
      <div style={{width:'90%', display:'flex',flexDirection:'row',justifyContent:'space-around',marginBottom:30, }}>
      <Pizza/>
      <SalineRejection/>
      </div>
      

      <Container className="d-flex justify-content-center align-items-center">
        <HomeBody />
      </Container>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: '60%', marginLeft: 150, marginTop: 50, marginBottom: 30 }}>
               <FilterReplacement />
                <AcidReplacement />
                <Desinfection />
      </div>

    </div>
  );
}

export default Home;
