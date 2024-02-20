import React, { useState, useEffect } from 'react';

interface Iprops{
    date:string
}

const Counter = ({date}:Iprops) => {
    const [diasRestantes, setDiasRestantes] = useState(90);
    const [dataInicial, setDataInicial] = useState('');

   useEffect(() => {
    if (dataInicial) {
      const interval = setInterval(() => {
        setDiasRestantes(calcularDiasRestantes());
      }, 86400000); // 86400000 milissegundos = 1 dia

      return () => clearInterval(interval);
    }
    setDataInicial(date)
  }, [dataInicial]);
    function calcularDiasRestantes() {
        const hoje = new Date();
        const dataInicialDate = new Date(dataInicial);
        const diferencaTempo = dataInicialDate.getTime() - hoje.getTime();
        const diferencaDias = Math.ceil(diferencaTempo / (1000 * 3600 * 24)); // Convertendo milissegundos em dias
        return diferencaDias + 90; // Adicionando 90 dias
      }
    let corIndicador = '';
    if (diasRestantes <= 30) {
        corIndicador = 'red';
    } else if (diasRestantes <= 60) {
        corIndicador = 'yellow';
    } else {
        corIndicador = 'green';
    }
    const [cor, setCor] = useState<string>(corIndicador); // Inicialmente definida como cor escura

    useEffect(() => {
      const interval = setInterval(() => {
        // Alterna entre as cores escura e clara
        setCor((corAtual) => (corAtual === '#cccccc ' ? corIndicador : '#cccccc '));
      }, 2000);
  
      // Limpa o intervalo quando o componente é desmontado
      return () => clearInterval(interval);
    }, []); 

    return (
        <div style={{display:'flex', flexDirection:'row',justifyContent:'center',alignItems:'center',  padding: '10px'}}>
            <p style={{textAlign:'center',padding: '10px', marginTop:10}}>PróximaTroca do Diasafe será realizada em   </p>
            <div style={{width:40, backgroundColor: cor, padding: '10px', borderRadius: '25px', color: 'white' ,textAlign:'center',  transition: 'background-color 1s ease-in-out',}}>
                {diasRestantes} 
            </div>
            <p style={{textAlign:'center',padding: '10px', marginTop:10}}>dias.</p>
        </div>


    );
};

export default Counter;
