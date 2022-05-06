import React, {useEffect, useState} from 'react';
import BunnyGeneration from "./BunnyGeneration";
import Image from "next/image";
import styled from "styled-components";

const StatbarPositive = styled.div<{width: string,color:string}>`
  width: ${props => props.width};
  display: inline-block;
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
  height: 100%;
  background: ${props=> props.color}
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
import EquipPopUp from "./EquipPopUp";
import {equipment} from "./equipmentItemInterface";
import {number} from "prop-types";

interface homeModuleInterface extends bunnyInterface{
    updateLeftHand: (item: equipment) => any,
    updateRightHand: (item: equipment) => any,
    updateNeck: (item: equipment) => any,
    updateHat: (item: equipment) => any,
    updateClothes: (item: equipment) => any,
    updateEars: (item: equipment) => any,
}


const Equipment = ({bunny,updateClothes,updateEars,updateHat,updateLeftHand,updateNeck,updateRightHand}:homeModuleInterface) => {

    const [currentInventoryItem,setCurrentInventoryItem]=useState('hat');
    const [isPopOpen,setIsPopOpen]=useState(false)

    const [totalStr,setTotalStr]=useState(0);
    const [totalDex,setTotalDex]=useState(0);
    const [totalVit,setTotalVit]=useState(0);
    const [totalInt,setTotalInt]=useState(0);
    const [totalKrm,setTotalKrm]=useState(0);



    const initTotalStr=()=>{
        const allStrDemo=[bunny.equipment.hat?.str,bunny.equipment.clothes?.str,bunny.equipment.neck?.str,bunny.equipment.hears?.str,bunny.equipment.leftHand?.str,bunny.equipment.rightHand?.str];
        const allStr:number[]=[];
        let total=0+bunny.stats.str;
        allStrDemo.map(item=>{
            if(item!=undefined){
                allStr.push(item);
            }
        });
        allStr.map(item=>{
            total+=item;
        })
        setTotalStr(total);
        bunny.stats.str=total;
    }

    useEffect(()=>{
        initTotalStats();
    })

    const initTotalDex=()=>{
        const allDexDemo=[bunny.equipment.hat?.dex,bunny.equipment.clothes?.dex,bunny.equipment.neck?.dex,bunny.equipment.hears?.dex,bunny.equipment.leftHand?.dex,bunny.equipment.rightHand?.dex];
        const allDex:number[]=[];
        let total=0+bunny.stats.dex;
        allDexDemo.map(item=>{
            if(item!=undefined){
                allDex.push(item);
            }
        });
        allDex.map(item=>{
            total+=item;
        })
        setTotalDex(total);
        bunny.stats.dex=total;
    }

    const initTotalVit=()=>{
        const allVitDemo=[bunny.equipment.hat?.vit,bunny.equipment.clothes?.vit,bunny.equipment.neck?.vit,bunny.equipment.hears?.vit,bunny.equipment.leftHand?.vit,bunny.equipment.rightHand?.vit];
        const allVit:number[]=[];
        let total=0+bunny.stats.vit;
        allVitDemo.map(item=>{
            if(item!=undefined){
                allVit.push(item);
            }
        });
        allVit.map(item=>{
            total+=item;
        })
        setTotalVit(total);
        bunny.stats.vit=total;
    }

    const initTotalInt=()=>{
        const allIntDemo=[bunny.equipment.hat?.int,bunny.equipment.clothes?.int,bunny.equipment.neck?.int,bunny.equipment.hears?.int,bunny.equipment.leftHand?.int,bunny.equipment.rightHand?.int];
        const allInt:number[]=[];
        let total=0+bunny.stats.int;
        allIntDemo.map(item=>{
            if(item!=undefined){
                allInt.push(item);
            }
        });
        allInt.map(item=>{
            total+=item;
        })
        setTotalInt(total);
        bunny.stats.int=total;
    }


    const initTotalKrm=()=>{
        const allKrmDemo=[bunny.equipment.hat?.krm,bunny.equipment.clothes?.krm,bunny.equipment.neck?.krm,bunny.equipment.hears?.krm,bunny.equipment.leftHand?.krm,bunny.equipment.rightHand?.krm];
        const allKrm:number[]=[];
        let total=0+bunny.stats.krm;
        allKrmDemo.map(item=>{
            if(item!=undefined){
                allKrm.push(item);
            }
        });
        allKrm.map(item=>{
            total+=item;
        })
        setTotalKrm(total);
        bunny.stats.krm=total;
    }


    const initTotalStats=()=>{
        initTotalDex();
        initTotalKrm();
        initTotalInt();
        initTotalStr();
        initTotalVit();
    }


    const ClosePop=()=>{
        setIsPopOpen(!isPopOpen);
    }

    if(isPopOpen==true){
        return (
            <div className={'w-full h-full'}>
                <EquipPopUp updateStats={initTotalStats} inventoryTab={currentInventoryItem} updateLeftHand={updateLeftHand} updateRightHand={updateRightHand} updateNeck={updateNeck} updateHat={updateHat} updateClothes={updateClothes} updateEars={updateEars} closeInventory={ClosePop} bunny={bunny}></EquipPopUp>
            </div>
        );
    }

    return (
        <div className={'w-full h-full'}>
            <div className={'w-full items-center flex absolute bottom-[34vh] h-[40vh]'}>
                <div className={'absolute top-[4vw] left-[26vw] w-[48vw] h-[69.3vw]'}>
                    <BunnyGeneration bunny={bunny}></BunnyGeneration>
                </div>
                <div className={'w-[36vw] h-[9.4vh] top-[4vh]  absolute left-0'}>
                    {bunny.equipment.hat==undefined?
                        <div className={'rotate-180 left-[-50%] relative h-full'} onClick={()=>{setCurrentInventoryItem('hat');ClosePop();}}>
                            <div className={'w-full absolute h-full'}>
                                <Image src={'/images/equipment_module/equip_tab.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[5vh] h-[5vh] rotate-180 left-0 left-[4vw] top-[4vw] absolute'}>
                                <Image src={'/images/equipment_module/hat.svg'} layout={'fill'}></Image>
                            </div>
                        </div>
                        :
                        <div className={'rotate-180 left-[-20%] relative w-full h-full'} onClick={()=>{setCurrentInventoryItem('hat');ClosePop();}}>
                            <div className={'w-full h-full'}>
                                <Image src={'/images/equipment_module/equip_tab_active.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[5vh] h-[5vh] rotate-180 left-0 left-[4vw] top-[4vw] absolute'}>
                                <Image src={'/images/bunny_generation/Hats/'+bunny.equipment.hat.image+'.png'} layout={'fill'}></Image>
                            </div>
                        </div>
                    }
                </div>
                <div className={'w-[36vw] h-[9.4vh] top-[14.8vh]  absolute left-0'}>
                    {bunny.equipment.clothes==undefined?
                        <div className={'rotate-180 left-[-50%] relative h-full'} onClick={()=>{setCurrentInventoryItem('clothes');ClosePop();}}>
                            <div className={'w-full h-full'}>
                                <Image src={'/images/equipment_module/equip_tab.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[5vh] h-[5vh] rotate-180 left-0 left-[4vw] top-[4vw] absolute'}>
                                <Image src={'/images/equipment_module/clothes.svg'} layout={'fill'}></Image>
                            </div>
                        </div>
                        :
                        <div className={'rotate-180 left-[-20%] relative w-full h-full'} onClick={()=>{setCurrentInventoryItem('clothes');ClosePop();}}>
                            <div className={'w-full h-full'}>
                                <Image src={'/images/equipment_module/equip_tab_active.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[5vh] h-[5vh] rotate-180 left-0 left-[4vw] top-[4vw] absolute'}>
                                <Image src={'/images/bunny_generation/Clothes/'+bunny.equipment.clothes.image+'.png'} layout={'fill'}></Image>
                            </div>
                        </div>
                    }
                </div>
                <div className={'w-[36vw] h-[9.4vh] top-[25.5vh]  absolute left-0'}>
                    {bunny.equipment.leftHand==undefined?
                        <div className={'rotate-180 left-[-50%] relative h-full'} onClick={()=>{setCurrentInventoryItem('left hand');ClosePop();}}>
                            <div className={'w-full h-full'}>
                                <Image src={'/images/equipment_module/equip_tab.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[5vh] h-[5vh] rotate-180 left-0 left-[4vw] top-[4vw] absolute'}>
                                <Image src={'/images/equipment_module/left_hand.svg'} layout={'fill'}></Image>
                            </div>
                        </div>
                        :
                        <div className={'rotate-180 left-[-20%] relative w-full h-full'} onClick={()=>{setCurrentInventoryItem('left hand');ClosePop();}}>
                            <div className={'w-full h-full'}>
                                <Image src={'/images/equipment_module/equip_tab_active.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[5vh] h-[5vh] rotate-180 left-0 left-[4vw] top-[4vw] absolute'}>
                                <Image src={'/images/bunny_generation/Left hand/'+bunny.equipment.leftHand.image+'.png'} layout={'fill'}></Image>
                            </div>
                        </div>
                    }
                </div>
                <div className={'w-[36vw] h-[9.4vh] top-[4vh]  absolute right-0'}>
                    {bunny.equipment.hears==undefined?
                        <div className={'w-full right-[-50%] relative h-full'} onClick={()=>{setCurrentInventoryItem('ears');ClosePop();}}>
                            <div className={'w-full h-full'}>
                                <Image src={'/images/equipment_module/equip_tab.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[5vh] h-[5vh] left-0 left-[4vw] top-[4vw] absolute'}>
                                <Image src={'/images/equipment_module/ears.svg'} layout={'fill'}></Image>
                            </div>
                        </div>
                        :
                        <div className={'w-full right-[-20%] relative h-full'}>
                            <div className={'w-full h-full'} onClick={()=>{setCurrentInventoryItem('ears');ClosePop();}}>
                                <Image src={'/images/equipment_module/equip_tab_active.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[5vh] h-[5vh] left-0 left-[4vw] top-[4vw] absolute'}>
                                <Image src={'/images/bunny_generation/Ears/'+bunny.equipment.hears.image+'.png'} layout={'fill'}></Image>
                            </div>
                        </div>
                    }
                </div>
                <div className={'w-[36vw] h-[9.4vh] top-[14.8vh]  absolute right-0'}>
                    {bunny.equipment.neck==undefined?
                        <div className={'w-full right-[-50%] relative h-full'} onClick={()=>{setCurrentInventoryItem('neck');ClosePop();}}>
                            <div className={'w-full h-full'}>
                                <Image src={'/images/equipment_module/equip_tab.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[5vh] h-[5vh] left-0 left-[4vw] top-[4vw] absolute'}>
                                <Image src={'/images/equipment_module/neck.svg'} layout={'fill'}></Image>
                            </div>
                        </div>
                        :
                        <div className={'w-full right-[-20%] relative h-full'} onClick={()=>{setCurrentInventoryItem('neck');ClosePop();}}>
                            <div className={'w-full h-full'}>
                                <Image src={'/images/equipment_module/equip_tab_active.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[5vh] h-[5vh] left-0 left-[4vw] top-[4vw] absolute'}>
                                <Image src={'/images/bunny_generation/Necklace/'+bunny.equipment.neck.image+'.png'} layout={'fill'}></Image>
                            </div>
                        </div>
                    }
                </div>
                <div className={'w-[36vw] h-[9.4vh] top-[25.5vh]  absolute right-0'}>
                    {bunny.equipment.rightHand==undefined?
                        <div className={'w-full right-[-50%] relative h-full'} onClick={()=>{setCurrentInventoryItem('right hand');ClosePop();}}>
                            <div className={'w-full h-full'}>
                                <Image src={'/images/equipment_module/equip_tab.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[5vh] h-[5vh] left-0 left-[4vw] top-[4vw] absolute'}>
                                <Image src={'/images/equipment_module/right_hand.svg'} layout={'fill'}></Image>
                            </div>
                        </div>
                        :
                        <div className={'w-full right-[-20%] relative  h-full'} onClick={()=>{setCurrentInventoryItem('right hand');ClosePop();}}>
                            <div className={'w-full h-full'}>
                                <Image src={'/images/equipment_module/equip_tab_active.svg'} layout={'fill'}></Image>
                            </div>
                            <div className={'w-[5vh] h-[5vh] left-0 left-[4vw] top-[4vw] absolute'}>
                                <Image src={'/images/bunny_generation/Right hand/'+bunny.equipment.rightHand.image+'.png'} layout={'fill'}></Image>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className={'w-full items-center flex absolute bottom-[30vh] h-[4vh]'}>
                <p className={'font-soyuz w-full text-center font-medium text-xl'}>{bunny.name}</p>
            </div>
            <div className={'w-full flex-wrap items-center flex absolute bottom-[2vh] h-[28vh]'}>
                <div className={'w-full block flex items-center px-[8vw] h-[9vw]'}>
                    <p className={'w-[20%] font-josefin uppercase font-medium text-xl]'}>STR</p>
                    <div className={'w-[50%] items-center relative inline-flex h-[2vw]'}>
                        <StatbarPositive color={'#AEC700'} width={(bunny.stats.str)*2.5+'%'} ></StatbarPositive>
                        <StatbarNegative width={100-(bunny.stats.str*2.5)+'%'} ></StatbarNegative>
                        <StatIndicator className={'border-4 border-white w-[4.5vw] bg-[#AEC700] absolute rounded-full h-[4.5vw]'} margin={bunny.stats.str*2.5-2+'%'}></StatIndicator>
                    </div>
                    <button className={'font-soyuz font-semibold text-[#000] green-gradient w-[30%] inline-block rounded-[1vh] h-[70%] mx-[5%]'}>show more</button>
                </div>
                <div className={'w-full block flex items-center px-[8vw] h-[9vw]'}>
                    <p className={'w-[20%] font-josefin uppercase font-medium text-xl]'}>Dex</p>
                    <div className={'w-[50%] items-center relative inline-flex h-[2vw]'}>
                        <StatbarPositive color={'#FFB800'} width={(bunny.stats.dex)*2.5+'%'} ></StatbarPositive>
                        <StatbarNegative width={100-(bunny.stats.dex*2.5)+'%'} ></StatbarNegative>
                        <StatIndicator className={'border-4 border-white w-[4.5vw] bg-[#FFB800] absolute rounded-full h-[4.5vw]'} margin={bunny.stats.dex*2.5-2+'%'}></StatIndicator>
                    </div>
                    <button className={'font-soyuz font-semibold text-[#000] green-gradient w-[30%] inline-block rounded-[1vh] h-[70%] mx-[5%]'}>show more</button>
                </div>
                <div className={'w-full block flex items-center px-[8vw] h-[9vw]'}>
                    <p className={'w-[20%] font-josefin uppercase font-medium text-xl]'}>Vit</p>
                    <div className={'w-[50%] items-center relative inline-flex h-[2vw]'}>
                        <StatbarPositive color={'#EC43FF'} width={(bunny.stats.vit)*2.5+'%'} ></StatbarPositive>
                        <StatbarNegative width={100-(bunny.stats.vit*2.5)+'%'} ></StatbarNegative>
                        <StatIndicator className={'border-4 border-white w-[4.5vw] bg-[#EC43FF] absolute rounded-full h-[4.5vw]'} margin={bunny.stats.vit*2.5-2+'%'}></StatIndicator>
                    </div>
                    <button className={'font-soyuz font-semibold text-[#000] green-gradient w-[30%] inline-block rounded-[1vh] h-[70%] mx-[5%]'}>show more</button>
                </div>
                <div className={'w-full block flex items-center px-[8vw] h-[9vw]'}>
                    <p className={'w-[20%] font-josefin uppercase font-medium text-xl]'}>Int</p>
                    <div className={'w-[50%] items-center relative inline-flex h-[2vw]'}>
                        <StatbarPositive color={'#F97A55'} width={(bunny.stats.int)*2.5+'%'} ></StatbarPositive>
                        <StatbarNegative width={100-(bunny.stats.int*2.5)+'%'} ></StatbarNegative>
                        <StatIndicator className={'border-4 border-white w-[4.5vw] bg-[#F97A55] absolute rounded-full h-[4.5vw]'} margin={bunny.stats.int*2.5-2+'%'}></StatIndicator>
                    </div>
                    <button className={'font-soyuz font-semibold text-[#000] green-gradient w-[30%] inline-block rounded-[1vh] h-[70%] mx-[5%]'}>show more</button>
                </div>
                <div className={'w-full block flex items-center px-[8vw] h-[9vw]'}>
                    <p className={'w-[20%] font-josefin uppercase font-medium text-xl]'}>Krm</p>
                    <div className={'w-[50%] items-center relative inline-flex h-[2vw]'}>
                        <StatbarPositive color={'#595AD0'} width={(bunny.stats.krm)*2.5+'%'} ></StatbarPositive>
                        <StatbarNegative width={100-(bunny.stats.krm*2.5)+'%'} ></StatbarNegative>
                        <StatIndicator className={'border-4 border-white w-[4.5vw] bg-[#595AD0] absolute rounded-full h-[4.5vw]'} margin={bunny.stats.krm*2.5-2+'%'}></StatIndicator>
                    </div>
                    <button className={'font-soyuz font-semibold text-[#000] green-gradient w-[30%] inline-block rounded-[1vh] h-[70%] mx-[5%]'}>show more</button>
                </div>
            </div>

            {/*<div className={'w-[70%] absolute left-[15%] p-[1vw] inline-block h-[53vw] bottom-[2vw] '}>*/}
            {/*    <div className={'w-full flex items-center h-[9vw]'}>*/}
            {/*        <div className={'w-[70%] items-center relative inline-flex h-[2vw]'}>*/}
            {/*            <StatbarPositive width={bunny.vitality*2.5+'%'} ></StatbarPositive>*/}
            {/*            <StatbarNegative width={100-(bunny.vitality*2.5)+'%'} ></StatbarNegative>*/}
            {/*            <StatIndicator className={'border-4 border-white w-[4.5vw] bg-[#FFB800] absolute rounded-full h-[4.5vw]'} margin={bunny.vitality*2.5-2+'%'}></StatIndicator>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
};

export default Equipment;