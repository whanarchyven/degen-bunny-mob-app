import React from 'react';
import Image from "next/image";
import {bunnyInterface} from "./bunnyInterface";
import {equipment} from "./equipmentItemInterface";
import InventoryCards from "./InventoryCards";
import EquipmentCards from "./EquipmentCards";
interface inventoryTabInterface extends bunnyInterface{
    inventoryTab: string,
    updateLeftHand: (item: equipment) => any,
    updateRightHand: (item: equipment) => any,
    updateNeck: (item: equipment) => any,
    updateHat: (item: equipment) => any,
    updateClothes: (item: equipment) => any,
    updateEars: (item: equipment) => any,
    closeInventory:()=>any,
    updateStats:()=>any,

}
const EquipPopUp = ({inventoryTab,updateClothes,updateEars,updateHat,updateLeftHand,updateNeck,updateRightHand, closeInventory, bunny, updateStats}:inventoryTabInterface) => {
    return (
        <div className={'w-full h-full bg-cover bg-[url("../public/images/fishbg.png")]'}>
            <p className={'font-soyuz text-white text-3xl absolute left-[10vw] top-[13vh] sm:top-[2vw] sm:text-[4vw]'}>{inventoryTab}</p>
            {/*<button className={'font-soyuz absolute left-[49vw] top-[20.5vh] w-[21vw] h-[4vh] font-semibold text-[#000] green-gradient w-[30%] inline-block rounded-full h-[8vw]'}>combine</button>*/}
            <div className={'w-[3vh] h-[3vh] absolute right-[15vw] top-[14.7vh] sm:top-[2.8vw] sm:h-[3vw] sm:w-[3vw] cursor-pointer'} onClick={()=>{closeInventory()}}>
                <Image src={'/images/close_icon.svg'} layout={'fill'}></Image>
            </div>

            <div className={'flex-wrap w-[84%] absolute inline-flex h-[58vh] left-[8%] bottom-[5vh] sm:top-[8vw] sm:bottom-0 '}>
                <div className={'w-[100%] relative block mt-[5vw] sm:mt-[1vw] h-[47vh] sm:h-[37vw]'}>
                    <EquipmentCards updateStats={updateStats} currentInventoryTab={inventoryTab} bunny={bunny} closeInventory={closeInventory} updateLeftHand={updateLeftHand} updateRightHand={updateRightHand} updateEars={updateEars} updateNeck={updateNeck} updateHat={updateHat} updateClothes={updateClothes}></EquipmentCards>
                </div>
            </div>


        </div>
    );
};

export default EquipPopUp;