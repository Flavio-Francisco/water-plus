import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { calcularPorcentagem, dataProducao } from '@/utils/models/Data';


const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Pizza = () => {
    const percentage = calcularPorcentagem(dataProducao?.data);
    const permeado = Number( percentage.permeated)
    const rejeito = Number( percentage.reject)
    const options = {
        animationEnabled: true,
        title: {
            text: "Customer Satisfaction"
        },
        subtitles: [{
            text: "71% Positive",
            verticalAlign: "center",
            fontSize: 24,
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
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
};

export default Pizza;
