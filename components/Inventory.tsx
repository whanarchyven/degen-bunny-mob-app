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
        <div className={'w-full h-full bg-cover bg-[url("../public/images/fishbg.png")]'}>
            <p className={'font-soyuz text-white text-3xl absolute left-[10vw] top-[10vh]'}>inventory</p>
            <button className={'font-soyuz absolute left-[49vw] top-[11.5vh] w-[21vw] h-[4vh] font-semibold text-[#000] green-gradient w-[30%] inline-block rounded-full h-[8vw]'}>combine</button>
            <div className={'w-[3vh] h-[3vh] absolute right-[15vw] top-[11.7vh]'} onClick={()=>{closeInventory()}}>
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

            <div className={'flex-wrap w-[84%] absolute inline-flex h-[58vh] left-[8%] bottom-[5vh] '}>
                <div className={'w-[100%] relative block h-[5vh]'}>
                    <div className={'rounded-l-full w-[16.66%] align-top h-full border-[1px] inline-block border-white border-dashed'} onClick={()=>{updateInventoryTab('hat')}}>
                        {inventoryTab=='hat'?<div className={'rounded-l-full w-full h-full flex justify-center items-center font-soyuz inventory-active-tab text-white text-sm'}>Hat</div>:<div className={'rounded-l-full w-full h-full flex justify-center items-center font-soyuz text-white text-sm'}>Hat</div>}
                    </div>
                    <div className={'w-[16.66%] align-top h-full border-[1px] inline-block border-white border-dashed'} onClick={()=>{updateInventoryTab('clothes')}}>
                        {inventoryTab=='clothes'?<div className={'w-full h-full flex justify-center items-center font-soyuz inventory-active-tab text-white text-sm'}>Clothes</div>:<div className={'w-full h-full flex justify-center items-center font-soyuz text-white text-sm'}>clothes</div>}
                    </div>
                    <div className={'w-[16.66%] align-top h-full border-[1px] inline-block border-white border-dashed'} onClick={()=>{updateInventoryTab('left hand')}}>
                        {inventoryTab=='left hand'?<div className={'w-full h-full flex justify-center items-center font-soyuz inventory-active-tab text-white text-center leading-[100%] text-sm'}>left hand</div>:<div className={'w-full h-full flex justify-center items-center font-soyuz text-white text-center leading-[100%] text-sm'}>left hand</div>}
                    </div>
                    <div className={'w-[16.66%] align-top h-full border-[1px] inline-block border-white border-dashed'} onClick={()=>{updateInventoryTab('right hand')}}>
                        {inventoryTab=='right hand'?<div className={'w-full h-full flex justify-center items-center font-soyuz inventory-active-tab text-white text-center leading-[100%] text-sm'}>right hand</div>:<div className={'w-full h-full flex justify-center items-center font-soyuz text-white text-center leading-[100%] text-sm'}>right hand</div>}
                    </div>
                    <div className={'w-[16.66%] align-top h-full border-[1px] inline-block border-white border-dashed'} onClick={()=>{updateInventoryTab('neck')}}>
                        {inventoryTab=='neck'?<div className={'w-full h-full flex justify-center items-center font-soyuz inventory-active-tab text-white text-center leading-[100%] text-sm'}>neck</div>:<div className={'w-full h-full flex justify-center items-center font-soyuz text-white text-center leading-[100%] text-sm'}>neck</div>}
                    </div>
                    <div className={'rounded-r-full w-[16.66%] align-top h-full border-[1px] inline-block border-white border-dashed'} onClick={()=>{updateInventoryTab('ears')}}>
                        {inventoryTab=='ears'?<div className={'rounded-r-full w-full h-full flex justify-center items-center font-soyuz inventory-active-tab text-white text-center leading-[100%] text-sm'}>ears</div>:<div className={'rounded-r-full w-full h-full flex justify-center items-center font-soyuz text-white text-center leading-[100%] text-sm'}>ears</div>}
                    </div>
                </div>
                <div className={'w-[100%] relative block mt-[5vw] h-[47vh]'}>
                    <InventoryCards inventory={bunny.inventory} currentInventoryTab={inventoryTab} bunny={bunny} closeInventory={closeInventory} updateLeftHand={updateLeftHand} updateRightHand={updateRightHand} updateEars={updateEars} updateNeck={updateNeck} updateHat={updateHat} updateClothes={updateClothes}></InventoryCards>
                </div>
            </div>


        </div>
    );
};

export default Inventory;