import React from 'react';
import Image from "next/image";
import {bunnyInterface} from "./bunnyInterface";
import {equipment} from "./equipmentItemInterface";
import InventoryCards from "./InventoryCards";
interface inventoryTabInterface extends bunnyInterface{
    inventoryTab: string,
    updateInventoryTab:(item:string)=>any,

    updateLeftHand: (item: equipment) => any,
    updateRightHand: (item: equipment) => any,
    updateNeck: (item: equipment) => any,
    updateHat: (item: equipment) => any,
    updateClothes: (item: equipment) => any,
    updateEars: (item: equipment) => any,
    closeInventory:()=>any,

}
const Inventory = ({inventoryTab,updateClothes,updateEars,updateHat,updateLeftHand,updateNeck,updateRightHand, closeInventory, bunny, updateInventoryTab}:inventoryTabInterface) => {


    return (
        <div className={'w-full h-full bg-cover bg-[url("../public/images/fishbg.png")] relative'}>
            <p className={'font-soyuz text-white text-3xl absolute left-[10vw] top-[10vh] sm:top-[2vw] sm:left-[4vw] sm:text-[3vw]'}>inventory</p>
            <button className={'font-soyuz absolute left-[49vw] top-[11.5vh] w-[21vw] h-[4vh] font-semibold text-[#000] green-gradient w-[30%] inline-block rounded-full h-[8vw] sm:h-[3vw] sm:w-[8vw] sm:text-[1.6vw] sm:top-[2vw] sm:left-[18vw]'}>combine</button>
            <div className={'w-[3vh] cursor-pointer h-[3vh] absolute right-[15vw] top-[11.7vh] sm:top-[2vw] sm:right-[2vw] sm:h-[2.2vw] sm:w-[2.2vw]'} onClick={()=>{closeInventory()}}>
                <Image src={'/images/close_icon.svg'} layout={'fill'}></Image>
            </div>
            {/*<button onClick={()=>{updateHat({image:'Crown_g10',*/}
            {/*    name:'string',*/}
            {/*    str:4,*/}
            {/*    dex:4,*/}
            {/*    vit:4,*/}
            {/*    int:4,*/}
            {/*    krm:5,}); closeInventory()}} className={'w-[15vw] relative mx-[5vw] h-[5vw] bg-[#000]'}>Hat</button>*/}
            {/*<button onClick={()=>{updateEars({image:'Pink_fur5',*/}
            {/*    name:'string',*/}
            {/*    str:4,*/}
            {/*    dex:4,*/}
            {/*    vit:4,*/}
            {/*    int:4,*/}
            {/*    krm:5,}); closeInventory()}} className={'w-[15vw] relative mx-[5vw] h-[5vw] bg-[#000]'}>Ears</button>*/}
            {/*<button onClick={()=>{updateHat({image:'Crown_g10',*/}
            {/*    name:'string',*/}
            {/*    str:4,*/}
            {/*    dex:4,*/}
            {/*    vit:4,*/}
            {/*    int:4,*/}
            {/*    krm:5,}); closeInventory()}} className={'w-[15vw] relative mx-[5vw] h-[5vw] bg-[#000]'}>Hat</button>*/}

            <div className={'flex-wrap w-[84%] absolute inline-flex h-[58vh] left-[8%] bottom-[5vh] sm:bottom-auto sm:top-[7vw]'}>
                <div className={'w-[100%] relative block h-[5vh] sm:h-[5vh] '}>
                    <div className={'rounded-l-full w-[16.66%] cursor-pointer align-top h-full border-[1px] inline-block border-white border-dashed'} onClick={()=>{updateInventoryTab('hat')}}>
                        {inventoryTab=='hat'?<div className={'rounded-l-full w-full h-full flex justify-center items-center font-soyuz inventory-active-tab text-white text-sm sm:text-[1.2vw]'}>Hat</div>:<div className={'rounded-l-full w-full h-full flex justify-center items-center font-soyuz text-white text-sm sm:text-[1.2vw]'}>Hat</div>}
                    </div>
                    <div className={'w-[16.66%] cursor-pointer align-top h-full border-[1px] inline-block border-white border-dashed'} onClick={()=>{updateInventoryTab('clothes')}}>
                        {inventoryTab=='clothes'?<div className={'w-full h-full flex justify-center items-center font-soyuz inventory-active-tab text-white text-sm sm:text-[1.2vw]'}>Clothes</div>:<div className={'w-full h-full flex justify-center items-center font-soyuz text-white text-sm sm:text-[1.2vw]'}>clothes</div>}
                    </div>
                    <div className={'w-[16.66%] cursor-pointer align-top h-full border-[1px] inline-block border-white border-dashed'} onClick={()=>{updateInventoryTab('left hand')}}>
                        {inventoryTab=='left hand'?<div className={'w-full h-full flex justify-center items-center font-soyuz inventory-active-tab text-white text-center leading-[100%] text-sm sm:text-[1.2vw]'}>left hand</div>:<div className={'w-full h-full flex justify-center items-center font-soyuz text-white text-center leading-[100%] text-sm sm:text-[1.2vw]'}>left hand</div>}
                    </div>
                    <div className={'w-[16.66%] cursor-pointer align-top h-full border-[1px] inline-block border-white border-dashed'} onClick={()=>{updateInventoryTab('right hand')}}>
                        {inventoryTab=='right hand'?<div className={'w-full h-full flex justify-center items-center font-soyuz inventory-active-tab text-white text-center leading-[100%] text-sm sm:text-[1.2vw]'}>right hand</div>:<div className={'w-full h-full flex justify-center items-center font-soyuz text-white text-center leading-[100%] text-sm sm:text-[1.2vw]'}>right hand</div>}
                    </div>
                    <div className={'w-[16.66%] cursor-pointer align-top h-full border-[1px] inline-block border-white border-dashed'} onClick={()=>{updateInventoryTab('neck')}}>
                        {inventoryTab=='neck'?<div className={'w-full h-full flex justify-center items-center font-soyuz inventory-active-tab text-white text-center leading-[100%] text-sm sm:text-[1.2vw]'}>neck</div>:<div className={'w-full h-full flex justify-center items-center font-soyuz text-white text-center leading-[100%] text-sm sm:text-[1.2vw]'}>neck</div>}
                    </div>
                    <div className={'rounded-r-full w-[16.66%] cursor-pointer align-top h-full border-[1px] inline-block border-white border-dashed'} onClick={()=>{updateInventoryTab('ears')}}>
                        {inventoryTab=='ears'?<div className={'rounded-r-full w-full h-full flex justify-center items-center font-soyuz inventory-active-tab text-white text-center leading-[100%] text-sm sm:text-[1.2vw]'}>ears</div>:<div className={'rounded-r-full w-full h-full flex justify-center items-center font-soyuz text-white text-center leading-[100%] text-sm sm:text-[1.2vw]'}>ears</div>}
                    </div>
                </div>
                <div className={'w-[100%] relative block mt-[5vw] h-[52vh] sm:mt-[1vw] sm:h-[32vw]'}>
                    <InventoryCards inventory={bunny.inventory} currentInventoryTab={inventoryTab} bunny={bunny} closeInventory={closeInventory} updateLeftHand={updateLeftHand} updateRightHand={updateRightHand} updateEars={updateEars} updateNeck={updateNeck} updateHat={updateHat} updateClothes={updateClothes}></InventoryCards>
                </div>
            </div>


        </div>
    );
};

export default Inventory;