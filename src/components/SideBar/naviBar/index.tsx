import React from "react";
import "./styles.css";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Image from "next/image";
import Logo from "../logo.jpg";
import FilterReplacement from "@/components/filterReplacement";
import AcidReplacement from "@/components/acidReplacement";
import Desinfection from "@/components/disinfection";


interface Iprops{
    classeButtom?: string | undefined;
    className?: string | undefined;
    toggleMenu:()=>void;
}


export default function NaviBar({className,toggleMenu,classeButtom}:Iprops) {
    return(
        <div className={className}>
            <button onClick={toggleMenu} className={classeButtom}  >
              <MenuOutlinedIcon fontSize="large" />
           </button>   
           <div className="form">
                <FilterReplacement />
                <AcidReplacement />
                <Desinfection />
            </div>
        <div className='cardUser'> 
                <Image
                className="image"
                    priority={true}
                    src={Logo}
                    alt="Logo"
                   
                />
                    <p className="name" > Seja bem vindo   </p>
                    <p className="name" > Flavio </p>
        </div>
        
        </div>
    )
}