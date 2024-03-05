"use client"
import React, { useState } from 'react';
import "./styles.css";
import { Container } from 'react-bootstrap';
import { Thema } from '../../../thema';
import Batery from '../batery';
import Logo from '@/app/logo.jpg'
import { dataAbrandador, dataZeolica,dataCarvao } from '@/utils/models/Data';
import GraficLineAnimed from '../graficLineAnimed';
import { Props } from '../grafic';
import Image from 'next/image';


interface Iprops {
  nameUser: string;
}


export default function HomeBody(props: Iprops) {
const clear:Props = {subtitle:'',title:'',data:[]}


 const [selectData,setSelectData]=useState<Props>(clear)
 
console.log(clear);


  const dataSelect = (grafic:string)=>{
    
    switch(grafic) {
      case "abrandador":
      setSelectData(dataAbrandador);
      break;
      case"zeolita":
      setSelectData(dataZeolica);
      break;
      
      case"carvao":
      setSelectData(dataCarvao);
      break;
      
      default:
      return  <Image src={Logo } alt={'logo'} />
    }
  }

  const handleGraficClick = (grafic: string) => {
  
    dataSelect(grafic)
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
     {selectData.title === ''?
           <div style={{display:'flex',justifyContent:'center',alignItems:'baseline'}}>
              <Image src={Logo } alt={'logo'} />
           </div>
            :
            <div >
                <GraficLineAnimed subtitle={selectData.subtitle} title={selectData.title} data={selectData.data} />
           </div>
       }
    
     </div>
      
      </div>
      
    </Container>
  );
}