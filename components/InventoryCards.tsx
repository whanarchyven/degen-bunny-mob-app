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
}

const InventoryCards = ({currentInventoryTab, bunny, closeInventory, updateEars, updateHat, updateLeftHand, updateRightHand, updateNeck, updateClothes}:inventoryCards) => {

    const itemsSuka=[
        {
            id:34,
            image:'Tape_pinck10',
            name:'Tape_pinck10',
            type:'clothes',
            str:4,
            dex:4,
            vit:4,
            int:4,
            krm:5,
        },
        {
            id:31,
            image:'Hoody10',
            name:'Hoody10',
            type:'clothes',
            str:2,
            dex:1,
            vit:5,
            int:4,
            krm:5,
        },
        {
            id:12,
            image:'Police10',
            name:'Police10',
            type:'clothes',
            str:3,
            dex:2,
            vit:4,
            int:4,
            krm:1,
        },
        {
            id:11,
            image:'Rainbow_fur3',
            name:'Rainbow_fur3',
            type:'ears',
            str:2,
            dex:1,
            vit:5,
            int:4,
            krm:5,
        },
        {
            id:72,
            image:'Gold_fur5',
            name:'Gold_fur5',
            type:'ears',
            str:2,
            dex:1,
            vit:5,
            int:4,
            krm:5,
        },
        {
            id:21,
            image:'Axe_l5',
            name:'Axe_l5',
            type:'left hand',
            str:2,
            dex:1,
            vit:5,
            int:4,
            krm:5,
        },
        {
            id:22,
            image:'Bit_l5',
            name:'Bit_l5',
            type:'left hand',
            str:2,
            dex:1,
            vit:5,
            int:4,
            krm:5,
        },
        {
            id:41,
            image:'Machine_r5',
            name:'Machine_r5',
            type:'right hand',
            str:2,
            dex:1,
            vit:5,
            int:4,
            krm:5,
        },
        {
            id:43,
            image:'Health_bracelet_r5',
            name:'Health_bracelet_r5',
            type:'right hand',
            str:2,
            dex:1,
            vit:5,
            int:4,
            krm:5,
        },
        {
            id:51,
            image:'Carrot_gold_n5',
            name:'Carrot_gold_n5',
            type:'neck',
            str:2,
            dex:1,
            vit:5,
            int:4,
            krm:5,
        },
        {
            id:54,
            image:'Carrot_silver_n5',
            name:'Carrot_silver_n5',
            type:'neck',
            str:2,
            dex:1,
            vit:5,
            int:4,
            krm:5,
        },
        {
            id:61,
            image:'Mask_b3',
            name:'Mask_b3',
            type:'hat',
            str:2,
            dex:1,
            vit:5,
            int:4,
            krm:5,
        },
        {
            id:1,
            image:'Mask_g3',
            name:'Mask_g3',
            type:'hat',
            str:2,
            dex:1,
            vit:5,
            int:4,
            krm:5,
        },
    ];

    if(currentInventoryTab=='clothes'){
        return (
            <div className={'w-full h-full p-[2vw] flex justify-around flex-wrap'}>
                {itemsSuka.map(item=> {
                    if(item.type=='clothes'){
                        return(
                          <div className={'w-[28%] relative h-[15vh] inventory-card-bg rounded-[2vw]'} onClick={()=>{updateClothes(item)}} key={item.id}>
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
            <div className={'w-full h-full p-[2vw] flex justify-around flex-wrap'}>
                {itemsSuka.map(item=> {
                    if(item.type=='hat'){
                        return(
                            <div className={'w-[28%] relative h-[15vh] inventory-card-bg rounded-[2vw]'} onClick={()=>{updateHat(item)}} key={item.id}>
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
            <div className={'w-full h-full p-[2vw] flex justify-around flex-wrap'}>
                {itemsSuka.map(item=> {
                    if(item.type=='left hand'){
                        return(
                            <div className={'w-[28%] relative h-[15vh] inventory-card-bg rounded-[2vw]'} onClick={()=>{updateLeftHand(item)}} key={item.id}>
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
            <div className={'w-full h-full p-[2vw] flex justify-around flex-wrap'}>
                {itemsSuka.map(item=> {
                    if(item.type=='right hand'){
                        return(
                            <div className={'w-[28%] relative h-[15vh] inventory-card-bg rounded-[2vw]'} onClick={()=>{updateRightHand(item)}} key={item.id}>
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
            <div className={'w-full h-full p-[2vw] flex justify-around flex-wrap'}>
                {itemsSuka.map(item=> {
                    if(item.type=='neck'){
                        return(
                            <div className={'w-[28%] relative h-[15vh] inventory-card-bg rounded-[2vw]'} onClick={()=>{updateNeck(item)}} key={item.id}>
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
            <div className={'w-full h-full p-[2vw] flex justify-around flex-wrap'}>
                {itemsSuka.map(item=> {
                    if(item.type=='ears'){
                        return(
                            <div className={'w-[28%] relative h-[15vh] inventory-card-bg rounded-[2vw]'} onClick={()=>{updateEars(item)}} key={item.id}>
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

export default InventoryCards;