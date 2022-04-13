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


const Home = (bunny:bunnyInterface) => {

    return (
        <div className={'w-full h-full'}>
            <div className={'absolute top-[25vw] left-[16vw] w-[48vw] h-[69.3vw]'}>
                <BunnyGeneration bunny={bunny.bunny}></BunnyGeneration>
            </div>
            <div className={'w-[12vw] h-[12vw] left-[59vw] top-[37vw] absolute inline-block'}>
                <Image src={'/images/home_module/backpack.svg'} layout={'fill'}></Image>
            </div>
            <div className={'w-[28vw] top-[43vw] h-[1px] dashed-line absolute right-0'}></div>
            <div className={'w-[6vw] h-[6vw] right-[6vw] top-[56vw] absolute inline-block'}>
                <Image src={'/images/home_module/mail_icon.svg'} layout={'fill'}></Image>
            </div>
            <div className={'w-[6vw] h-[6vw] right-[6vw] top-[65vw] absolute inline-block'}>
                <Image src={'/images/home_module/faq_icon.svg'} layout={'fill'}></Image>
            </div>
            <div className={'absolute flex items-center top-[84vw] left-[58vw] w-[22vw] h-[9vw]'}>
                <p className={'inline-block font-josefin font-semibold w-[30%]'}>Lvl</p>
                <div className={'w-[8vw] h-[8vw] inline-flex bg-[#A8C500] rounded-full'}>
                    <p className={'w-full text-center font-josefin font-medium text-xl'}>{bunny.bunny.lvl}</p>
                </div>
                <div className={'ml-[2vw] w-[5vw] h-[5vw] inline-flex relative'}>
                    <Image src={'/images/home_module/plus_icon.svg'} layout={'fill'}></Image>
                </div>
            </div>
            <div className={'w-full items-center flex absolute top-[90vw] h-[10vw]'}>
                <div className={'w-[25%] h-[1px] dashed-line'}></div>
                <p className={'font-soyuz w-[35%] text-center font-medium text-xl'}>{bunny.bunny.name}</p>
                <div className={'w-[40%] h-[1px] dashed-line'}></div>
            </div>

            <div className={'w-[70%] absolute left-[15%] p-[1vw] inline-block h-[53vw] bottom-[2vw] '}>
                <p className={'text-lg leading-[110%] font-soyuz w-[35%] text-left font-medium'}>vitality</p>
                <div className={'w-full flex items-center h-[9vw]'}>
                    <div className={'w-[70%] items-center relative inline-flex h-[2vw]'}>
                        <StatbarPositive width={bunny.bunny.vitality*10+'%'} ></StatbarPositive>
                        <StatbarNegative width={100-(bunny.bunny.vitality*10)+'%'} ></StatbarNegative>
                        <StatIndicator className={'border-4 border-white w-[4.5vw] bg-[#FFB800] absolute rounded-full h-[4.5vw]'} margin={bunny.bunny.vitality*10-2+'%'}></StatIndicator>
                    </div>
                    <button className={'font-soyuz font-semibold text-[#000] vitality-bar-positive w-[30%] inline-block rounded-full h-[70%] mx-[5%]'}>feed</button>
                </div>
                <div className={'w-full h-[10vw] mt-[2vw] border-[1px] p-[5vw] border-white flex items-center rounded-full border-dashed'}>
                    <p className={'text-xl leading-[110%] inline-block font-soyuz w-[50%] text-left font-medium'}>crt</p>
                    <p className={'text-xl leading-[110%] inline-block font-josefin w-[50%] text-right font-bold'}>{bunny.bunny.crt}/12</p>
                </div>
                <div className={'w-full h-[10vw] mt-[2vw] border-[1px] p-[5vw] border-white flex items-center rounded-full border-dashed'}>
                    <p className={'text-xl leading-[110%] inline-block font-soyuz w-[50%] text-left font-medium'}>stamina</p>
                    <p className={'text-xl leading-[110%] inline-block font-josefin w-[50%] text-right font-bold'}>{bunny.bunny.stamina}/2</p>
                </div>
                <button className={'font-soyuz mt-[2vw] font-semibold text-[#000] green-gradient w-[30%] inline-block rounded-full h-[8vw] mx-[35%]'}>work</button>
            </div>

        </div>
    );
};

export default Home;