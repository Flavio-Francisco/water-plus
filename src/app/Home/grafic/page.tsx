"use client"
import ButtonList from '@/components/butonTexts';
import GraficFilter, { Props } from '@/components/grafic';
import Logo from '@/app/logo.jpg'
import Image from 'next/image';
import { Datafull, getItemByIndex, getByTitle } from '@/utils/models/Data';
import React, { useState, useEffect } from 'react';





const Grafic = () => {

    const [select, setSelect] = useState(0);
    const [arryData, setArryData] = useState<Props | null>();
    const [selectData, setSelectData] = useState<string | null>('')

    const ButtonText = Datafull.map(i => i.title)


    useEffect(() => {
        const arry = getItemByIndex(select, Datafull)
        setSelectData(getByTitle(arryData?.data))
        setArryData(arry)
        console.log(arryData?.data)
    }, [ButtonText])

    return (
        <div>

            <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                <h1>Graficos do Pré-Tratamento</h1>
            </div>
            <ButtonList buttonTexts={ButtonText} getBayIndex={(index) => {
                setSelect(index)
                console.log(selectData)
                console.log(arryData?.data)

            }
            }
            />
            {select === 10 ?
                <>
                    <hr />
                    <GraficFilter title={selectData} data={arryData?.data} />
                    <hr />
                </>
                :
                <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        src={Logo}
                        alt='Logo'
                        width={300}
                        height={300} />
                </div>
            }
        </div>


    );
}


export default Grafic;