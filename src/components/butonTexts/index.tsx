import React from 'react';
import './styles.css'
import { Thema } from '../../../thema';

interface Props {
    buttonTexts:(string | null)[];
    getBayIndex: (index: number) => void; 
}

const ButtonList: React.FC<Props> = ({ buttonTexts,getBayIndex }) => {
    return (
        <div 
        style={{display:'flex', flex:1, justifyContent:'center',alignContent:'center',padding:10,marginTop:30}}>
            {buttonTexts.map((text, index) => (
                <div key={index} style={{ background: Thema.Colors.gray }}
                    className='custom-button'
                    onClick={()=>getBayIndex(index)}
                >
                    <button key={index}>{text}</button>
                </div>
            ))}
        </div>
    );
};

export default ButtonList;
