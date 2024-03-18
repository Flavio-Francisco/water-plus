// Importe as bibliotecas necessárias
import React, { useState } from 'react';
import Batery from '../batery';
import Logo from '@/app/logo.jpg';
import { dataAbrandador, dataZeolica, dataCarvao } from '@/utils/models/Data';
import GraficLineAnimed from '../graficLineAnimed';
import Image from 'next/image';

// Defina o tipo para as props do componente GraficLineAnimed
interface Props {
  subtitle: string | null | undefined;
  title: string | null | undefined;
  data?: object | unknown[] | undefined;
}

// Componente HomeBody
const HomeBody: React.FC = () => {
  const clear: Props = { subtitle: '', title: '', data: [] };
  const [selectData, setSelectData] = useState<Props>(clear);

  // Função para selecionar os dados do gráfico
  const dataSelect = (grafic: string) => {
    switch (grafic) {
      case "abrandador":
        setSelectData(dataAbrandador);
        break;
      case "zeolita":
        setSelectData(dataZeolica);
        break;
      case "carvao":
        setSelectData(dataCarvao);
        break;
      default:
        return <Image src={Logo} alt={'logo'} />;
    }
  }

  // Manipulador de clique para os gráficos
  const handleGraficClick = (grafic: string) => {
    dataSelect(grafic);
    console.log(grafic);
  }

  return (
    <div className=" mx-auto px-4 mt-5" >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className=" bg-white rounded-lg p-3 shadow-md md:top-10 md:right-20">
        <div className="flex flex-row md:flex-row justify-center gap-4">
            <div className="flex flex-col items-center" onClick={() => handleGraficClick("zeolita")}>
              <p className="text-center">Zeolita</p>
              <Batery chargeLevel={100} />
            </div>
            <div className="flex flex-col items-center" onClick={() => handleGraficClick("abrandador")}>
              <p className="text-center">Abrandador</p>
              <Batery chargeLevel={70} />
            </div>
            <div className="flex flex-col items-center" onClick={() => handleGraficClick("carvao")}>
              <p className="text-center">Carvão</p>
              <Batery chargeLevel={60} />
            </div>
          </div>
        </div>

        <div className=" bg-white rounded-lg  shadow-md w-100">
          {selectData.title === '' ?
            <div className="flex justify-center items-center">
              <Image priority={true} src={Logo} alt={'logo'} />
            </div>
            :
            <GraficLineAnimed subtitle={selectData.subtitle} title={selectData.title} data={selectData.data} />
          }
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
