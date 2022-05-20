import React from 'react';
import BunnyGeneration from "./BunnyGeneration";
import Image from "next/image";
import styled from "styled-components";

const StatbarPositive = styled.div<{width: string}>`
  width: ${props => props.width};
  display: inline-block;
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
  height: 100%;
  background: linear-gradient(180deg, rgba(236, 255, 128, 0) 0%, rgba(236, 255, 128, 0.78) 100%), #FFB800;
`

const StatbarNegative = styled.div<{width: string}>`
  width: ${props => props.width};
  display: inline-block;
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
  height: 100%;
  background: #404040;
  box-shadow: inset 0px 1.63985px 1.63985px rgba(0, 0, 0, 0.66);
`

const StatIndicator = styled.div<{margin: string}>`
  left: ${props => props.margin};
`

import {bunnyInterface} from "./bunnyInterface";

interface homeModuleInterface extends bunnyInterface{
    openInventory: ()=>any
}


const Home = (bunny:homeModuleInterface) => {

    return (
        <div className={'w-full h-full overflow-y-hidden sm:relative'}>
            <div className={'absolute top-[5vh] left-[16vw] w-[48vw] h-[69.3vw] sm:w-[20vw] sm:top-[0vw] sm:h-[29vw] sm:left-[2vw]'}>
                <BunnyGeneration bunny={bunny.bunny}></BunnyGeneration>
            </div>
            <div className={'w-[12vw] h-[12vw] left-[59vw] top-[37vw] absolute inline-block sm:w-[3.5vw] cursor-pointer sm:bottom-auto sm:top-[9.5vw]  sm:h-[3.5vw] sm:right-[1.3vw] sm:left-auto'} onClick={()=>{bunny.openInventory()}}>
                <Image src={'/images/home_module/backpack.svg'} layout={'fill'}></Image>
            </div>
            <div className={'w-[28vw] top-[43vw] h-[1px] dashed-line absolute right-0 sm:hidden'}></div>
            <div className={'w-[6vw] h-[6vw] right-[6vw] top-[56vw] absolute inline-block sm:w-[2.5vw] sm:h-[2.5vw] sm:right-[2vw] sm:left-auto sm:bottom-auto sm:top-[4vw] '}>
                <Image src={'/images/home_module/mail_icon.svg'} layout={'fill'}></Image>
            </div>
            <div className={'w-[6vw] h-[6vw] right-[6vw] top-[65vw] absolute inline-block sm:w-[2.5vw] sm:h-[2.5vw] sm:right-[2vw] sm:left-auto sm:bottom-auto sm:top-[16vw] '}>
                <Image src={'/images/home_module/faq_icon.svg'} layout={'fill'}></Image>
            </div>
            <div className={'absolute flex items-center top-[35vh] left-[58vw] w-[22vw] h-[9vw] sm:w-[16vw] sm:h-[6vw] sm:left-auto sm:right-[0vw] sm:top-[20vw]'}>
                <p className={'inline-block font-josefin font-semibold w-[30%] sm:text-[2vw] sm:w-[20%]'}>Lvl</p>
                <div className={'justify-center flex-col w-[8vw] h-[8vw] inline-flex bg-[#A8C500] rounded-full sm:h-[3vw] sm:w-[3vw]'}>
                    <p className={'w-full text-center font-josefin font-medium text-xl sm:text-[2.5vw]'}>{bunny.bunny.lvl}</p>
                </div>
                <div className={'ml-[2vw] w-[5vw] h-[5vw] inline-flex relative sm:w-[2.3vw] sm:h-[2.3vw]'}>
                    <Image src={'/images/home_module/plus_icon.svg'} layout={'fill'}></Image>
                </div>
            </div>
            <div className={'w-full items-center flex absolute top-[42vh] h-[10vw] sm:top-[27vw] sm:h-[4vw] sm:w-full sm:inline-block sm:left-[0vw]'}>
                <div className={'w-[25%] h-[1px] dashed-line sm:hidden'}></div>
                <p className={'font-soyuz w-[35%] text-center font-medium text-xl sm:text-[2.5vw] sm:w-[100%] sm:text-center'}>{bunny.bunny.name}</p>
                <div className={'w-[40%] h-[1px] dashed-line sm:hidden'}></div>
            </div>

            <div className={'w-[70%] absolute left-[15%] p-[1vw] inline-block h-[53vw] bottom-[2vw] sm:w-[90%] sm:left-[5%] sm:top-auto sm:bottom-[3vw] sm:h-auto'}>
                <p className={'text-lg leading-[110%] font-soyuz w-[35%] text-left font-medium sm:text-[1.2vw]'}>vitality</p>
                <div className={'w-full flex items-center h-[9vw] sm:h-[2vw]'}>
                    <div className={'w-[70%] items-center relative inline-flex h-[2vw] sm:h-[0.5vw]'}>
                        <StatbarPositive width={bunny.bunny.vitality*10+'%'} ></StatbarPositive>
                        <StatbarNegative width={100-(bunny.bunny.vitality*10)+'%'} ></StatbarNegative>
                        <StatIndicator className={'border-4 border-white w-[4.5vw] bg-[#FFB800] absolute rounded-full h-[4.5vw] sm:h-[1vw] sm:w-[1vw]'} margin={bunny.bunny.vitality*10-2+'%'}></StatIndicator>
                    </div>
                    <button className={'font-soyuz font-semibold text-[#000] vitality-bar-positive w-[30%] inline-block rounded-full h-[70%] mx-[5%] sm:text-[1.0vw]'}>feed</button>
                </div>
                <div className={'w-full h-[10vw] mt-[2vw] border-[1px] p-[5vw] border-white flex items-center rounded-full border-dashed sm:h-[2vw] sm:p-[0.7vw] sm:mt-0'}>
                    <p className={'text-xl leading-[110%] inline-block font-soyuz w-[50%] text-left font-medium'}>crt</p>
                    <p className={'text-xl leading-[110%] inline-block font-josefin w-[50%] text-right font-bold'}>{bunny.bunny.crt}/12</p>
                </div>
                <div className={'w-full h-[10vw] mt-[2vw] border-[1px] p-[5vw] border-white flex items-center rounded-full border-dashed sm:h-[2vw] sm:p-[0.7vw] sm:mt-[0.5vw]'}>
                    <p className={'text-xl leading-[110%] inline-block font-soyuz w-[50%] text-left font-medium'}>stamina</p>
                    <p className={'text-xl leading-[110%] inline-block font-josefin w-[50%] text-right font-bold'}>{bunny.bunny.stats.krm}/2</p>
                </div>
                <button className={'font-soyuz mt-[2vw] font-semibold text-[#000] green-gradient w-[30%] inline-block rounded-full h-[8vw] mx-[35%] sm:w-[100%] sm:h-[2.3vw] sm:mt-[1vw] sm:mx-0 sm:text-[1.5vw]'}>work</button>
            </div>

        </div>
    );
};

export default Home;