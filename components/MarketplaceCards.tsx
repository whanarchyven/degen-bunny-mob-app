import React, {useState} from 'react';

import {bunnyInterface} from "./bunnyInterface";
import {equipment} from "./equipmentItemInterface";
import Image from "next/image";


interface marketplaceCards extends  bunnyInterface{
    currentMarketplace:string,
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
        }
    }[],
    currentBuyingTab:string,
    pushToInventory:(item:equipment)=>void;
    balance:number,
    changeBalance:(item:number)=>void,
}

function ucFirst(str:string) {
    if (!str) return str;

    if(str=='hat'){
        return 'Hats';
    }

    else if(str=='neck'){
        return 'Necklace'
    }

    return str[0].toUpperCase() + str.slice(1);
}

const MarketplaceCards = ({currentMarketplace,currentBuyingTab,pushToInventory, bunny,inventory,balance,changeBalance}:marketplaceCards) => {



    const [marketplaceItems,setMarketplaceItems]=useState([
        {
            id:31,
            rarity:'common',
            name:'Hoody10',
            type:'clothes',
            str:0,
            dex:0,
            vit:1,
            int:4,
            krm:5,
            rentPrice:15,
            buyPrice:15,
            requirements:{
                int:2,
                str:3,
            }
        },

        {
            id:220,
            rarity:'epic',
            name:'Ice_cream_l5',
            type:'left hand',
            str:2,
            dex:1,
            vit:5,
            int:0,
            krm:0,
            rentPrice:15,
            buyPrice:15,
            requirements:{
                vit:4,
            }
        },
        {
            id:410,
            rarity:'uncommon',
            name:'Chain_s_r10',
            type:'right hand',
            str:2,
            dex:1,
            vit:0,
            int:0,
            krm:0,
            rentPrice:15,
            buyPrice:15,
        },
        {
            id:430,
            rarity:'legendary',
            name:'Health_bracelet_r5',
            type:'right hand',
            str:2,
            dex:1,
            vit:5,
            int:0,
            krm:0,
            rentPrice:15,
            buyPrice:15,
            requirements:{
                krm:4,
                dex:1,
            }
        },


        {
            id:610,
            rarity:'epic',
            name:'Crown_g10',
            type:'hat',
            str:2,
            dex:1,
            vit:0,
            int:0,
            krm:5,
            rentPrice:15,
            buyPrice:15,
            requirements:{
                str:4,
                vit:1,
            }
        },
    ]);

    const RentItem=(item:{
        id:number,
        rarity:string,
        name:string,
        type:string,
        str:number,
        dex:number,
        vit:number,
        int:number,
        krm:number,
        rentPrice:number,
        buyPrice:number,
        requirements?:{
            str?:number,
            dex?:number,
            vit?:number,
            int?:number,
            krm?:number,
        }
    },)=>{
        let newItem={
            id:item.id,
            rarity:item.rarity,
            name:item.name,
            type:item.type,
            str:item.str,
            dex:item.dex,
            vit:item.vit,
            int:item.int,
            krm:item.krm,
            requirements:item.requirements,
        }
        if(balance>=item.rentPrice){
            changeBalance(balance-item.rentPrice);
            pushToInventory(newItem);
            alert('Succesfully minted')
        }
        else{
            alert('Sorry, seems like you are BOMZH, GO WORK HARD')
        }
    }

    const checkItemInInventory=(id:number)=>{
        if(bunny.inventory.find(suka=>suka.id==id)){
            return true;
        }
        else{
            return false
        }
    }



    function SortArray(x:{
        id:number,
        image:string,
        name:string,
        type:string,
        str:number,
        dex:number,
        vit:number,
        int:number,
        krm:number,
        rentPrice:number,
        buyPrice:number,
    }, y:{
        id:number,
        image:string,
        name:string,
        type:string,
        str:number,
        dex:number,
        vit:number,
        int:number,
        krm:number,
        rentPrice:number,
        buyPrice:number,
    }){
        if (x.name < y.name) {return -1;}
        if (x.name > y.name) {return 1;}
        return 0;
    }



    if(currentMarketplace=='looks'){
        return (
            <div className={'w-full h-full overflow-y-scroll overflow-x-hidden p-[2vw] flex justify-around flex-wrap'}>
                {marketplaceItems.map(item=> {
                    if(item.type=='clothes'||item.type=='ears'||item.type=='left hand'||item.type=='hat'||item.type=='right hand'||item.type=='neck'){
                        if(checkItemInInventory(item.id)==false){
                                if(item.rarity=='common'){
                                    return(
                                        <div className={'w-[48%] sm:w-[45%] sm:mt-[0vw] sm:mb-[4vw] mb-[2vh] mt-[2vh]'}>
                                            <div className={'w-full relative h-[23vh] sm:h-[14.2vw] rounded-[2vw]'}  key={item.id}>
                                                <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                                    <Image src={'/images/card_generation/common/bg.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'w-[8vh] h-[8vh] sm:w-[4vw] sm:h-[4vw] relative mx-auto mt-[1.5vh]'}>
                                                    <Image src={'/images/miniatures/'+ucFirst(item.type)+'/'+item.name+'.png'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                                    <Image src={'/images/equipment_module/'+item.type+'.svg'} layout={'fill'}></Image>
                                                </div>
                                                <p className={'text-white font-josefin text-[1.8vh] sm:text-[1.2vw] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                                <p className={'w-full text-white font-soyuz text-[1.8vh] sm:text-[1.2vw] text-center'}>{item.name}</p>
                                                <div className={'relative w-[70%] mx-auto border-[#000]'}>
                                                    {item.dex!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/common/dex.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.dex}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.str!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/common/str.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.str}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.vit!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/common/vit.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.vit}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.int!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/common/int.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.int}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.krm!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/common/krm.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.krm}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}

                                                </div>
                                            </div>
                                            <div className={'w-[80%] mx-auto mt-[1vh] sm:mt-[2vw] flex justify-between'}>
                                                <div className={'w-[50%] inline-block'}>
                                                    <p className={'text-white inline-block align-top text-[2.5vh] sm:text-[1.2vw] font-bold font-josefin'}>{item.rentPrice}</p>
                                                    <div className={'w-[3.5vh] h-[3.5vh] sm:w-[2vw] sm:h-[2vw] align-top ml-[10%] inline-block relative'}>
                                                        <Image src={'/images/wallet_carrot.png'} layout={'fill'}></Image>
                                                    </div>
                                                </div>
                                                <button className={'w-[50%] sm:h-[2vw] bg-[#E9E9E9] h-[3.5vh] rounded-full text-white inline-block align-top text-[2.5vh] sm:text-[1.2vw] text-[#000] font-bold font-soyuz'} onClick={()=>{RentItem(item)}}>
                                                    buy
                                                </button>
                                            </div>
                                        </div>
                                    );
                                }
                                else if(item.rarity=='uncommon'){
                                    return(
                                        <div className={'w-[48%] sm:w-[45%] sm:mt-[0vw] sm:mb-[4vw] mt-[2vh] mb-[2vh]'}>
                                            <div className={'w-full relative h-[23vh] sm:h-[14.2vw] rounded-[2vw]'}  key={item.id}>
                                                <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                                    <Image src={'/images/card_generation/uncommon/bg.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'w-[8vh] h-[8vh] sm:w-[4vw] sm:h-[4vw] relative mx-auto mt-[1.5vh]'}>
                                                    <Image src={'/images/miniatures/'+ucFirst(item.type)+'/'+item.name+'.png'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                                    <Image src={'/images/equipment_module/'+item.type+'.svg'} layout={'fill'}></Image>
                                                </div>
                                                <p className={'text-white font-josefin text-[1.8vh] sm:text-[1.2vw] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                                <p className={'w-full text-white font-soyuz text-[1.8vh] sm:text-[1.2vw] text-center'}>{item.name}</p>
                                                <div className={'relative w-[70%] mx-auto border-[#000]'}>
                                                    {item.dex!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/uncommon/dex.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.dex}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.str!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/uncommon/str.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.str}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.vit!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/uncommon/vit.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.vit}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.int!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/uncommon/int.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.int}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.krm!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/uncommon/krm.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[60%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.krm}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}

                                                </div>
                                            </div>
                                            <div className={'w-[80%] mx-auto mt-[1vh] sm:mt-[2vw] flex justify-between'}>
                                                <div className={'w-[50%] inline-block'}>
                                                    <p className={'text-white inline-block align-top text-[2.5vh] sm:text-[1.2vw] font-bold font-josefin'}>{item.rentPrice}</p>
                                                    <div className={'w-[3.5vh] h-[3.5vh] sm:w-[2vw] sm:h-[2vw] align-top ml-[10%] inline-block relative'}>
                                                        <Image src={'/images/wallet_carrot.png'} layout={'fill'}></Image>
                                                    </div>
                                                </div>
                                                <button className={'w-[50%] sm:h-[2vw] bg-[#DCF646] h-[3.5vh] rounded-full text-white inline-block align-top text-[2.5vh] sm:text-[1.2vw] text-[#000] font-bold font-soyuz'} onClick={()=>{RentItem(item)}}>
                                                    buy
                                                </button>
                                            </div>
                                        </div>
                                    );
                                }

                                else if(item.rarity=='epic'){
                                    return(
                                        <div className={'w-[48%] sm:w-[45%] sm:mt-[0vw] sm:mb-[4vw] mt-[2vh] mb-[2vh]'}>
                                            <div className={'w-full relative h-[23vh] sm:h-[14.2vw] rounded-[2vw]'}  key={item.id}>
                                                <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                                    <Image src={'/images/card_generation/epic/bg.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'w-[8vh] h-[8vh] sm:w-[4vw] sm:h-[4vw] relative mx-auto mt-[1.5vh]'}>
                                                    <Image src={'/images/miniatures/'+ucFirst(item.type)+'/'+item.name+'.png'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                                    <Image src={'/images/equipment_module/'+item.type+'.svg'} layout={'fill'}></Image>
                                                </div>
                                                <p className={'text-white font-josefin text-[1.8vh] sm:text-[1.2vw] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                                <p className={'w-full text-white font-soyuz text-[1.8vh] sm:text-[1.2vw] text-center'}>{item.name}</p>
                                                <div className={'relative w-[40%] inline-block mx-[2%] ml-[8%]'}>
                                                    {item.dex!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/epic/dex.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.dex}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.str!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/epic/str.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.str}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.vit!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/epic/vit.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.vit}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.int!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/epic/int.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.int}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.krm!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/epic/krm.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.krm}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}

                                                </div>
                                                <div className={'align-top relative w-[40%] inline-block ml-[2%] mr-[8%]'}>
                                                    <p className={'w-full relative text-white text-center font-medium font-josefin text-[1vh] sm:text-[0.7vw]'}>Requierements</p>
                                                    {item.requirements?.dex!=0&&item.requirements?.dex!=undefined?
                                                        <div className={'w-full relative flex justify-center items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] mx-[1vh] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/epic/dex.svg'} layout={'fill'}></Image>
                                                            </div>

                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>{item.requirements.dex}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.requirements?.str!=0&&item.requirements?.str!=undefined?
                                                        <div className={'w-full relative flex justify-center items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] mx-[1vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/epic/str.svg'} layout={'fill'}></Image>
                                                            </div>

                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                {item.requirements.str}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.requirements?.vit!=0&&item.requirements?.vit!=undefined?
                                                        <div className={'w-full relative flex justify-center items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] mx-[1vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/epic/vit.svg'} layout={'fill'}></Image>
                                                            </div>

                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                {item.requirements.vit}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.requirements?.int!=0&&item.requirements?.int!=undefined?
                                                        <div className={'w-full relative flex justify-center items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] mx-[1vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/epic/int.svg'} layout={'fill'}></Image>
                                                            </div>

                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                {item.requirements.int}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.requirements?.krm!=0&&item.requirements?.krm!=undefined?
                                                        <div className={'w-full relative flex justify-center items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] mx-[1vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/epic/krm.svg'} layout={'fill'}></Image>
                                                            </div>

                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                {item.requirements.krm}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                </div>
                                            </div>
                                            <div className={'w-[80%] mx-auto mt-[1vh] sm:mt-[2vw] flex justify-between'}>
                                                <div className={'w-[50%] inline-block'}>
                                                    <p className={'text-white inline-block align-top text-[2.5vh] sm:text-[1.2vw] font-bold font-josefin'}>{item.rentPrice}</p>
                                                    <div className={'w-[3.5vh] h-[3.5vh] sm:w-[2vw] sm:h-[2vw] align-top ml-[10%] inline-block relative'}>
                                                        <Image src={'/images/wallet_carrot.png'} layout={'fill'}></Image>
                                                    </div>
                                                </div>
                                                <button className={'w-[50%] sm:h-[2vw] bg-[#C463FF] h-[3.5vh] rounded-full text-white inline-block align-top text-[2.5vh] sm:text-[1.2vw] text-[#000] font-bold font-soyuz'} onClick={()=>{RentItem(item)}}>
                                                    buy
                                                </button>
                                            </div>
                                        </div>
                                    );
                                }


                                else if(item.rarity=='legendary'){
                                    return(
                                        <div className={'w-[48%] sm:w-[45%] sm:mt-[0vw] sm:mb-[4vw] mt-[2vh] mb-[2vh]'}>
                                            <div className={'w-full relative h-[23vh] sm:h-[14.2vw] rounded-[2vw]'}  key={item.id}>
                                                <div className={'w-full absolute top-0 rounded-[2vw] h-full'}>
                                                    <Image src={'/images/card_generation/legendary/bg.svg'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'w-[8vh] h-[8vh] sm:w-[4vw] sm:h-[4vw] relative mx-auto mt-[1.5vh]'}>
                                                    <Image src={'/images/miniatures/'+ucFirst(item.type)+'/'+item.name+'.png'} layout={'fill'}></Image>
                                                </div>
                                                <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] absolute top-[1vh] left-[1vh]'}>
                                                    <Image src={'/images/equipment_module/'+item.type+'.svg'} layout={'fill'}></Image>
                                                </div>
                                                <p className={'text-white font-josefin text-[1.8vh] sm:text-[1.2vw] text-right absolute top-[1vh] right-[1vh]'}>ID: {item.id}</p>
                                                <p className={'w-full text-white font-soyuz text-[1.8vh] sm:text-[1.2vw] text-center'}>{item.name}</p>
                                                <div className={'relative w-[40%] inline-block mx-[2%] ml-[8%]'}>
                                                    {item.dex!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/legendary/dex.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.dex}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.str!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/legendary/str.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.str}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.vit!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/legendary/vit.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.vit}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.int!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/legendary/int.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.int}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.krm!=0?
                                                        <div className={'w-full relative flex justify-between items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/legendary/krm.svg'} layout={'fill'}></Image>
                                                            </div>
                                                            <div className={'dashed-line mx-[5%] w-[40%] h-[1px]'}>

                                                            </div>
                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                +{item.krm}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}

                                                </div>
                                                <div className={'align-top relative w-[40%] inline-block ml-[2%] mr-[8%]'}>
                                                    <p className={'w-full relative text-white text-center font-medium font-josefin text-[1vh] sm:text-[0.7vw]'}>Requierements</p>
                                                    {item.requirements?.dex!=0&&item.requirements?.dex!=undefined?
                                                        <div className={'w-full relative flex justify-center items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] mx-[1vh] h-[2vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/legendary/dex.svg'} layout={'fill'}></Image>
                                                            </div>

                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>{item.requirements.dex}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.requirements?.str!=0&&item.requirements?.str!=undefined?
                                                        <div className={'w-full relative flex justify-center items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] mx-[1vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/legendary/str.svg'} layout={'fill'}></Image>
                                                            </div>

                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                {item.requirements.str}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.requirements?.vit!=0&&item.requirements?.vit!=undefined?
                                                        <div className={'w-full relative flex justify-center items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] mx-[1vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/legendary/vit.svg'} layout={'fill'}></Image>
                                                            </div>

                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                {item.requirements.vit}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.requirements?.int!=0&&item.requirements?.int!=undefined?
                                                        <div className={'w-full relative flex justify-center items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] mx-[1vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/legendary/int.svg'} layout={'fill'}></Image>
                                                            </div>

                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                {item.requirements.int}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    {item.requirements?.krm!=0&&item.requirements?.krm!=undefined?
                                                        <div className={'w-full relative flex justify-center items-center'}>
                                                            <div className={'w-[2vh] sm:w-[1.5vw] sm:h-[1.5vw] h-[2vh] mx-[1vh] relative inline-block'}>
                                                                <Image src={'/images/card_generation/legendary/krm.svg'} layout={'fill'}></Image>
                                                            </div>

                                                            <p className={'text-white font-soyuz text-[2vh] sm:text-[1.2vw] mt-[-0.4vh] text-center'}>
                                                                {item.requirements.krm}
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className={'hidden'}>

                                                        </div>}
                                                    <p className={'w-[90%] relative text-white text-[1.2vh] ml-[10%] font-medium font-josefin mt-[0.3vh] sm:text-[0.7vw]'}>Status: <span className={'font-bold text-[1.5vh] sm:text-[1vw]'}>Elite</span> </p>

                                                </div>
                                            </div>
                                            <div className={'w-[80%] mx-auto mt-[1vh] sm:mt-[2vw] flex justify-between'}>
                                                <div className={'w-[50%] inline-block'}>
                                                    <p className={'text-white inline-block align-top text-[2.5vh] sm:text-[1.2vw] font-bold font-josefin'}>{item.rentPrice}</p>
                                                    <div className={'w-[3.5vh] h-[3.5vh] sm:w-[2vw] sm:h-[2vw] align-top ml-[10%] inline-block relative'}>
                                                        <Image src={'/images/wallet_carrot.png'} layout={'fill'}></Image>
                                                    </div>
                                                </div>
                                                <button className={'w-[50%] sm:h-[2vw] bg-[#FAC642] h-[3.5vh] rounded-full text-white inline-block align-top text-[2.5vh] sm:text-[1.2vw] text-[#000] font-bold font-soyuz'} onClick={()=>{RentItem(item)}}>
                                                    buy
                                                </button>
                                            </div>
                                        </div>
                                    );
                                }

                        }
                        else{

                        }
                    }
                })}
            </div>
        );
    }

    else if(currentMarketplace=='instruments'){
        return (
            <div className={'w-full h-full overflow-y-scroll overflow-x-hidden p-[2vw] flex justify-around flex-wrap'}><h2 className={'text-white absolute font-soyuz text-[4.6vh] top-[19vh] left-[2vw] w-[96vw] text-center sm:text-[2vw] sm:left-0 sm:w-full'}>Coming soon</h2></div>
        );
    }

    else if(currentMarketplace=='houses'){
        return (
            <div className={'w-full h-full overflow-y-scroll overflow-x-hidden p-[2vw] flex justify-around flex-wrap'}><h2 className={'text-white absolute font-soyuz text-[4.6vh] top-[19vh] left-[2vw] w-[96vw] text-center sm:text-[2vw] sm:left-0 sm:w-full'}>Coming soon</h2></div>
        );
    }


    return (
        <div className={'w-full h-full'}>

        </div>
    );
};

export default MarketplaceCards;