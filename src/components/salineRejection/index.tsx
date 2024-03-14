
import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';



const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SalineRejection = () => {
   
    const salineRejection = 97;
   const  soluble = 100 - salineRejection;

    const options = {
        animationEnabled: true,
        title: {
            text: "Taxa de rejeição salina",
            fontFamily:'sans-serif'
        },
        
        subtitles: [{
            text: "meta acima de 70%",
            verticalAlign: "center",
            fontSize: 20,
       
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
               
                { name: "Permeado", y:   salineRejection },
                { name: "solúveis", y:   soluble },
            
            ]
        }]
    };

    return (
        <div className="w-5/5 mx-10">
        <CanvasJSChart options={options} />
      </div>
    );
};

export default SalineRejection;
