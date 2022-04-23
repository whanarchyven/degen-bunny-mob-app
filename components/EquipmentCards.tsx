import React from 'react';

import {bunnyInterface} from "./bunnyInterface";
import {equipment} from "./equipmentItemInterface";
import Image from "next/image";


interface inventoryCards extends  bunnyInterface{
    currentInventoryTab:string,
    updateLeftHand: (item: equipment) => any,
    updateRightHand: (item: equipment) => any,
    updateNeck: (item: equipment) => any,
    updateHat: (item: equipment) => any,
    updateClothes: (item: equipment) => any,
    updateEars: (item: equipment) => any,
    closeInventory:()=>any,
    updateStats:()=>any,
}

const EquipmentCards = ({currentInventoryTab, bunny, closeInventory, updateEars, updateHat, updateLeftHand, updateRightHand, updateNeck, updateClothes, updateStats}:inventoryCards) => {


    if(currentInventoryTab=='clothes'){
        return (
            <div className={'w-full h-full overflow-y-scroll overflow-x-hidden p-[2vw] flex justify-around flex-wrap'}>
                {bunny.inventory.map(item=> {
                    if(item.type=='clothes'){
                        return(
                          <div className={'w-[28%] mt-[4vw] relative h-[15vh] inventory-card-bg rounded-[2vw]'}  key={item.id} onClick={()=>{updateClothes(item);updateStats()}}>
                              {bunny.equipment.clothes?.name==item.name?
                                  <div className={'w-full absolute top-0 border-2 border-[#D5F908] rounded-[2vw] h-full'}>
                                      <Image src={'/images/bunny_generation/Clothes/'+item.image+'.png'} layout={'fill'}></Image>
                                  </div>
                                  :
                                  <div className={'w-full absolute rounded-[2vw] top-0 h-full'}>
                                      <Image src={'/images/bunny_generation/Clothes/'+item.image+'.png'} layout={'fill'}></Image>
                                  </div>
                              }
                              <div className={'w-full absolute top-[-1.5vh] h-[3vh]'}>
                                  <div className={'text-sm leading-[100%] justify-center text-[#000] font-soyuz inline-flex align-top w-[22%] rounded-full bg-[#FFC634] h-[3vh]'}>
                                      {item.id}
                                  </div>
                                  <div className={'text-[1.8vh] leading-[158%] w-[78%] text-white font-soyuz inline-block align-top rounded-full h-[3vh]'}>
                                      {item.name}
                                  </div>
                              </div>
                          </div>
                        );
                    }
                })}
            </div>
        );
    }

    else if(currentInventoryTab=='hat'){
        return (
            <div className={'w-full h-full overflow-y-scroll overflow-x-hidden p-[2vw] flex justify-around flex-wrap'}>
                {bunny.inventory.map(item=> {
                    if(item.type=='hat'){
                        return(
                            <div className={'w-[28%] mt-[4vw] relative h-[15vh] inventory-card-bg rounded-[2vw]'}  key={item.id} onClick={()=>{updateHat(item);updateStats()}}>
                                {bunny.equipment.hat?.name==item.name?
                                    <div className={'w-full absolute top-0 border-2 border-[#D5F908] rounded-[2vw] h-full'}>
                                        <Image src={'/images/bunny_generation/Hats/'+item.image+'.png'} layout={'fill'}></Image>
                                    </div>
                                    :
                                    <div className={'w-full absolute rounded-[2vw] top-0 h-full'}>
                                        <Image src={'/images/bunny_generation/Hats/'+item.image+'.png'} layout={'fill'}></Image>
                                    </div>
                                }
                                <div className={'w-full absolute top-[-1.5vh] h-[3vh]'}>
                                    <div className={'text-sm leading-[100%] justify-center text-[#000] font-soyuz inline-flex align-top w-[22%] rounded-full bg-[#FFC634] h-[3vh]'}>
                                        {item.id}
                                    </div>
                                    <div className={'text-[1.8vh] leading-[158%] w-[78%] text-white font-soyuz inline-block align-top rounded-full h-[3vh]'}>
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        );
    }

    else if(currentInventoryTab=='left hand'){
        return (
            <div className={'w-full h-full overflow-y-scroll overflow-x-hidden p-[2vw] flex justify-around flex-wrap'}>
                {bunny.inventory.map(item=> {
                    if(item.type=='left hand'){
                        return(
                            <div className={'w-[28%] mt-[4vw] relative h-[15vh] inventory-card-bg rounded-[2vw]'}  key={item.id} onClick={()=>{updateLeftHand(item);updateStats()}}>
                                {bunny.equipment.leftHand?.name==item.name?
                                    <div className={'w-full absolute top-0 border-2 border-[#D5F908] rounded-[2vw] h-full'}>
                                        <Image src={'/images/bunny_generation/Left hand/'+item.image+'.png'} layout={'fill'}></Image>
                                    </div>
                                    :
                                    <div className={'w-full absolute rounded-[2vw] top-0 h-full'}>
                                        <Image src={'/images/bunny_generation/Left hand/'+item.image+'.png'} layout={'fill'}></Image>
                                    </div>
                                }
                                <div className={'w-full absolute top-[-1.5vh] h-[3vh]'}>
                                    <div className={'text-sm leading-[100%] justify-center text-[#000] font-soyuz inline-flex align-top w-[22%] rounded-full bg-[#FFC634] h-[3vh]'}>
                                        {item.id}
                                    </div>
                                    <div className={'text-[1.8vh] leading-[158%] w-[78%] text-white font-soyuz inline-block align-top rounded-full h-[3vh]'}>
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        );
    }

    else if(currentInventoryTab=='right hand'){
        return (
            <div className={'w-full h-full overflow-y-scroll overflow-x-hidden p-[2vw] flex justify-around flex-wrap'}>
                {bunny.inventory.map(item=> {
                    if(item.type=='right hand'){
                        return(
                            <div className={'w-[28%] mt-[4vw] relative h-[15vh] inventory-card-bg rounded-[2vw]'}  key={item.id} onClick={()=>{updateRightHand(item);updateStats()}}>
                                {bunny.equipment.rightHand?.name==item.name?
                                    <div className={'w-full absolute top-0 border-2 border-[#D5F908] rounded-[2vw] h-full'}>
                                        <Image src={'/images/bunny_generation/Right hand/'+item.image+'.png'} layout={'fill'}></Image>
                                    </div>
                                    :
                                    <div className={'w-full absolute rounded-[2vw] top-0 h-full'}>
                                        <Image src={'/images/bunny_generation/Right hand/'+item.image+'.png'} layout={'fill'}></Image>
                                    </div>
                                }
                                <div className={'w-full absolute top-[-1.5vh] h-[3vh]'}>
                                    <div className={'text-sm leading-[100%] justify-center text-[#000] font-soyuz inline-flex align-top w-[22%] rounded-full bg-[#FFC634] h-[3vh]'}>
                                        {item.id}
                                    </div>
                                    <div className={'text-[1.8vh] leading-[158%] w-[78%] text-white font-soyuz inline-block align-top rounded-full h-[3vh]'}>
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        );
    }

    else if(currentInventoryTab=='neck'){
        return (
            <div className={'w-full h-full overflow-y-scroll overflow-x-hidden p-[2vw] flex justify-around flex-wrap'}>
                {bunny.inventory.map(item=> {
                    if(item.type=='neck'){
                        return(
                            <div className={'w-[28%] mt-[4vw] relative h-[15vh] inventory-card-bg rounded-[2vw]'}  key={item.id} onClick={()=>{updateNeck(item);updateStats()}}>
                                {bunny.equipment.neck?.name==item.name?
                                    <div className={'w-full absolute top-0 border-2 border-[#D5F908] rounded-[2vw] h-full'}>
                                        <Image src={'/images/bunny_generation/Necklace/'+item.image+'.png'} layout={'fill'}></Image>
                                    </div>
                                    :
                                    <div className={'w-full absolute rounded-[2vw] top-0 h-full'}>
                                        <Image src={'/images/bunny_generation/Necklace/'+item.image+'.png'} layout={'fill'}></Image>
                                    </div>
                                }
                                <div className={'w-full absolute top-[-1.5vh] h-[3vh]'}>
                                    <div className={'text-sm leading-[100%] justify-center text-[#000] font-soyuz inline-flex align-top w-[22%] rounded-full bg-[#FFC634] h-[3vh]'}>
                                        {item.id}
                                    </div>
                                    <div className={'text-[1.8vh] leading-[158%] w-[78%] text-white font-soyuz inline-block align-top rounded-full h-[3vh]'}>
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        );
    }

    else if(currentInventoryTab=='ears'){
        return (
            <div className={'w-full h-full overflow-y-scroll overflow-x-hidden p-[2vw] flex justify-around flex-wrap'}>
                {bunny.inventory.map(item=> {
                    if(item.type=='ears'){
                        return(
                            <div className={'w-[28%] mt-[4vw] relative h-[15vh] inventory-card-bg rounded-[2vw]'}  key={item.id} onClick={()=>{updateEars(item);updateStats()}}>
                                {bunny.equipment.hears?.name==item.name?
                                    <div className={'w-full absolute top-0 border-2 border-[#D5F908] rounded-[2vw] h-full'}>
                                        <Image src={'/images/bunny_generation/Ears/'+item.image+'.png'} layout={'fill'}></Image>
                                    </div>
                                    :
                                    <div className={'w-full absolute rounded-[2vw] top-0 h-full'}>
                                        <Image src={'/images/bunny_generation/Ears/'+item.image+'.png'} layout={'fill'}></Image>
                                    </div>
                                }
                                <div className={'w-full absolute top-[-1.5vh] h-[3vh]'}>
                                    <div className={'text-sm leading-[100%] justify-center text-[#000] font-soyuz inline-flex align-top w-[22%] rounded-full bg-[#FFC634] h-[3vh]'}>
                                        {item.id}
                                    </div>
                                    <div className={'text-[1.8vh] leading-[158%] w-[78%] text-white font-soyuz inline-block align-top rounded-full h-[3vh]'}>
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        );
    }

    return (
        <div className={'w-full h-full'}>

        </div>
    );
};

export default EquipmentCards;