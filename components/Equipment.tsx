import React, {useState} from 'react';
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
import EquipPopUp from "./EquipPopUp";
import {equipment} from "./equipmentItemInterface";

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

    const ClosePop=()=>{
        setIsPopOpen(!isPopOpen);
    }

    if(isPopOpen==true){
        return (
            <div className={'w-full h-full'}>
                <EquipPopUp inventoryTab={currentInventoryItem} updateLeftHand={updateLeftHand} updateRightHand={updateRightHand} updateNeck={updateNeck} updateHat={updateHat} updateClothes={updateClothes} updateEars={updateEars} closeInventory={ClosePop} bunny={bunny}></EquipPopUp>
            </div>
        );
    }

    return (
        <div className={'w-full h-full'}>
            <div className={'w-full items-center flex absolute border-2 border-[#33FF00] bottom-[27vh] h-[40vh]'}>
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
            <div className={'w-full items-center flex absolute border-2 border-[#001AFF] bottom-[23vh] h-[4vh]'}>
                <p className={'font-soyuz w-full text-center font-medium text-xl'}>{bunny.name}</p>
            </div>
            <div className={'w-full items-center flex absolute border-2 border-[#FF0000] bottom-[2vh] h-[21vh]'}>

            </div>

            {/*<div className={'w-[70%] absolute left-[15%] p-[1vw] inline-block h-[53vw] bottom-[2vw] '}>*/}
            {/*    <div className={'w-full flex items-center h-[9vw]'}>*/}
            {/*        <div className={'w-[70%] items-center relative inline-flex h-[2vw]'}>*/}
            {/*            <StatbarPositive width={bunny.vitality*10+'%'} ></StatbarPositive>*/}
            {/*            <StatbarNegative width={100-(bunny.vitality*10)+'%'} ></StatbarNegative>*/}
            {/*            <StatIndicator className={'border-4 border-white w-[4.5vw] bg-[#FFB800] absolute rounded-full h-[4.5vw]'} margin={bunny.vitality*10-2+'%'}></StatIndicator>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
};

export default Equipment;