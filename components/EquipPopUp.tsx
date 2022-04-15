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

}
const EquipPopUp = ({inventoryTab,updateClothes,updateEars,updateHat,updateLeftHand,updateNeck,updateRightHand, closeInventory, bunny}:inventoryTabInterface) => {
    return (
        <div className={'w-full h-full bg-cover bg-[url("../public/images/fishbg.png")]'}>
            <p className={'font-soyuz text-white text-3xl absolute left-[10vw] top-[19vh]'}>{inventoryTab}</p>
            {/*<button className={'font-soyuz absolute left-[49vw] top-[20.5vh] w-[21vw] h-[4vh] font-semibold text-[#000] green-gradient w-[30%] inline-block rounded-full h-[8vw]'}>combine</button>*/}
            <div className={'w-[3vh] h-[3vh] absolute right-[15vw] top-[20.7vh]'} onClick={()=>{closeInventory()}}>
                <Image src={'/images/close_icon.svg'} layout={'fill'}></Image>
            </div>

            <div className={'flex-wrap w-[84%] absolute inline-flex h-[58vh] left-[8%] bottom-[5vh] '}>
                <div className={'w-[100%] relative block mt-[5vw] h-[47vh]'}>
                    <EquipmentCards currentInventoryTab={inventoryTab} bunny={bunny} closeInventory={closeInventory} updateLeftHand={updateLeftHand} updateRightHand={updateRightHand} updateEars={updateEars} updateNeck={updateNeck} updateHat={updateHat} updateClothes={updateClothes}></EquipmentCards>
                </div>
            </div>


        </div>
    );
};

export default EquipPopUp;