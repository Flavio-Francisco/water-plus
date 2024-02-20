import React from 'react';
import"./styles.css"

interface BatteryLoadingProps {
    chargeLevel: number; // Nível de carga da bateria (0 a 100)
  }

export default function Batery({chargeLevel}:BatteryLoadingProps){

return(
    <div className="battery-loading">
    
    <div className="battery-indicator" style={{ height: `${chargeLevel}%` }}></div>
  </div>
  
)
}