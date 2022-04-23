import React from 'react';

import {bunnyInterface} from "./bunnyInterface";
import {equipment} from "./equipmentItemInterface";
import Image from "next/image";


interface marketplaceCards extends  bunnyInterface{
    currentMarketplace:string,
    inventory:{
        id:number,
        image:string,
        name:string,
        type:string,
        str:number,
        dex:number,
        vit:number,
        int:number,
        krm:number,
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



    const marketplaceItems=[
        {
            id:40,
            image:'Tape_black10',
            name:'Tape_black10',
            type:'clothes',
            str:4,
            dex:4,
            vit:4,
            int:4,
            krm:5,
            rentPrice:5,
            buyPrice:99,

        },{
            id:42,
            image:'Tape_Gray10',
            name:'Tape_Gray10',
            type:'clothes',
            str:4,
            dex:4,
            vit:4,
            int:4,
            krm:5,
            rentPrice:5,
            buyPrice:99,

        },
        {
            id:44,
            image:'Iron_man_icon3',
            name:'Iron_man_icon3',
            type:'clothes',
            str:4,
            dex:4,
            vit:4,
            int:4,
            krm:5,
            rentPrice:5,
            buyPrice:99,

        },
        {
            id:45,
            image:'00710',
            name:'00710',
            type:'clothes',
            str:4,
            dex:4,
            vit:4,
            int:4,
            krm:5,
            rentPrice:5,
            buyPrice:99,

        },
        {
            id:46,
            image:'Gray_fur5',
            name:'Gray_fur5',
            type:'ears',
            str:4,
            dex:4,
            vit:4,
            int:4,
            krm:5,
            rentPrice:5,
            buyPrice:99,

        },
        {
            id:47,
            image:'Health_bracelet_r5',
            name:'Health_bracelet_r5',
            type:'right hand',
            str:4,
            dex:4,
            vit:4,
            int:4,
            krm:5,
            rentPrice:50,
            buyPrice:99,

        },
        {
            id:48,
            image:'Whip_l5',
            name:'Whip_l5',
            type:'left hand',
            str:4,
            dex:4,
            vit:4,
            int:4,
            krm:5,
            rentPrice:99,
            buyPrice:99,

        },
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
                rentPrice:5,
                buyPrice:99,

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
                rentPrice:5,
                buyPrice:99,
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
                rentPrice:5,
                buyPrice:99,
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
                rentPrice:5,
                buyPrice:99,
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
                rentPrice:5,
                buyPrice:99,
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
                rentPrice:5,
                buyPrice:99,
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
                rentPrice:5,
                buyPrice:99,
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
                rentPrice:5,
                buyPrice:99,
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
                rentPrice:5,
                buyPrice:99,
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
                rentPrice:5,
                buyPrice:99,
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
                rentPrice:5,
                buyPrice:99,
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
                rentPrice:5,
                buyPrice:99,
            },
            {
                id:340,
                image:'Business_suit10',
                name:'Business_suit10',
                type:'clothes',
                str:4,
                dex:4,
                vit:4,
                int:4,
                krm:5,
                rentPrice:5,
                buyPrice:99,
            },
            {
                id:310,
                image:'Pajama_green10',
                name:'Pajama_green10',
                type:'clothes',
                str:2,
                dex:1,
                vit:5,
                int:4,
                krm:5,
                rentPrice:5,
                buyPrice:99,
            },
            {
                id:120,
                image:'Batman3',
                name:'Batman3',
                type:'clothes',
                str:3,
                dex:2,
                vit:4,
                int:4,
                krm:1,
                rentPrice:5,
                buyPrice:99,
            },
            {
                id:110,
                image:'Right_ring_g10',
                name:'Right_ring_g10',
                type:'ears',
                str:2,
                dex:1,
                vit:5,
                int:4,
                krm:5,
                rentPrice:5,
                buyPrice:99,
            },
            {
                id:720,
                image:'Right_ring_s10',
                name:'Right_ring_s10',
                type:'ears',
                str:2,
                dex:1,
                vit:5,
                int:4,
                krm:5,
                rentPrice:5,
                buyPrice:99,
            },
            {
                id:210,
                image:'Hummer_l5',
                name:'Hummer_l5',
                type:'left hand',
                str:2,
                dex:1,
                vit:5,
                int:4,
                krm:5,
                rentPrice:5,
                buyPrice:99,
            },
            {
                id:220,
                image:'Ice_cream_l5',
                name:'Ice_cream_l5',
                type:'left hand',
                str:2,
                dex:1,
                vit:5,
                int:4,
                krm:5,
                rentPrice:5,
                buyPrice:99,
            },
            {
                id:410,
                image:'Chain_g_r10',
                name:'Chain_g_r10',
                type:'right hand',
                str:2,
                dex:1,
                vit:5,
                int:4,
                krm:5,
                rentPrice:5,
                buyPrice:99,
            },
            {
                id:430,
                image:'Whatch_r10',
                name:'Whatch_r10',
                type:'right hand',
                str:2,
                dex:1,
                vit:5,
                int:4,
                krm:5,
                rentPrice:5,
                buyPrice:99,
            },
            {
                id:510,
                image:'ETH_gold_n5',
                name:'ETH_gold_n5',
                type:'neck',
                str:2,
                dex:1,
                vit:5,
                int:4,
                krm:5,
                rentPrice:5,
                buyPrice:99,
            },
            {
                id:540,
                image:'Playboy_gold10',
                name:'Playboy_gold10',
                type:'neck',
                str:2,
                dex:1,
                vit:5,
                int:4,
                krm:5,
                rentPrice:5,
                buyPrice:99,
            },
            {
                id:610,
                image:'Crown_g10',
                name:'Crown_g10',
                type:'hat',
                str:2,
                dex:1,
                vit:5,
                int:4,
                krm:5,
                rentPrice:5,
                buyPrice:99,
            },
            {
                id:10,
                image:'White_hat_carrot10',
                name:'White_hat_carrot10',
                type:'hat',
                str:2,
                dex:1,
                vit:5,
                int:4,
                krm:5,
                rentPrice:5,
                buyPrice:99,
            },

    ];

