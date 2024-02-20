"use client"
import React, { useState } from 'react';
import "./styles.css";
import { Container } from 'react-bootstrap';
import { Thema } from '../../../thema';
import Batery from '../batery';
import GraficFilter from '../grafic';
import { dataAbrandador, dataZeolica,dataCarvao } from '@/utils/models/Data';


interface Iprops {
  nameUser: string;
}

export default function HomeBody(props: Iprops) {
  const [select,setSelect]=useState("abrandador")
 


  const selectGrafic = (grafic:string)=>{
    
    switch(grafic) {
      case "abrandador":
        return <GraficFilter title={dataAbrandador.title} data={dataAbrandador.data} />
      case"zeolita":
       return <GraficFilter title={dataZeolica.title} data={dataZeolica.data} />
      
      case"carvao":
       return <GraficFilter title={dataCarvao.title} data={dataCarvao.data} />
      default:
      return  <GraficFilter title={dataAbrandador.title} data={dataAbrandador.data} />
    }
  }

  const handleGraficClick = (grafic: string) => {
    setSelect(grafic);
    console.log(grafic);
    
  }
  return (
    <Container>
      <div className='cardUser'> 
        <p style={{color:Thema.Colors.gray,marginTop:10}}> Seja bem vindo   </p>
        <p style={{color:Thema.Colors.gray ,marginTop:10}}>   {props.nameUser} !</p>
      </div>

      <div className='batteryConteiner'>
        <div className='batteryBox' onClick={()=> handleGraficClick("zeolita")}>
          <p className='batteryText'>Zeolita</p>
           <Batery chargeLevel={100}/>
        </div>
        
        <div className='batteryBox' onClick={()=> handleGraficClick('abrandador')}>
          <p className='batteryText'>Abrandador</p>
           <Batery chargeLevel={70}/>
        </div>
        <div className='batteryBox' onClick={()=> handleGraficClick("carvao")}>
          <p className='batteryText'>Carvão Ativado</p>
           <Batery chargeLevel={60}/>
        </div>
     <div className='conteineGrafic'>      
        {selectGrafic(select)}
     </div>
      
      </div>
      
    </Container>
  );
}