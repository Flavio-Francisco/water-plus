import React from "react";

interface Iprops{
    className?: string | undefined;
    toggleMenu:()=>void;
}


export default function name({className,toggleMenu}:Iprops) {
    return(
        <div className={className}>
              <button onClick={toggleMenu}>
        
       
      </button>   
        </div>
    )
}