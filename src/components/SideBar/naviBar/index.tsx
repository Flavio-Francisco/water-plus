import React from "react";
import "./styles.css";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Image from "next/image";
import Logo from "../logo.jpg";



interface Iprops{
    classeButtom?: string | undefined;
    className?: string | undefined;
    toggleMenu:()=>void;
}


export default function NaviBar({className,toggleMenu,classeButtom}:Iprops) {
const name = "Flávio"

    return(
        <div className={className}>
            <button onClick={toggleMenu} className={classeButtom}  >
              <MenuOutlinedIcon fontSize="large" />
           </button>   
       
        <div className='cardUser'> 
                <Image
                className="imageNavbar"
                    priority={true}
                    src={Logo}
                    alt="Logo"
                   
                />
                    <p className="name" > Seja bem vindo {name}</p>
                  
        </div>
        
        </div>
    )
}