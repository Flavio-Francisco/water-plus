import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { calcularPorcentagem, dataProducao } from '@/utils/models/Data';


const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Pizza = () => {
    const percentage = calcularPorcentagem(dataProducao?.data);
    const permeado = Number( percentage.permeated)
    const rejeito = Number( percentage.reject)

    console.log(percentage )
    const options = {
        animationEnabled: true,
        title: {
            text: "Taxa de produção",
            fontFamily:'sans-serif'
        },
        subtitles: [{
            text: "meta acima de 70%",
            verticalAlign: "center",
            fontSize: 18,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
               
                { name: "Permeado", y: permeado },
                { name: "rejeito", y: rejeito },
               
            ]
        }]
    };

    return (
        <div style={{width:'40%', }}>
            <CanvasJSChart options={options} />
        </div>
    );
};

export default Pizza;