    const RentItem=(item:{
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
    },)=>{
        let newItem={
            id:item.id,
            image:item.image,
            name:item.name,
            type:item.type,
            str:item.str,
            dex:item.dex,
            vit:item.vit,
            int:item.int,
            krm:item.krm,
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

    if(currentMarketplace=='looks'){
        return (
            <div className={'w-full h-full overflow-y-scroll overflow-x-hidden p-[2vw] flex justify-around flex-wrap'}>
                {marketplaceItems.map(item=> {
                    if(item.type=='clothes'||item.type=='ears'||item.type=='left hand'||item.type=='hat'||item.type=='right hand'||item.type=='neck'){
                        if(checkItemInInventory(item.id)==false){
                            return(
                                <div className={'w-[28%] mt-[10vw]'} key={item.name}>
                                    <div className={'w-full relative h-[15vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>
                                        <div className={'w-full absolute rounded-[2vw] top-0 h-full'}>
                                            <Image src={'/images/bunny_generation/'+ucFirst(item.type)+'/'+item.image+'.png'} layout={'fill'}></Image>
                                        </div>
                                        <div className={'w-full absolute top-[-1.5vh] h-[3vh]'}>
                                            <div className={'text-sm leading-[100%] justify-center text-[#000] font-soyuz inline-flex align-top w-[22%] rounded-full bg-[#FFC634] h-[3vh]'}>
                                                {item.id}
                                            </div>
                                            <div className={'text-[1.8vh] pl-[1vw] leading-[158%] w-[78%] text-white font-soyuz inline-block align-top rounded-full h-[3vh]'}>
                                                {item.name}
                                            </div>
                                        </div>
                                    </div>
                                    {currentBuyingTab=='rent'?<div className={'w-full mt-[2vh] flex px-[0.3vw] justify-between h-[4vh]'}>
                                            <div className={'w-[38%] h-full'}>
                                                <p className={'inline-block align-middle w-[50%]'}>{item.rentPrice}</p>
                                                <div className={'w-[50%] align-middle inline-block relative h-full'}>
                                                    <Image src={'/images/wallet_carrot.png'} layout={'fill'}></Image>
                                                </div>
                                            </div>
                                            <div className={'w-[60%] font-soyuz text-center rounded-full h-full text-[#000] text-[2.5vh] vitality-bar-positive'} onClick={()=>{RentItem(item)}}>
                                                rent
                                            </div>
                                        </div>:
                                        <div className={'w-full mt-[2vh] flex px-[1vw] justify-between h-[4vh]'}>
                                            <div className={'w-[35%] h-full'}>
                                                {item.buyPrice}$
                                            </div>
                                            <div className={'w-[60%] font-soyuz text-center rounded-full h-full text-[#000] text-[2.5vh] vitality-bar-positive'}>
                                                buy
                                            </div>
                                        </div>}
                                </div>
                            );
                        }
                        else{
                            return(
                                <div className={'w-[28%] mt-[10vw] relative'} key={item.name}>
                                    <div className={'w-full relative h-[15vh] inventory-card-bg rounded-[2vw]'}>
                                        <div className={'w-full absolute rounded-[2vw] top-0 h-full'}>
                                            <Image src={'/images/bunny_generation/'+ucFirst(item.type)+'/'+item.image+'.png'} layout={'fill'}></Image>
                                        </div>
                                    </div>
                                    <div className={'w-full h-[15vh]  rounded-[2vw] absolute top-0 left-0 backdrop-blur-sm flex justify-center items-center align-middle'}>
                                        <p className={'text-white text-center inline-block absolute items-center font-soyuz text-[5vw]'}>Already minted</p>
                                    </div>
                                    <div className={'w-full absolute top-[-1.5vh] h-[3vh]'}>
                                        <div className={'text-sm leading-[100%] justify-center text-[#000] font-soyuz inline-flex align-top w-[22%] rounded-full bg-[#FFC634] h-[3vh]'}>
                                            {item.id}
                                        </div>
                                        <div className={'text-[1.8vh] pl-[1vw] leading-[158%] w-[78%] text-white font-soyuz inline-block align-top rounded-full h-[3vh]'}>
                                            {item.name}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    }
                })}
            </div>
        );
    }

    else if(currentMarketplace=='instruments'){
        return (
            <div className={'w-full h-full overflow-y-scroll overflow-x-hidden p-[2vw] flex justify-around flex-wrap'}>
                {/*{inventory.map(item=> {*/}
                {/*    if(item.type=='hat'){*/}
                {/*        return(*/}
                {/*            <div className={'w-[28%] mt-[4vw] relative h-[15vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>*/}
                {/*                {bunny.equipment.hat?.name==item.name?*/}
                {/*                    <div className={'w-full absolute top-0 border-2 border-[#D5F908] rounded-[2vw] h-full'}>*/}
                {/*                        <Image src={'/images/bunny_generation/Hats/'+item.image+'.png'} layout={'fill'}></Image>*/}
                {/*                    </div>*/}
                {/*                    :*/}
                {/*                    <div className={'w-full absolute rounded-[2vw] top-0 h-full'}>*/}
                {/*                        <Image src={'/images/bunny_generation/Hats/'+item.image+'.png'} layout={'fill'}></Image>*/}
                {/*                    </div>*/}
                {/*                }*/}
                {/*                <div className={'w-full absolute top-[-1.5vh] h-[3vh]'}>*/}
                {/*                    <div className={'text-sm leading-[100%] justify-center text-[#000] font-soyuz inline-flex align-top w-[22%] rounded-full bg-[#FFC634] h-[3vh]'}>*/}
                {/*                        {item.id}*/}
                {/*                    </div>*/}
                {/*                    <div className={'text-[1.8vh] leading-[158%] w-[78%] text-white font-soyuz inline-block align-top rounded-full h-[3vh]'}>*/}
                {/*                        {item.name}*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        );*/}
                {/*    }*/}
                {/*})}*/}
            </div>
        );
    }

    else if(currentMarketplace=='houses'){
        return (
            <div className={'w-full h-full overflow-y-scroll overflow-x-hidden p-[2vw] flex justify-around flex-wrap'}>
                {/*{inventory.map(item=> {*/}
                {/*    if(item.type=='left hand'){*/}
                {/*        return(*/}
                {/*            <div className={'w-[28%] mt-[4vw] relative h-[15vh] inventory-card-bg rounded-[2vw]'}  key={item.id}>*/}
                {/*                {bunny.equipment.leftHand?.name==item.name?*/}
                {/*                    <div className={'w-full absolute top-0 border-2 border-[#D5F908] rounded-[2vw] h-full'}>*/}
                {/*                        <Image src={'/images/bunny_generation/Left hand/'+item.image+'.png'} layout={'fill'}></Image>*/}
                {/*                    </div>*/}
                {/*                    :*/}
                {/*                    <div className={'w-full absolute rounded-[2vw] top-0 h-full'}>*/}
                {/*                        <Image src={'/images/bunny_generation/Left hand/'+item.image+'.png'} layout={'fill'}></Image>*/}
                {/*                    </div>*/}
                {/*                }*/}
                {/*                <div className={'w-full absolute top-[-1.5vh] h-[3vh]'}>*/}
                {/*                    <div className={'text-sm leading-[100%] justify-center text-[#000] font-soyuz inline-flex align-top w-[22%] rounded-full bg-[#FFC634] h-[3vh]'}>*/}
                {/*                        {item.id}*/}
                {/*                    </div>*/}
                {/*                    <div className={'text-[1.8vh] leading-[158%] w-[78%] text-white font-soyuz inline-block align-top rounded-full h-[3vh]'}>*/}
                {/*                        {item.name}*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        );*/}
                {/*    }*/}
                {/*})}*/}
            </div>
        );
    }


    return (
        <div className={'w-full h-full'}>

        </div>
    );
};

export default MarketplaceCards;