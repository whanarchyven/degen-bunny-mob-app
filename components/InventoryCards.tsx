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
    inventory:{
        id:number,
        rarity:string,
        name:string,
        type:string,
        str:number,
        dex:number,
        vit:number,
        int:number,
        krm:number,
        requirements?:{
            str?:number,
            dex?:number,
            vit?:number,
            int?:number,
            krm?:number,
        },
    }[],
}

const InventoryCards = ({currentInventoryTab, bunny,inventory, closeInventory, updateEars, updateHat, updateLeftHand, updateRightHand, updateNeck, updateClothes}:inventoryCards) => {


    if(currentInventoryTab=='clothes'){
        return (
            <div className={'w-full h-full overflow-y-scroll overflow-x-hidden p-[2vw] flex justify-around flex-wrap'}>
                {inventory.map(item=> {
                    if(item.type=='clothes'){
                        if(item.rarity=='common'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/common/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Clothes/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/'+item.type+'.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[70%] mx-auto border-[#000]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                </div>
                            );
                        }
                        else if(item.rarity=='uncommon'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/uncommon/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Clothes/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/'+item.type+'.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[70%] mx-auto border-[#000]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                </div>
                            );
                        }

                        else if(item.rarity=='epic'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/epic/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Clothes/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/'+item.type+'.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[40%] inline-block mx-[2%] ml-[8%]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                    <div className={'align-top relative w-[40%] inline-block ml-[2%] mr-[8%]'}>
                                        <p className={'w-full relative text-white text-center font-medium font-josefin text-[1vh]'}>Requierements</p>
                                        {item.requirements?.dex!=0&&item.requirements?.dex!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                 <div className={'w-[2vh] mx-[1vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/dex.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>{item.requirements.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.str!=0&&item.requirements?.str!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/str.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.vit!=0&&item.requirements?.vit!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/vit.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.int!=0&&item.requirements?.int!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/int.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.krm!=0&&item.requirements?.krm!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/krm.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                    </div>
                                </div>
                            );
                        }


                        else if(item.rarity=='legendary'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/legendary/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Clothes/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/'+item.type+'.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[40%] inline-block mx-[2%] ml-[8%]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                    <div className={'align-top relative w-[40%] inline-block ml-[2%] mr-[8%]'}>
                                        <p className={'w-full relative text-white text-center font-medium font-josefin text-[1vh]'}>Requierements</p>
                                        {item.requirements?.dex!=0&&item.requirements?.dex!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] mx-[1vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/dex.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>{item.requirements.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.str!=0&&item.requirements?.str!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/str.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.vit!=0&&item.requirements?.vit!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/vit.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.int!=0&&item.requirements?.int!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/int.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.krm!=0&&item.requirements?.krm!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/krm.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        <p className={'w-[90%] relative text-white text-[1.2vh] ml-[10%] font-medium font-josefin mt-[0.3vh]'}>Status: <span className={'font-bold text-[1.5vh]'}>Elite</span> </p>

                                    </div>
                                </div>
                            );
                        }
                    }
                })}
            </div>
        );
    }

    else if(currentInventoryTab=='hat'){
        return (
            <div className={'w-full h-full overflow-y-scroll overflow-x-hidden p-[2vw] flex justify-around flex-wrap'}>
                {inventory.map(item=> {
                    if(item.type=='hat'){
                        if(item.rarity=='common'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/common/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Hats/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/'+item.type+'.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[70%] mx-auto border-[#000]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                </div>
                            );
                        }
                        else if(item.rarity=='uncommon'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/uncommon/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Hats/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/'+item.type+'.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[70%] mx-auto border-[#000]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                </div>
                            );
                        }

                        else if(item.rarity=='epic'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/epic/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Hats/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/'+item.type+'.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[40%] inline-block mx-[2%] ml-[8%]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                    <div className={'align-top relative w-[40%] inline-block ml-[2%] mr-[8%]'}>
                                        <p className={'w-full relative text-white text-center font-medium font-josefin text-[1vh]'}>Requierements</p>
                                        {item.requirements?.dex!=0&&item.requirements?.dex!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] mx-[1vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/dex.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>{item.requirements.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.str!=0&&item.requirements?.str!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/str.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.vit!=0&&item.requirements?.vit!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/vit.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.int!=0&&item.requirements?.int!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/int.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.krm!=0&&item.requirements?.krm!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/krm.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                    </div>
                                </div>
                            );
                        }


                        else if(item.rarity=='legendary'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/legendary/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Hats/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/'+item.type+'.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[40%] inline-block mx-[2%] ml-[8%]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                    <div className={'align-top relative w-[40%] inline-block ml-[2%] mr-[8%]'}>
                                        <p className={'w-full relative text-white text-center font-medium font-josefin text-[1vh]'}>Requierements</p>
                                        {item.requirements?.dex!=0&&item.requirements?.dex!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] mx-[1vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/dex.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>{item.requirements.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.str!=0&&item.requirements?.str!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/str.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.vit!=0&&item.requirements?.vit!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/vit.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.int!=0&&item.requirements?.int!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/int.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.krm!=0&&item.requirements?.krm!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/krm.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        <p className={'w-[90%] relative text-white text-[1.2vh] ml-[10%] font-medium font-josefin mt-[0.3vh]'}>Status: <span className={'font-bold text-[1.5vh]'}>Elite</span> </p>

                                    </div>
                                </div>
                            );
                        }
                    }
                })}
            </div>
        );
    }

    else if(currentInventoryTab=='left hand'){
        return (
            <div className={'w-full h-full overflow-y-scroll overflow-x-hidden p-[2vw] flex justify-around flex-wrap'}>
                {inventory.map(item=> {
                    if(item.type=='left hand'){
                        if(item.rarity=='common'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/common/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Left hand/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/left_hand.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[70%] mx-auto border-[#000]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                </div>
                            );
                        }
                        else if(item.rarity=='uncommon'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/uncommon/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Left hand/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/left_hand.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[70%] mx-auto border-[#000]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                </div>
                            );
                        }

                        else if(item.rarity=='epic'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/epic/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Left hand/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/left_hand.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[40%] inline-block mx-[2%] ml-[8%]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                    <div className={'align-top relative w-[40%] inline-block ml-[2%] mr-[8%]'}>
                                        <p className={'w-full relative text-white text-center font-medium font-josefin text-[1vh]'}>Requierements</p>
                                        {item.requirements?.dex!=0&&item.requirements?.dex!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] mx-[1vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/dex.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>{item.requirements.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.str!=0&&item.requirements?.str!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/str.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.vit!=0&&item.requirements?.vit!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/vit.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.int!=0&&item.requirements?.int!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/int.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.krm!=0&&item.requirements?.krm!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/krm.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                    </div>
                                </div>
                            );
                        }


                        else if(item.rarity=='legendary'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/legendary/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Left hand/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/left_hand.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[40%] inline-block mx-[2%] ml-[8%]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                    <div className={'align-top relative w-[40%] inline-block ml-[2%] mr-[8%]'}>
                                        <p className={'w-full relative text-white text-center font-medium font-josefin text-[1vh]'}>Requierements</p>
                                        {item.requirements?.dex!=0&&item.requirements?.dex!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] mx-[1vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/dex.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>{item.requirements.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.str!=0&&item.requirements?.str!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/str.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.vit!=0&&item.requirements?.vit!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/vit.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.int!=0&&item.requirements?.int!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/int.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.krm!=0&&item.requirements?.krm!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/krm.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        <p className={'w-[90%] relative text-white text-[1.2vh] ml-[10%] font-medium font-josefin mt-[0.3vh]'}>Status: <span className={'font-bold text-[1.5vh]'}>Elite</span> </p>

                                    </div>
                                </div>
                            );
                        }
                    }
                })}
            </div>
        );
    }

    else if(currentInventoryTab=='right hand'){
        return (
            <div className={'w-full h-full overflow-y-scroll overflow-x-hidden p-[2vw] flex justify-around flex-wrap'}>
                {inventory.map(item=> {
                    if(item.type=='right hand'){
                        if(item.rarity=='common'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/common/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Right hand/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/right_hand.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[70%] mx-auto border-[#000]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                </div>
                            );
                        }
                        else if(item.rarity=='uncommon'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/uncommon/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Right hand/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/right_hand.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[70%] mx-auto border-[#000]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                </div>
                            );
                        }

                        else if(item.rarity=='epic'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/epic/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Right hand/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/right_hand.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[40%] inline-block mx-[2%] ml-[8%]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                    <div className={'align-top relative w-[40%] inline-block ml-[2%] mr-[8%]'}>
                                        <p className={'w-full relative text-white text-center font-medium font-josefin text-[1vh]'}>Requierements</p>
                                        {item.requirements?.dex!=0&&item.requirements?.dex!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] mx-[1vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/dex.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>{item.requirements.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.str!=0&&item.requirements?.str!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/str.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.vit!=0&&item.requirements?.vit!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/vit.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.int!=0&&item.requirements?.int!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/int.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.krm!=0&&item.requirements?.krm!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/krm.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                    </div>
                                </div>
                            );
                        }


                        else if(item.rarity=='legendary'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/legendary/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Right hand/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/right_hand.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[40%] inline-block mx-[2%] ml-[8%]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                    <div className={'align-top relative w-[40%] inline-block ml-[2%] mr-[8%]'}>
                                        <p className={'w-full relative text-white text-center font-medium font-josefin text-[1vh]'}>Requierements</p>
                                        {item.requirements?.dex!=0&&item.requirements?.dex!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] mx-[1vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/dex.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>{item.requirements.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.str!=0&&item.requirements?.str!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/str.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.vit!=0&&item.requirements?.vit!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/vit.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.int!=0&&item.requirements?.int!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/int.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.krm!=0&&item.requirements?.krm!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/krm.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        <p className={'w-[90%] relative text-white text-[1.2vh] ml-[10%] font-medium font-josefin mt-[0.3vh]'}>Status: <span className={'font-bold text-[1.5vh]'}>Elite</span> </p>

                                    </div>
                                </div>
                            );
                        }
                    }
                })}
            </div>
        );
    }

    else if(currentInventoryTab=='neck'){
        return (
            <div className={'w-full h-full overflow-y-scroll overflow-x-hidden p-[2vw] flex justify-around flex-wrap'}>
                {inventory.map(item=> {
                    if(item.type=='neck'){
                        if(item.rarity=='common'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/common/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Necklace/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/neck.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[70%] mx-auto border-[#000]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                </div>
                            );
                        }
                        else if(item.rarity=='uncommon'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/uncommon/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Necklace/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/neck.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[70%] mx-auto border-[#000]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                </div>
                            );
                        }

                        else if(item.rarity=='epic'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/epic/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Necklace/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/neck.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[40%] inline-block mx-[2%] ml-[8%]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                    <div className={'align-top relative w-[40%] inline-block ml-[2%] mr-[8%]'}>
                                        <p className={'w-full relative text-white text-center font-medium font-josefin text-[1vh]'}>Requierements</p>
                                        {item.requirements?.dex!=0&&item.requirements?.dex!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] mx-[1vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/dex.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>{item.requirements.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.str!=0&&item.requirements?.str!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/str.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.vit!=0&&item.requirements?.vit!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/vit.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.int!=0&&item.requirements?.int!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/int.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.krm!=0&&item.requirements?.krm!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/krm.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                    </div>
                                </div>
                            );
                        }


                        else if(item.rarity=='legendary'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/legendary/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Necklace/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/neck.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[40%] inline-block mx-[2%] ml-[8%]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                    <div className={'align-top relative w-[40%] inline-block ml-[2%] mr-[8%]'}>
                                        <p className={'w-full relative text-white text-center font-medium font-josefin text-[1vh]'}>Requierements</p>
                                        {item.requirements?.dex!=0&&item.requirements?.dex!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] mx-[1vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/dex.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>{item.requirements.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.str!=0&&item.requirements?.str!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/str.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.vit!=0&&item.requirements?.vit!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/vit.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.int!=0&&item.requirements?.int!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/int.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.krm!=0&&item.requirements?.krm!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/krm.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        <p className={'w-[90%] relative text-white text-[1.2vh] ml-[10%] font-medium font-josefin mt-[0.3vh]'}>Status: <span className={'font-bold text-[1.5vh]'}>Elite</span> </p>

                                    </div>
                                </div>
                            );
                        }
                    }
                })}
            </div>
        );
    }

    else if(currentInventoryTab=='ears'){
        return (
            <div className={'w-full h-full overflow-y-scroll overflow-x-hidden p-[2vw] flex justify-around flex-wrap'}>
                {inventory.map(item=> {
                    if(item.type=='ears'){
                        if(item.rarity=='common'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/common/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Ears/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/ears.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[70%] mx-auto border-[#000]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/common/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                </div>
                            );
                        }
                        else if(item.rarity=='uncommon'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/uncommon/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Ears/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/ears.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[70%] mx-auto border-[#000]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/uncommon/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                </div>
                            );
                        }

                        else if(item.rarity=='epic'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/epic/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Ears/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/ears.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[40%] inline-block mx-[2%] ml-[8%]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                    <div className={'align-top relative w-[40%] inline-block ml-[2%] mr-[8%]'}>
                                        <p className={'w-full relative text-white text-center font-medium font-josefin text-[1vh]'}>Requierements</p>
                                        {item.requirements?.dex!=0&&item.requirements?.dex!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] mx-[1vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/dex.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>{item.requirements.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.str!=0&&item.requirements?.str!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/str.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.vit!=0&&item.requirements?.vit!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/vit.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.int!=0&&item.requirements?.int!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/int.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.krm!=0&&item.requirements?.krm!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/epic/krm.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                    </div>
                                </div>
                            );
                        }


                        else if(item.rarity=='legendary'){
                            return(
                                <div className={'w-[48%] mt-[4vw] relative h-[23vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                    <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                        <Image src={'/images/card_generation/legendary/bg.svg'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[8vh] h-[8vh] relative mx-auto mt-[1.5vh]'}>
                                        <Image src={'/images/miniatures/Ears/'+item.name+'.png'} layout={'fill'}></Image>
                                    </div>
                                    <div className={'w-[2vh] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                        <Image src={'/images/equipment_module/ears.svg'} layout={'fill'}></Image>
                                    </div>
                                    <p className={'text-white font-josefin text-[1.8vh] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                    <p className={'w-full text-white font-soyuz text-[1.8vh] text-center'}>{item.name}</p>
                                    <div className={'relative w-[40%] inline-block mx-[2%] ml-[8%]'}>
                                        {item.dex!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/dex.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.str!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/str.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.vit!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/vit.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.int!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/int.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.krm!=0?
                                            <div className={'w-full relative flex justify-between items-center'}>
                                                <div className={'w-[2vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/krm.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                </div>
                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    +{item.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}

                                    </div>
                                    <div className={'align-top relative w-[40%] inline-block ml-[2%] mr-[8%]'}>
                                        <p className={'w-full relative text-white text-center font-medium font-josefin text-[1vh]'}>Requierements</p>
                                        {item.requirements?.dex!=0&&item.requirements?.dex!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] mx-[1vh] h-[2vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/dex.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>{item.requirements.dex}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.str!=0&&item.requirements?.str!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/str.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.str}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.vit!=0&&item.requirements?.vit!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/vit.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.vit}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.int!=0&&item.requirements?.int!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/int.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.int}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        {item.requirements?.krm!=0&&item.requirements?.krm!=undefined?
                                            <div className={'w-full relative flex justify-center items-center'}>
                                                <div className={'w-[2vh] h-[2vh] mx-[1vh] relative inline-block'}>
                                                    <Image src={'/images/card_generation/legendary/krm.svg'} layout={'fill'}></Image>
                                                </div>

                                                <p className={'text-white font-soyuz text-[2vh] mt-[-0.4vh] text-center'}>
                                                    {item.requirements.krm}
                                                </p>
                                            </div>
                                            :
                                            <div className={'hidden'}>

                                            </div>}
                                        <p className={'w-[90%] relative text-white text-[1.2vh] ml-[10%] font-medium font-josefin mt-[0.3vh]'}>Status: <span className={'font-bold text-[1.5vh]'}>Elite</span> </p>

                                    </div>
                                </div>
                            );
                        }
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